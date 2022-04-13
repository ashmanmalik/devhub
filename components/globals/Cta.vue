<template>
  <a class="inline cta" @click="onClick">
    <slot />
  </a>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Utilities } from '@chargetrip/internal-vue-components'
const { openChat } = Utilities

@Component
export default class Cta extends Vue {
  @Prop() action
  actions = {
    openChat,
  }

  onClick() {
    this.actions[this.action]?.()
  }
}
</script>
