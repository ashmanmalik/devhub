<template>
  <li
    :id="propertyId"
    class="property list-none text-14 relative"
    :class="{
      'has-args': args && args.length,
      'is-child': depth,
      'has-children': children.length,
      'show-children': showChildren,
      'is-deprecated': isDeprecated,
    }"
  >
    <div
      v-if="showChildren && children.length"
      class="main-line w-6 lg:w-10 absolute left-0 top-0 h-full z-10"
    >
      <div
        class="
          line-v
          w-px
          h-full
          absolute
          transform
          left-1/2
          -translate-x-1/2
          bg-alt2
        "
      />
    </div>
    <div
      class="content p-4 relative z-10"
      :class="{ 'cursor-pointer': children.length }"
      @click="showChildren = !showChildren"
    >
      <div
        class="absolute w-6 bg-subdued rounded-lg h-1/2 top-0 left-0 h-1/2"
      />
      <div
        v-if="last"
        class="
          absolute
          w-6
          h-1/2
          bottom-0
          left-0
          bg-subdued
          transform
          -translate-x-full
        "
      />
      <div class="bg absolute inset-0" />
      <div class="container">
        <div class="title-with-description relative">
          <PropertyToggleChildren v-bind="$props" :value="showChildren" />
          <PropertyTitle v-bind="$props" />
          <div
            v-if="description"
            class="description text-font-alt3"
            v-html="$options.filters.markdown(description)"
          />
        </div>
        <PropertyArguments
          v-if="args && args.length"
          class="border-t border-alt2"
          :args="args"
        />
      </div>
    </div>
    <ul v-if="showChildren && children.length" class="children pl-6 lg:pl-6">
      <property
        v-for="(child, i) in children"
        :key="i"
        :last="i === children.length - 1"
        :depth="depth + 1"
        v-bind="child"
      />
    </ul>
  </li>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import { Tag } from '@chargetrip/internal-vue-components'
import { OfTypeKind } from '~/utilities/constants'
import PropertyTitle from '~/components/PropertyTitle.vue'
import PropertyToggleChildren from '~/components/PropertyToggleChildren.vue'

@Component({
  name: 'property',
  components: { PropertyToggleChildren, PropertyTitle, Tag },
})
export default class Property extends Vue {
  @Prop() propertyId
  @Prop() isDeprecated
  @Prop() name
  @Prop() last
  @Prop() showRequired
  @Prop() required
  @Prop() optional
  @Prop() description
  @Prop({ default: 0 }) depth
  @Prop() type
  @Prop() typeStr
  @Prop() typeName
  @Prop() showOfTypeKind
  @Prop() args
  @Prop({ default: () => [] }) children
  showChildren = false
  ofTypeKind = OfTypeKind

  mounted() {
    this.onHashChange()
  }

  @Watch('$route.hash')
  onHashChange() {
    this.showChildren = this.showChildren || this.getShowChildren()
  }

  getShowChildren() {
    let currentHash = ''
    let showChildren = false

    this.$route.hash
      .replace('#', '')
      .split('-')
      .forEach((part) => {
        currentHash += part

        if (currentHash === this.propertyId) {
          showChildren = true
        }

        currentHash += '-'
      })

    return showChildren
  }
}
</script>
<style lang="scss">
.property {
  &.has-args {
    .container {
      @apply border-alt2 border rounded-lg;
    }

    .title-with-description,
    .property-arguments .toggle {
      @apply py-2 px-4;
    }
  }
  &.has-children {
    > .content {
      @apply pl-10;

      @screen lg-max {
        @apply pl-6;
      }
    }
  }
  &.is-deprecated {
    > .content .property-title > *:not(.tag-wrapper),
    > .children .property-title > *:not(.tag-wrapper),
    .description,
    > .children .content > .bg {
      @apply opacity-50;
    }
  }
  &.is-child {
    > .content {
      @apply pl-10;

      @screen lg-max {
        @apply pl-6;
      }
    }

    .type {
      @apply text-font-primary;
    }
    &:last-child {
      > .children {
        @apply relative;

        &::before {
          content: '';
          @apply w-10 transform z-10 -ml-6 h-full left-0 top-0 absolute bg-subdued;
        }
      }
    }
  }

  > .content > .bg {
    z-index: -1;
  }
  &:not(.is-child) {
    @apply bg-subdued rounded-md mb-2 overflow-hidden;

    &:last-child {
      @apply mb-0;
    }
  }
}
</style>
