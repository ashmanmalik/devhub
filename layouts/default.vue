<template>
  <Theme
    class="text-16 lg:h-screen flex flex-col"
    :dark-mode="darkMode"
    @click.native="closeKhaled"
  >
    <TopNav class="z-50 lg-max:sticky" :is-logged-in="isLoggedIn">
      <div
        class="lg:relative flex-1 h-16 flex items-center"
        :class="{ 'lg-max:hidden': !showSearch }"
      >
        <Search
          ref="search"
          :click-handler="onMenuItemClick"
          icon="search"
          class="flex-1"
          @setShowSearch="showSearch = $event"
        />
      </div>
      <div class="flex h-16 items-center ml-auto lg:hidden">
        <Button
          v-if="!showMenu"
          size="sm"
          class="mr-4"
          color="base"
          :icon="!darkMode ? 'filled-dark-mode' : 'filled-light-mode'"
          @click.native="setDarkMode(!darkMode)"
        />
        <Button
          v-if="!showMenu"
          size="sm"
          class="mr-4"
          color="base"
          icon="search"
          @click.native="showSearch = !showSearch"
        />
        <Button
          size="sm"
          color="base"
          :icon="showMenu ? 'close' : 'menu'"
          @click.native="showMenu = !showMenu"
        />
      </div>
    </TopNav>
    <div
      class="
        view
        flex
        lg:bg-body
        flex-col
        lg:flex-row
        relative
        z-10
        flex-1
        lg:overflow-hidden
        rounded-t-xl
      "
    >
      <SideNav
        v-if="normalizedSideNav"
        class="text-14 z-40 top-0"
        :navs="normalizedSideNav"
        :dark-mode="darkMode"
        :spacing="6"
        :show-menu="showMenu"
        @setShowMenu="showMenu = false"
        @setDarkMode="setDarkMode"
      >
        <div class="dashboard bg-subdued py-4 px-6 lg:hidden">
          <Button
            href="https://account.chargetrip.com"
            class="w-full"
            color="accent"
            title="Sign up"
          />
        </div>
      </SideNav>
      <div
        ref="container"
        class="content flex-1 flex flex-col relative overflow-y-scroll"
      >
        <Nuxt
          class="
            max-w-container
            pt-8
            pb-14
            lg:px-12
            px-6
            lg-max:overflow-x-hidden
            page
          "
        />
        <PrevNextNavigation v-if="sideNav && !isEditing" class="mt-auto" />
      </div>
    </div>
    <MarkdownFormatting v-if="isEditing" />
    <img
      v-if="showKhaled"
      class="
        absolute
        max-w-screen-sm
        z-50
        rounded
        shadow-down-xl
        transform
        -translate-x-1/2 -translate-y-full
        bottom-0
        -mt-6
      "
      :style="{ top: `${khaledPosition.y}px`, left: `${khaledPosition.x}px` }"
      src="khaled.gif"
    />
  </Theme>
</template>
<script lang="ts">
import { Component, Watch, Ref } from 'nuxt-property-decorator'
import { Mixins } from 'vue-property-decorator'
import {
  Banner,
  Button,
  Theme,
  SideNav,
  TopNav,
  Input,
  Select,
} from '@chargetrip/internal-vue-components'

import { Getter, Mutation } from 'vuex-class'
import Cookies from 'js-cookie'
import Table from '~/components/globals/PropertyTable.vue'
import RelatedActions from '~/components/RelatedActions.vue'
import PrevNextNavigation from '~/components/PrevNextNavigation.vue'
import Base from '~/mixins/base'
import MarkdownFormatting from '~/components/MarkdownFormatting.vue'
import { Listen } from '~/utilities/decorators'
import Search from '~/components/Search.vue'
@Component({
  components: {
    Search,
    Theme,
    Select,
    Input,
    MarkdownFormatting,
    PrevNextNavigation,
    RelatedActions,
    SideNav,
    TopNav,
    Table,
    Banner,
    Button,
  },
})
export default class Layout extends Mixins(Base) {
  @Getter darkMode
  @Getter sideNav
  @Getter content
  @Getter isEditing
  isLoggedIn = false
  showMenu = false
  showSearch = false
  showKhaled = false
  khaledPosition = { x: 0, y: 0 }
  @Ref('container') container
  @Ref('search') search
  canEdit = process.env.NODE_ENV !== 'production'
  @Mutation setDarkMode
  @Mutation setIsEditing
  noTransition = false
  timeout = 0
  pageTransitionDuration = 100
  hElms: any[] = []
  hash = this.$route.hash.slice(1)
  stopReplacing = false
  options: { label: string; value: string }[] = []
  value: string = ''

