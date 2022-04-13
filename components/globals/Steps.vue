<template>
  <div class="steps relative mt-14">
    <slot />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Steps extends Vue {}
</script>
<style lang="scss">
.steps {
  @screen md {
    .dashed {
      margin-left: 5px;
      background-image: linear-gradient(
        var(--alt4) 33%,
        rgba(255, 255, 255, 0) 0%
      );
      background-position: right;
      background-size: 3px 9px;
      background-repeat: repeat-y;
    }
    .step {
      counter-increment: step;

      &:nth-child(2) .side,
      &:last-child .number-wrapper {
        &::before {
          @apply absolute top-0 left-0 bg-body w-10 z-10;

          content: '';
        }
      }

      &:last-child {
        @apply mb-0;
      }

      .number {
        &::before {
          content: counter(step);
        }
      }
    }
  }
}
</style>
