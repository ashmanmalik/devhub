<template>
  <div class="related-actions text-14">
    <h2 class="mb-8">Related actions</h2>
    <nav>
      <MenuItem
        v-for="(item, key) in items"
        :key="key"
        v-bind="item"
        @click.native="item.callback ? item.callback(item) : null"
      />
    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { MenuItem, Utilities } from '@chargetrip/internal-vue-components'

const { openChat } = Utilities

@Component({ components: { MenuItem } })
export default class RelatedActions extends Vue {
  @Getter content

  get items() {
    return [
      {
        title: 'Suggest an edit',
        icon: 'edit',
        href: this.githubUrl,
      },
      {
        title: 'View API reference',
        icon: 'terminal',
        to: '/API-Reference/API/introduction',
      },
      {
        title: 'Contact sales',
        icon: 'contact',
        callback: openChat,
      },
    ]
  }

  get githubUrl() {
    return `${this.$config.EDIT_GITHUB_URL}${
      this.content?.dir.length > 1 ? this.content?.dir : ''
    }/${this.content?.slug}${this.content?.extension}`
  }

  onClick() {}
}
</script>
<style lang="scss">
.related-actions {
  nav {
    width: calc(100% + 48px);
    @apply -ml-6;
  }
  .c-menu-item.has-icon {
    @apply h-10;
  }
}
</style>
