<template>
  <div
    class="property-arguments overflow-hidden bg-subdued rounded-b-lg"
    :class="{ active }"
  >
    <div
      class="toggle rounded-lg cursor-pointer text-font-alt3 flex items-center"
      @click="active = !active"
    >
      <span
        class="mr-3"
        :class="{ 'icon-add': !active, 'icon-close': active }"
      />
      <p>
        <strong> {{ active ? 'Hide' : 'Show' }} arguments </strong>
      </p>
    </div>
    <div v-show="active" class="arguments">
      <Property v-for="(property, key) in args" :key="key" v-bind="property" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Property from '~/components/Property.vue'

@Component({ components: { Property } })
export default class PropertyArguments extends Vue {
  @Prop() args
  active = false
}
</script>
<style lang="scss">
.property-arguments {
  .arguments .property {
    @apply border-0 border-t border-alt2 rounded-none;

    .content {
      @apply p-0;
    }

    .container {
      @apply rounded-none border-0 rounded-lg bg-subdued;
    }
  }
}
</style>
