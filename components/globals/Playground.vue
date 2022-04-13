<template>
  <right-aside class="playground">
    <div
      class="
        h-3
        w-full
        z-10
        absolute
        left-0
        top-1/2
        transform
        -translate-y-1/2
        cursor-ns-resize
      "
      :style="{ top: `${height}%` }"
      @mousedown="onMouseDown"
    />
    <div class="container flex flex-col">
      <slot />
    </div>
  </right-aside>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Base from '~/mixins/base'
import { Listen } from '~/utilities/decorators'
import RightAside from '~/components/globals/RightAside.vue'

@Component({ components: { RightAside } })
export default class extends Mixins(Base) {
  codeBlock: any = null
  height = 50
  isResizing = false

  mounted() {
    this.codeBlock = document.querySelector('.code-block')
  }

  onMouseDown() {
    this.isResizing = true
  }

  @Listen('mouseup')
  onMouseUp() {
    this.isResizing = false
  }

  @Listen('mousemove')
  onMouseMove(e) {
    if (!this.isResizing || !this.codeBlock || !this.$el) return

    const height =
      ((e.clientY - 64) / (this.$el as HTMLElement).offsetHeight) * 100

    const clamped = Math.min(90, Math.max(10, height))

    this.height = clamped
    this.codeBlock.style.flex = `0 0 ${clamped}%`
  }
}
</script>
<style lang="scss">
.playground {
  .container {
    height: calc(100vh - 64px);

    > * {
      @apply flex-1 overflow-scroll;

      &:first-child {
        @apply bg-subdued border-base;

        .action-bar {
          background: var(--sticky-subdued-to-down-bg);
        }
        header {
          @apply top-0;
        }
      }
    }
  }

  .code-block {
    @apply m-0 rounded-none border-0 border-b flex flex-col;

    > .wrapper {
      @apply flex-1 flex flex-col;
    }

    + .code-block {
      @apply m-0;
    }

    code {
      @apply pr-8;
    }

    header {
      @apply bg-transparent border-b-0 h-auto pt-6;
    }

    header,
    pre {
      @apply px-8;
    }

    pre {
      @apply py-6 flex-1;
    }
  }
}
</style>
