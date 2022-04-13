<template>
  <div
    class="
      deprecated-item
      flex flex-col
      md:flex-row
      overflow-hidden
      mt-3
      bg-subdued
      rounded
      text-14
    "
  >
    <div class="p-4">
      <p>
        <strong class="flex items-center flex-wrap">
          <span class="text-font-alt3">{{ fromTitle }}</span>
          <template v-if="toTitle">
            <span class="icon-arrow-right mx-1" />
            <span>{{ toTitle }}</span>
          </template>
        </strong>
      </p>
      <p class="text-font-alt3 mt-1 md:mt-0">
        {{ description }}
        <slot />
      </p>
    </div>
    <div
      class="
        p-4
        md:ml-auto
        whitespace-nowrap
        flex
        md:flex-col md:border-t-0 md:border-l
        border-base border-t
      "
    >
      <p>
        <strong> Supported until </strong>
      </p>
      <p>
        {{ supportedUntil }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Tag } from '@chargetrip/internal-vue-components'

import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({ components: { Tag } })
export default class Steps extends Vue {
  @Prop() fromTitle
  @Prop() toTitle
  @Prop() description
  @Prop() supportedUntil
}
</script>
<style lang="scss">
.deprecated-item + h3 {
  @apply mt-12;
}
</style>
