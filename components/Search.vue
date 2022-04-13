<template>
  <div class="search lg:relative">
    <div
      v-show="showSuggestions"
      class="bg fixed inset-0 bg-black opacity-50"
    />
    <CInput
      ref="input"
      v-model="search"
      name="search"
      class="w-full"
      autocomplete="off"
      icon="search"
      :hotkey="{
        key: '/',
        icon: 'slash',
        fn: (el) => el.focus(),
      }"
      placeholder="Search documentation..."
      @blur="showSuggestions = false"
      @focus="showSuggestions = true"
    />
    <nav
      v-show="showSuggestions && suggestions.length"
      class="
        text-font-alt3 text-14
        rounded
        absolute
        w-full
        top-full
        -mt-2
        bg-subdued
      "
    >
      <main ref="container" class="flex flex-col suggestions overflow-y-scroll">
        <ul class="p-3 lg:p-2">
          <li
            v-for="(suggestion, i) in normalizedSuggestions"
            :key="i"
            ref="suggestionEl"
            class="block py-2 px-3 cursor-pointer rounded-sm"
            :class="{ 'bg-body': index === i }"
            @mouseenter="index = i"
            @mousedown="onClick(suggestion)"
          >
            <p class="whitespace-no-wrap">
              <strong>
                <span v-if="suggestion.propertyPath" class="lg-max:hidden">
                  {{ suggestion.propertyPath }} /
                </span>
                <span
                  class="text-font-primary"
                  v-html="
                    suggestion._highlightResult
                      ? suggestion._highlightResult.title.value
                      : suggestion.title
                  "
                />
              </strong>
            </p>
            <p
              v-html="
                suggestion._snippetResult
                  ? suggestion._snippetResult.description.value
                  : suggestion.description
              "
            />
          </li>
        </ul>
      </main>
      <footer
        class="
          border-t
          lg-max:hidden
          border-base
          py-1
          px-3
          flex
          whitespace-no-wrap
        "
      >
        <div
          v-for="(hotKey, i) in hotKeys"
          :key="i"
          class="hotkey flex mr-6 items-center"
        >
          <div class="flex">
            <span
              v-for="(key, c) in hotKey.keys"
              :key="`${i}-${c}`"
              class="
                w-5
                h-5
                first:border-l
                border-r border-t border-b border-alt2
                first:rounded-l-xs
                last:rounded-r-xs
                text-alt2
                flex
                items-center
                justify-center
              "
              :class="`icon-${key}`"
            />
          </div>
          <p class="ml-2 text-12">
            <strong>
              {{ hotKey.title }}
            </strong>
          </p>
        </div>
        <div class="pl-20 ml-auto flex items-center">
          <img
            class="w-24 pl-8 h-auto object-contain flex-shrink-0 max-w-xs"
            src="/algolia.png"
            alt="algolia"
          />
        </div>
      </footer>
    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Watch, Prop, Ref } from 'nuxt-property-decorator'
import algoliasearch from 'algoliasearch/lite'
import { Mixins } from 'vue-property-decorator'
import { toSentenceCase } from 'js-convert-case/lib'
import { Input as CInput } from '@chargetrip/internal-vue-components'
import Base from '~/mixins/base'
import { Listen } from '~/utilities/decorators'

@Component({ components: { CInput } })
export default class Search extends Mixins(Base) {
  @Ref('suggestionEl') suggestionEls
  @Ref('container') container
  @Ref('input') input
  @Prop() clickHandler
  showSuggestions = false
  suggestions: any[] = []
  index = 0
  prevent = false
  search = ''
  hotKeys = [
    {
      keys: ['arrow-down', 'arrow-up'],
      title: 'To navigate',
    },
    {
      keys: ['enter'],
      title: 'To select',
    },
  ]

  length = 50

  client = algoliasearch(
    this.$config.ALGOLIA_APP_ID as string,
    this.$config.ALGOLIA_API_PUBLIC_KEY as string
  )

  keys = {
    ArrowDown: this.onArrowDown.bind(this),
    ArrowUp: this.onArrowUp.bind(this),
    Enter: this.onEnter.bind(this),
  }

  database = this.client.initIndex('prod_DeveloperPortalContent')

