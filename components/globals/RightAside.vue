<template>
  <div
    class="
      right-aside
      fixed
      border-l border-base
      xl2:block
      right-0
      bg-body
      z-40
      hidden
    "
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RightAside extends Vue {}
</script>
<style lang="scss">
.right-aside {
  top: 64px;
  width: 480px;
  height: calc(100% - 64px);

  .article-teaser {
    @apply border-b border-base;
  }
}
</style>
