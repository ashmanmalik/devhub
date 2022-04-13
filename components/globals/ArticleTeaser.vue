<template>
  <article
    class="
      article-teaser
      pl-8
      py-8
      block
      relative
      pr-20
      overflow-hidden
      relative
    "
  >
    <h3 v-if="title" class="title">
      {{ title }}
    </h3>
    <p v-if="description">
      {{ description }}
    </p>
    <slot />
    <strong class="text-accent mt-3 block"> Read more </strong>
    <div class="absolute inset-0">
      <ChargetripImage
        :src="src"
        :params="{ h: 'auto' }"
        :show-placeholder="false"
        alt="globe"
      />
    </div>
    <a
      :href="href"
      class="text-accent absolute inset-0 mt-3 block"
      target="_blank"
      rel="noopener"
    />
  </article>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Image as ChargetripImage } from '@chargetrip/internal-vue-components'

@Component({ components: { ChargetripImage } })
export default class CImage extends Vue {
  @Prop() href
  @Prop() title
  @Prop() description
  @Prop() src
}
</script>
<style lang="scss">
.article-teaser {
  img {
    height: 150%;
    transform: translateY(-33.333%);
    @apply mr-0;
  }

  p {
    @apply my-3;
  }
}
</style>
