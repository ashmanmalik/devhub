<template>
  <a class="example flex items-center text-14" :href="href" target="_blank">
    <c-image class="w-2/5 mr-4" :src="img" :alt="title" />
    <div class="description w-3/5">
      <strong>
        <span class="text-font-alt3">
          {{ category }}
        </span>
        • {{ title }}
      </strong>
      <p>
        {{ description }}
      </p>
    </div>
  </a>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Example extends Vue {
  @Prop() title
  @Prop() description
  @Prop() img
  @Prop() category
  @Prop() tagLine
  @Prop() href
}
</script>