  beforeMount() {
    this.openKhaled = this.openKhaled.bind(this)
    this.closeKhaled = this.closeKhaled.bind(this)

    this.$root.$on('openKhaled', this.openKhaled)
    this.$root.$on('closeKhaled', this.closeKhaled)
  }

  @Watch('content', { immediate: true }) onContentChange() {
    this.options = this.content.headings.map((heading) => ({
      label: heading.title,
      value: heading.hash,
    }))

    this.value = this.options[0]?.value || ''
  }

  mounted() {
    this.onScroll = this.onScroll.bind(this)

    this.isLoggedIn = !!Cookies.get('access_token')
    this.container.addEventListener('scroll', this.onScroll)
    this.onRouteChange()
    if (this.hash.length) {
      this.onMenuItemClick({ hash: this.hash })
    }
    if (process.env.NODE_ENV === 'development') {
      this.$nuxt.$on('content:update', () => {
        setTimeout(this.onRouteChange.bind(this), 100)
      })
    }
  }

  @Watch('showSearch') onShowSearchChange() {
    setTimeout(() => {
      this.search.input.input.focus()
    }, 20)
  }

  get normalizedSideNav() {
    return [
      ...this.sideNav,
      [
        {
          title: 'Help center',
          icon: 'faq-alt',
          href: 'https://help.chargetrip.com/',
          arrow: true,
        },
        {
          title: 'Playground',
          icon: 'playground',
          href: 'https://playground.chargetrip.com/',
          arrow: true,
        },
        {
          title: 'Voyager',
          icon: 'voyager',
          href: 'https://voyager.chargetrip.com/',
          arrow: true,
        },
        {
          title: 'Examples',
          icon: 'code',
          href: 'https://examples.chargetrip.com/',
          arrow: true,
        },
        {
          title: 'Github',
          icon: 'logo-github',
          href: 'https://github.com/chargetrip',
          arrow: true,
        },
      ],
      [
        {
          title: 'Website',
          icon: 'globe',
          href: 'https://chargetrip.com/',
          arrow: true,
        },
        {
          title: 'Documentation',
          icon: 'slashes-1',
          href: 'https://developers.chargetrip.com/',
          arrow: true,
        },
      ],
    ]
  }

  openKhaled(position) {
    this.khaledPosition = position
    this.showKhaled = true
  }

  closeKhaled() {
    this.showKhaled = false
  }

  cancel() {
    this.$root.$emit('cancelEditor')
  }

  attachHandler(item) {
    return {
      ...item,
      callback: this.onMenuItemClick.bind(this),
      children: item?.children?.map(this.attachHandler.bind(this)) || [],
    }
  }

  get offset() {
    return window.innerWidth < 1024 ? 60 : 124
  }

  triggerEdit() {
    this.$root.$emit('toggleEdit')
    this.setIsEditing(true)
    document
      .querySelector('.nuxt-content')
      ?.dispatchEvent(new Event('dblclick'))
  }

  save() {
    this.$root.$emit('submitEditor')
  }

  scrollTo(args) {
    window.scrollTo(args)
    this.container.scrollTo(args)
  }

