<template>
  <div
    class="
      property-toggle-children
      w-6
      flex
      absolute
      z-10
      h-full
      left-0
      top-0
      transform
      -ml-6
      lg:-ml-8
    "
  >
    <span
      v-if="children.length"
      class="icon bg-subdued z-20 text-accent center"
      :class="{
        'icon-circle-plus': !value,
        'icon-circle-minus': value,
      }"
    />

    <div
      v-if="depth"
      class="
        line-h
        z-6
        h-px
        w-full
        transform
        -translate-x-1/2
        bg-alt2
        absolute
        top-1/2
        -translate-y-1/2
      "
    >
      <div
        class="
          dot
          w-1
          h-1
          rounded-full
          right-0
          top-1/2
          transform
          -translate-y-1/2
          absolute
          bg-alt2
          translate-x-full
        "
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class PropertyToggleChildren extends Vue {
  @Prop() depth
  @Prop() children
  @Prop() value
  @Prop() last
}
</script>
