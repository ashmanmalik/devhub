<template>
  <section class="article-teaser-section">
    <div class="flex mb-4 items-baseline">
      <h2 class="title">
        {{ title }}
      </h2>
      <a class="ml-auto" target="_blank" href="https://medium.com/chargetrip">
        <img src="medium.svg" alt="Medium" />
      </a>
    </div>
    <slot />
  </section>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ArticleTeaserSection extends Vue {
  @Prop() title
}
</script>
<style lang="scss">
.article-teaser-section {
  .article-teaser {
    @apply rounded bg-subdued p-6 pt-14;

    img {
      transform: translateY(-50%);
      @apply top-1/2 w-1/3 h-auto;
    }

    .title,
    h2,
    h3 {
      max-width: 224px;
    }
  }
}
</style>