  onMenuItemClick(item) {
    this.stopReplacing = true

    setTimeout(() => {
      if (!item.hash?.length) {
        this.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      } else {
        let times = 0

        const interval = setInterval(() => {
          times++

          if (times > 100) {
            // eslint-disable-next-line no-console
            console.log(`Didn't find ${item.hash}`)
            this.stopReplacing = false
            clearInterval(interval)
          }

          const el = this.container.querySelector(`#${item.hash}`)

          if (!el) return
          clearInterval(interval)
          const rect = el.getBoundingClientRect()

          this.scrollTo({
            top:
              (this.container.scrollTop || window.scrollY) +
              rect.top -
              this.offset,
            behavior: 'smooth',
          })

          setTimeout(() => {
            this.stopReplacing = false
          }, 1000)
        }, 10)
      }
    }, this.pageTransitionDuration)
  }

  @Watch('darkMode') onDarkModeChange() {
    this.noTransition = true
    clearTimeout(this.timeout)
    this.timeout = window.setTimeout(() => {
      this.noTransition = false
    }, 50)
  }

  @Watch('$route.hash') onHashChange() {
    this.hash = this.$route.hash.slice(1)
    this.value = this.hash || this.options[0]?.value || ''
  }

  findInArray(arr, compareFn): any {
    let find = null

    arr.forEach((item) => {
      if (compareFn(item)) {
        find = item
      }

      if (item.children) {
        find = this.findInArray(item.children, compareFn) || find
      }
    })

    return find
  }

  get aside() {
    return this.findInArray(
      this.content?.body?.children || [],
      (item) =>
        item.tag === 'playground' ||
        item.tag === 'examples' ||
        item.tag === 'right-aside'
    )
  }

  get isLargeAside() {
    return this.aside?.tag === 'playground' || this.aside?.props?.large
  }

  @Listen('dblclick') onDblClick(e) {
    e.stopPropagation()
  }

  @Watch('showMenu') onShowMenuChange() {
    if (this.$root?.$el?.parentElement) {
      this.$root.$el.parentElement.style.overflow = this.showMenu
        ? 'hidden'
        : 'unset'
    }
  }

  @Watch('$route.path') onRouteChange() {
    this.showMenu = false

    if (process.env.NODE_ENV === 'production') {
      window.fathom?.trackPageview?.()
    }
    if (!this.container) return

    if (!this.$route.hash?.length) {
      setTimeout(() => {
        this.scrollTo({ top: 0 })
      }, this.pageTransitionDuration)
    }

    this.stopReplacing = true
    setTimeout(() => {
      this.hElms = [
        ...(this.container.querySelectorAll('.page h2') || []),
      ].filter((el) => el.id)
      this.stopReplacing = false
    }, 1000)
  }

  onScroll() {
    const chatBubble: HTMLElement | null = document.querySelector(
      'div[role="presentation"]'
    )

    if (chatBubble && window.innerWidth < 1280 && window.innerWidth >= 1024) {
      if (
        this.container.scrollTop >=
        this.container.scrollHeight - window.innerHeight
      ) {
        chatBubble.style.display = 'none'
      } else {
        chatBubble.style.display = 'block'
      }
    } else if (chatBubble && window.innerWidth < 1024) {
      if (window.scrollY >= document.body.offsetHeight - window.innerHeight) {
        chatBubble.style.display = 'none'
      } else {
        chatBubble.style.display = 'block'
      }
    }

    if (!this.stopReplacing) {
      const h = this.hElms.reduce((current, h) => {
        const rect = h.getBoundingClientRect()

        if (rect.top <= this.offset) {
          current = h
        }

        return current
      }, null)

      if (h?.id) {
        const hash = h.id
        if (hash !== this.hash) {
          this.hash = hash
          this.$router.replace(
            `${this.$route.fullPath.replace(this.$route.hash, '')}#${hash}`
          )
        }
      } else if (this.hash !== '') {
        this.hash = ''

        this.$router.replace(this.$route.fullPath.replace(this.$route.hash, ''))
      }
    }
  }