  onArrowDown() {
    if (this.index < this.normalizedSuggestions.length - 1) {
      this.index++
    } else {
      this.index = 0
    }
  }

  onEnter() {
    this.onClick({ url: this.normalizedSuggestions[this.index]?.url })
  }

  onArrowUp() {
    if (this.index > 0) {
      this.index--
    } else {
      this.index = this.normalizedSuggestions.length - 1
    }
  }

  scrollToView() {
    this.prevent = true

    const el = this.suggestionEls?.[this.index]
    const offsetTop = el?.offsetTop

    if (offsetTop - el?.offsetHeight < this.container.scrollTop) {
      this.container.scrollTo(0, offsetTop)
    } else if (
      offsetTop + el?.offsetHeight >
      this.container.scrollTop + this.container.offsetHeight
    ) {
      this.container.scrollTo(
        0,
        offsetTop - this.container.offsetHeight + el.offsetHeight + 4
      )
    }

    setTimeout(() => {
      this.prevent = false
    }, 500)
  }

  @Watch('active') onActiveChange() {
    setTimeout(() => {
      this.input.focus()
    }, 50)
  }

  @Listen('keyup') onKeyUp(e) {
    if (e.key === 'Escape') this.input.input.blur()

    if (!this.suggestions.length) return

    if (this.keys[e.key]) {
      this.keys[e.key]()
      this.scrollToView()
    }
  }

  @Watch('search')
  async onSearchChange() {
    if (!this.search.length) {
      this.suggestions = []

      return
    }

    const { hits } = await this.database.search(this.search, {
      attributesToHighlight: ['description', 'title'],
      attributesToSnippet: ['description:10'],
      snippetEllipsisText: '...',
      length: this.length,
      offset: 0,
    })

    this.index = 0
    this.suggestions = hits
  }

  getParentByItem({ url, type }) {
    if (type === 'page') return { path: '' }

    const [path, hash] = url.split('#')
    const splitPath = path.split('/').slice(1)

    if (type === 'error') {
      return {
        path: '',
        propertyPath: toSentenceCase(splitPath[splitPath.length - 1]),
      }
    }

    const propertyParent = hash.split('-').slice(1)
    splitPath.splice(1, 1)

    const withoutTitle = propertyParent.slice(0, -1)

    const propertyPath =
      withoutTitle.length > 4
        ? [...withoutTitle.slice(0, 2), '...', ...withoutTitle.slice(-1)]
        : withoutTitle

    return {
      path: splitPath.map((part) => toSentenceCase(part)).join(' / '),
      propertyPath: propertyPath.join(' / '),
    }
  }

  get normalizedSuggestions() {
    return this.suggestions.map((item) => ({
      ...item,
      ...this.getParentByItem(item),
    }))
  }

  @Watch('showSuggestions') onShowSuggestionsChange() {
    if (!this.showSuggestions) {
      this.$emit('setShowSearch', false)
    }
  }

  async onClick({ url }) {
    await this.$router.push(url)
    this.input.input.blur()
    this.$emit('close')
    this.clickHandler({ hash: url.split('#')?.[1] })
  }
}
</script>
<style lang="scss">
.search {
  max-width: 640px;

  @screen xl {
    max-width: min(640px, calc(100vw - 814px));
  }

  @screen lg-max {
    @apply w-full max-w-full h-full absolute top-0 left-0 bg-subdued px-6;

    .hotkey {
      @apply hidden;
    }

    nav {
      @apply -ml-6 rounded-none border-l-0 border-r-0 mt-0;
    }
  }

  .bg {
    z-index: -1;
    height: calc(100vh - 64px);

    @apply mt-16;
  }

  .suggestions {
    max-height: 33vh;
  }

  .c-input,
  .c-input.has-focus,
  .c-input.has-hover {
    @apply h-16 flex items-center;

    .box {
      @apply bg-transparent border-0 w-full;

      .icon {
        @apply pl-0;
      }

      .hotkey {
        @apply bg-transparent mr-0;
      }
    }
  }
  input {
    &::placeholder {
      @apply text-font-alt3;
    }
  }

  em {
    @apply not-italic text-warning;
  }
}
</style>
