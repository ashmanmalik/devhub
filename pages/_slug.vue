<template>
  <nuxt-content v-if="page" :class="page.slug" :document="page" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Mutation } from 'vuex-class'
import { getFileByPath, getHeadings } from '~/utilities/project.functions'

@Component
export default class Slug extends Vue {
  @Mutation setIsEditing
  page: any = null

  head() {
    if (!this.page) return

    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: this.page.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title,
        },
      ],
    }
  }

  async asyncData({ $content, route: { path }, store, error }) {
    const actualPath =
      path === '/' ? '/home' : getFileByPath(path, store.getters.dirs)

    try {
      const page = await $content(actualPath, {
        deep: true,
      }).fetch()

      const normalizedPage = {
        ...page,
        headings: getHeadings(page.body.children, page).map((child) => ({
          to: path,
          hash: child.props.id,
          inset: child.inset,
          title: child.title || child.children[1].value,
        })),
      }

      store.commit('setContent', normalizedPage)

      return {
        page: normalizedPage,
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      error({ statusCode: 500, message: 'Unexpected error.' })
    }
  }
}
</script>
<style lang="scss">
.home {
  .examples {
    @screen xl2-max {
      @apply relative border-0 w-full block h-auto p-0 top-0 mt-8 z-0;

      .container {
        @apply grid grid-cols-2 gap-8;
      }

      .example {
        @apply flex-col items-start;
      }

      .c-image {
        @apply m-0 mb-4;
      }

      .description,
      .c-image {
        @apply w-full;
      }
    }
    @screen sm-max {
      .container {
        @apply grid-cols-1;
      }
    }
  }
}
</style>
