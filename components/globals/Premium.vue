<template>
  <Tag class="premium" type="secondary" color="premium">Premium</Tag>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Tag } from '@chargetrip/internal-vue-components'

@Component({ components: { Tag } })
export default class Premium extends Vue {}
</script>
<style lang="scss">
.premium {
  @apply inline-flex align-middle ml-2;
}
</style>
