<template>
  <div class="release-note py-16 relative last:pb-0">
    <div class="title-wrapper mb-4">
      <h2 :id="id">
        {{ title }}
      </h2>
      <time :datetime="date" class="text-14 text-font-alt3">
        Released on {{ normalizedDate }}
      </time>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { normalizeDate, slugify } from '~/utilities/project.functions'

@Component
export default class ReleaseNote extends Vue {
  @Prop() title
  @Prop() date

  get normalizedDate() {
    return normalizeDate(this.date)
  }

  get id() {
    return `release-${slugify(this.title)}`
  }
}
</script>
<style lang="scss">
.release-note {
  @apply relative;

  &::after {
    content: '';
    @apply absolute bottom-0 w-screen h-px bg-alt -left-6;

    @screen lg {
      width: calc(100vw - 240px);
      @apply -left-12;
    }
  }

  &:last-child::after {
    background: none;
  }

  h2 {
    @apply mb-0;
  }

  hr {
    @apply mt-6 pb-6 border-base;
  }

  .content {
    h3 {
      @apply mt-8 mb-2;
    }

    table {
      @apply mb-8;

      th:nth-child(2),
      td:nth-child(2) {
        @apply w-1/6;
      }
    }

    p {
      & + p {
        @apply my-4;
      }

      strong {
        @apply block text-font-primary;
      }
    }

    li {
      @apply mb-2;

      a {
        @apply text-font-accent font-semibold;
      }
    }
  }
}
</style>
