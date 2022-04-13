<template>
  <div :id="slug" class="guides my-14 hidden md:block">
    <div class="flex mb-4 items-center">
      <h2>{{ title }}</h2>
      <nav class="ml-auto text-20">
        <span class="icon-arrow-left cursor-pointer" />
        <span class="icon-arrow-right cursor-pointer" />
      </nav>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { slugify } from '~/utilities/project.functions'

@Component
export default class Examples extends Vue {
  @Prop() title
  get slug() {
    return slugify(this.title)
  }
}
</script>
<style lang="scss">
.guides {
  h2 {
    @apply mt-0;
  }
}
</style>
