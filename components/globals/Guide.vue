<template>
  <a class="guide flex flex-col md:flex-row" :href="href" target="_blank">
    <img class="rounded-t md:rounded-b md:mr-8 md:w-1/3" :src="img" />
    <div class="md:w-2/3 bg-base md:rounded-t rounded-b border border-base">
      <div class="px-8 py-6">
        <slot />
      </div>
    </div>
  </a>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Example extends Vue {
  @Prop() img
  @Prop() href
}
</script>
<style lang="scss">
.guide {
  img {
    @apply my-0;
  }
  pre {
    @apply mb-4;
  }
  h6 {
    @apply mb-1;
  }
}
</style>
