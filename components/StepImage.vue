<template>
  <div
    class="step-image w-full md:rounded overflow-hidden"
    :class="{ 'bg-subdued': !darkMode, 'bg-base': darkMode }"
  >
    <c-image class="w-full shadow-down-md" :alt="title" :src="src" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Getter } from 'nuxt-property-decorator'

@Component
export default class CStepImage extends Vue {
  @Prop() src
  @Prop() title
  @Getter darkMode
}
</script>
