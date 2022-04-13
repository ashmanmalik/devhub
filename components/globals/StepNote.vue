<template>
  <div
    class="
      step-note
      flex
      pt-6
      mt-6
      border-t border-base
      flex-col
      md:flex-row
      items-start
      text-14
    "
  >
    <div class="md:mr-6 md-max:mb-2">
      <div @click.stop="onClick">
        <Tag :color="color" type="secondary">{{ title }}</Tag>
      </div>
    </div>
    <slot />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Tag } from '@chargetrip/internal-vue-components'

@Component({ components: { Tag } })
export default class Steps extends Vue {
  @Prop() title
  @Prop() color
  @Prop() khaled

  onClick(e) {
    if (this.khaled) {
      this.$root.$emit('openKhaled', { x: e.clientX, y: e.clientY })
    }
  }
}
</script>
