<template>
  <div class="dev-portal-table property-table">
    <CTable class="hidden md:table">
      <Row>
        <Cell v-for="(col, c) in columns" :key="c" tag="th">
          {{ col }}
        </Cell>
      </Row>
      <Row v-for="(row, key) in rows" :key="key">
        <Cell
          v-for="(_, c) in columns"
          :key="`${key}-${c}`"
          :font-family="c <= 1 ? 'mono' : null"
          :color="c === 1 ? 'warning' : null"
        >
          <span v-html="$options.filters.markdown(row[c])" />
        </Cell>
      </Row>
    </CTable>
    <div class="block md:hidden">
      <property
        v-for="(row, key) in rows"
        :key="key"
        :force-active="true"
        :name="row[0]"
        :type-str="row[1]"
        :description="row[2]"
        :required="row[3] === requiredEnum.yes"
        :optional="row[3] === requiredEnum.no"
      ></property>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Table as CTable, Row, Cell } from '@chargetrip/internal-vue-components'
import Property from '~/components/Property.vue'
enum Required {
  yes = 'Yes',
  no = 'No',
}

@Component({
  components: { Property, CTable, Row, Cell },
})
export default class PropertyTable extends Vue {
  @Prop() keys
  @Prop() types
  @Prop() descriptions
  @Prop() required
  requiredEnum = Required

  get columns() {
    const columns = ['Key', 'Type', 'Description']

    if (this.required) {
      columns.push('Required')
    }

    return columns
  }

  get rows() {
    if (!this.keys) {
      return []
    }

    const keys = Array.isArray(this.keys) ? this.keys : this.keys?.split('|')

    const types = Array.isArray(this.types)
      ? this.types
      : this.types?.split('|')

    const descriptions = Array.isArray(this.descriptions)
      ? this.descriptions
      : this.descriptions?.split('|')

    const required = Array.isArray(this.required)
      ? this.required
      : this.required?.split('|')

    return keys.map((_, i) => [
      keys?.[i].trim(),
      types?.[i].trim(),
      descriptions?.[i].trim(),
      required?.[i]?.trim(),
    ])
  }
}
</script>
