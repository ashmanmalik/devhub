<template>
  <div
    v-if="url"
    class="api-reference-actions flex sm-max:flex-col sm-max:items-start mt-4"
  >
    <Button
      size="sm"
      class="playground border text-accent"
      title="Explore on the playground"
      icon="arrow-up-right"
      :href="url"
    />
    <Button
      v-if="exampleUrl"
      size="sm"
      class="example border bg-body sm:ml-3 sm-max:mt-3 text-font-primary"
      title="View example"
      :href="exampleUrl"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from '@chargetrip/internal-vue-components'
import { Prop } from 'nuxt-property-decorator'

@Component({ components: { Button } })
export default class extends Vue {
  @Prop() url
  @Prop() exampleUrl
}
</script>
<style lang="scss">
.api-reference-actions {
  .c-button {
    @apply px-3;

    &.playground {
      @apply border-accent;
    }

    &.example {
      @apply border-alt2;
    }

    .icon {
      @apply ml-1;
    }
  }
}
</style>
