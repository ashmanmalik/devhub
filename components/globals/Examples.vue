<template>
  <right-aside class="examples px-8 flex flex-col overflow-y-scroll">
    <ActionBar :sticky="true">
      <h2>Examples</h2>
    </ActionBar>
    <div class="container">
      <slot />
    </div>
  </right-aside>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { ActionBar } from '@chargetrip/internal-vue-components'

@Component({ components: { ActionBar } })
export default class extends Vue {}
</script>
<style lang="scss">
.examples {
  height: calc(100vh - 64px);

  .example {
    &:last-child {
      @apply pb-8;
    }
    &:not(:last-child) {
      @apply mb-4;
    }
  }
}
</style>
