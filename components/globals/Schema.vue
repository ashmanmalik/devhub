<template>
  <div
    class="schema"
    :data-type="type"
    :data-name="name"
    :data-hidden="hidden"
    :data-frequent="frequent"
  >
    <section v-for="(section, i) in sections" :key="i" :class="section.id">
      <h3 :id="section.id" class="mb-3">
        {{ section.title }}
      </h3>
      <div>
        <Property
          v-for="(item, c) in section.items"
          :key="`${i}-${c}`"
          :show-required="!i"
          v-bind="item"
        />
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import Property from '~/components/Property.vue'
import {
  getAttributes,
  getFrequentlyUsedAttributes,
  getSections,
} from '~/utilities/schema-utils'

@Component({
  components: { Property },
})
export default class Schema extends Vue {
  @Getter schemas
  @Mutation setSchemas
  @Prop({ default: 'Query' }) type
  @Prop() name
  @Prop({ default: () => [] }) frequent!: string[]
  @Prop({ default: () => [] }) hidden!: number[]
  requestParameters: any[] = []
  returnFields: any = []

  get schemaKey() {
    return `${this.type}-${this.name}`
  }

  get sections() {
    if (!this.schema) return []
    return getSections({
      requestParameters: this.schema.requestParameters,
      frequentlyUsedAttributes: getFrequentlyUsedAttributes(
        this.schema.returnFields,
        this.frequent
      ),
      attributes: getAttributes(this.schema.returnFields, this.frequent),
    })
  }

  async getJson() {
    const json = await import(`~/static/schema/${this.schemaKey}.json`).catch(
      console.log
    )

    return json?.default
  }

  get schema() {
    return this.schemas[this.schemaKey]
  }

  async fetch() {
    const schema: any = await this.getJson()
    this.requestParameters = schema.args
    this.returnFields = schema?.fields || []

    this.setSchemas({
      ...this.schemas,
      [this.schemaKey]: {
        requestParameters: this.requestParameters,
        returnFields: this.returnFields,
      },
    })
    return schema
  }
}
</script>
<style lang="scss">
.schema {
  h2 {
    @apply text-16;
  }
}
</style>
