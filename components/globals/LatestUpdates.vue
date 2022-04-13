<template>
  <div v-if="items.length" class="latest-updates p-8 border-b border-base">
    <div class="flex items-center">
      <h2>Latest updates</h2>
      <router-link
        class="font-semibold text-accent ml-auto"
        to="/release-notes"
      >
        View all
      </router-link>
    </div>
    <nav class="mt-8">
      <router-link
        v-for="(item, key) in items"
        :key="key"
        :to="`/${item.to}`"
        class="mb-6 last:mb-0 block"
      >
        <div>
          <strong>
            {{ item.props.title }}
          </strong>
        </div>
        <span class="text-font-alt3">
          {{ item.props.date }}
        </span>
      </router-link>
    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { normalizeDate, slugify } from '~/utilities/project.functions'

@Component
export default class LatestUpdates extends Vue {
  items = []

  async fetch() {
    const releasePage = (
      await this.$content('', { deep: true })
        .where({ releasePage: true })
        .fetch()
    )?.[0]

    if (releasePage) {
      this.items = releasePage.body.children
        .filter((child) => child.tag === 'release-note')
        .slice(0, 2)
        .map((item) => ({
          ...item,
          props: {
            ...item.props,
            date: normalizeDate(item.props.date),
          },
          to: `${releasePage.slug}#release-${slugify(item.props.title)}`,
        }))
    }
  }
}
</script>