  beforeDestroy() {
    this.container.removeEventListener('scroll', this.onScroll)
    this.$root.$off('openKhaled', this.openKhaled)
    this.$root.$off('closeKhaled', this.closeKhaled)
  }
}
</script>
<style lang="scss">
.highlighted-code code,
.page p > code,
.page p > strong > code,
.release-note li > code {
  //@apply rounded-2xs bg-subdued border border-base px-1 leading-none text-14 text-font-primary font-medium;
  //@apply rounded-2xs bg-subdued border border-base px-1 leading-none text-14 text-font-primary font-medium;
  @apply rounded-2xs bg-base px-1 leading-none text-14 text-font-primary font-medium;
}

.page .property .description p > code {
  @apply font-normal;
}

.view {
  @apply rounded-tr-xl rounded-tl-none;
}

.nuxt-content {
  .c-note {
    & + h1 {
      @apply mt-6;
    }
  }

  h1 {
    @apply mb-3;

    & + p,
    & + p + p {
      @apply text-font-alt3;
    }
  }

  h2 {
    @apply mt-14 mb-2;
  }

  h3 {
    @apply mt-12;
  }

  > p {
    & + img,
    & + .c-image {
      @apply mt-6;
    }

    & + .code-block {
      @apply mt-4;
    }

    & + .property-table {
      @apply mt-6 mb-10;
    }

    & + p {
      @apply mt-8;
    }

    & + ul {
      @apply mt-4;
    }
  }

  .code-block {
    & + p,
    & + .code-block {
      @apply mt-4;
    }
  }

  // Exceptions
  .right-aside {
    h1,
    h2,
    h3 {
      @apply mt-0;
    }
  }

  .step {
    h2 {
      @apply mt-6;
    }
  }

  .release-note {
    h2 {
      @apply mt-0;
    }
  }

  > ol {
    li {
      counter-increment: listing;

      &::before {
        content: counter(listing) '.';
        @apply font-semibold text-accent;
      }
    }
  }

  ul + p {
    @apply mt-4;
  }

  > ul:not(.errors),
  .release-note ul {
    li {
      &::before {
        content: '- ';
      }
    }
  }
}

.theme {
  .top-nav {
    .container {
      @apply ml-12;

      .ctas {
        .c-menu-item {
          &:first-child {
            @apply hidden;
          }
        }
      }
    }
    .logo-wrapper {
      @screen lg {
        width: calc(240px - 24px);
      }
    }
  }

  &.no-transition {
    .box,
    .animate,
    label,
    .transition,
    .transition-all {
      transition-duration: 0s !important;
    }
  }

  &.has-aside {
    .nuxt-content {
      > * {
        &:nth-last-child(2) {
          @apply mb-0 pb-0;
        }
      }
    }
    @screen xl {
      &.is-large-aside {
        .view > .content {
          padding-right: 512px;
        }
        .search {
          max-width: min(640px, calc(100vw - 848px));
        }
      }
      .search {
        max-width: min(640px, calc(100vw - 816px));
      }
      .view > .content {
        padding-right: 480px;
      }
    }
  }

  .table {
    @apply text-14;

    .col {
      &.first-col {
        @apply pl-0;
      }

      &.last-col {
        @apply pr-0;
      }
    }
  }

  @screen lg {
    .view > .content,
    .playground,
    aside {
      max-height: calc(100vh - 64px);
    }

    .view {
      height: calc(100vh - 64px);
    }

    aside {
      width: 383px;
    }

    .c-side-nav {
      width: 240px;

      nav {
        &:last-child {
          @apply hidden;
        }
      }
    }
  }

  .c-note {
    padding-bottom: 1rem !important;
    @apply mt-8;
  }

  .c-side-nav {
    .c-menu-item-group {
      &.depth-0 {
        > .children {
          & > * {
            @apply mb-6;

            &:last-child {
              @apply mb-0;
            }
          }
        }
      }
    }
  }
  .max-w-container {
    max-width: 720px;
  }
  .nuxt-content-editor {
    @apply text-font-primary bg-body;
  }

  .navigate-select {
    max-width: 204px;
    @apply w-full;
  }
}
</style>
