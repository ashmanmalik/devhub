<template>
  <div class="step mb-24 relative z-20">
    <div class="side relative">
      <div class="image-wrapper overflow-hidden md:rounded relative">
        <div class="absolute w-full top-0 left-0">
          <StepImage v-if="img" :src="img" :title="title" />
          <div
            v-if="images"
            class="rails transition whitespace-nowrap duration-300 ease-in-out"
            :style="{ transform: `translateX(-${sliderIndex * 100}%)` }"
          >
            <StepImage
              v-for="(image, i) in images"
              :key="i"
              class="inline-block md:mr-8 transform -translate-x-1/2"
              :src="image"
              :title="title"
            />
          </div>
        </div>
        <template v-if="images">
          <ul
            class="flex md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 justify-center"
          >
            <li
              v-for="(_, key) in images"
              :key="key"
              class="w-2 h-2 rounded-full mr-2 last:mr-0"
              :class="{
                'bg-font-primary': sliderIndex === key,
                'bg-font-alt3': sliderIndex !== key,
              }"
            />
          </ul>
          <nav
            class="md:hidden absolute transform top-1/2 translate-y-1/2 w-full flex text-font-primary px-2"
          >
            <div
              v-if="sliderIndex"
              class="cursor-pointer shadow-down-md flex items-center justify-center w-8 h-8 rounded-full bg-body icon-chevron-left"
              @click="sliderIndex--"
            />
            <div
              v-if="sliderIndex < images.length - 1"
              class="cursor-pointer shadow-down-md flex items-center justify-center w-8 h-8 rounded-full bg-body icon-chevron-right ml-auto"
              @click="sliderIndex++"
            />
          </nav>
        </template>
      </div>
    </div>
    <div class="number-wrapper relative flex">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Getter } from 'nuxt-property-decorator'
import StepImage from '~/components/StepImage.vue'
@Component({
  components: { StepImage },
})
export default class Steps extends Vue {
  @Getter darkMode
  @Prop() img
  @Prop() images
  @Prop() title
  sliderIndex = 0
}
</script>
<style lang="scss">
.step {
  .image-wrapper {
    &::after {
      content: '';
      padding-bottom: 50%;
      @apply block;
    }
  }
  @screen md {
    .rails {
      transform: unset !important;
    }
  }
  @screen md-max {
    .image-wrapper {
      width: calc(100% + 48px);
      @apply -ml-6;

      &::after {
        padding-bottom: 50%;
      }
    }
    .step-image {
      @apply overflow-hidden translate-x-0;

      img {
        @apply origin-top-left transform scale-150;
      }
    }
    &:nth-child(3) {
      .step-image {
        @apply translate-x-0;

        &:first-child {
          @apply origin-top-right;
        }
      }
    }
  }
  img {
    @apply m-0;
  }

  .c-button {
    @apply mt-6 inline-flex;

    &:nth-of-type(1) {
      @apply mr-4;
    }
  }
}
</style>
