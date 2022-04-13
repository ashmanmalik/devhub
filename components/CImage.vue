<template>
  <ChargetripImage
    :class="{
      'max-w-sm': maxWidth === 'sm',
      'max-w-md': maxWidth === 'md',
      'max-w-lg': maxWidth === 'lg',
      'max-w-full': maxWidth === 'full',
    }"
    :src="normalizedSrc"
  />
</template>
<script lang="ts">
import { Component, Vue, Prop, Getter } from 'nuxt-property-decorator'
import { Image as ChargetripImage } from '@chargetrip/internal-vue-components'

@Component({ components: { ChargetripImage } })
export default class CImage extends Vue {
  @Prop() src
  @Prop() alt
  @Prop() maxWidth
  @Getter darkMode

  get normalizedSrc() {
    const src = this.src.slice(0, 1) === '/' ? this.src.slice(1) : this.src

    return `/${this.darkMode ? 'dark' : 'light'}-${src}`
  }
}
</script>
