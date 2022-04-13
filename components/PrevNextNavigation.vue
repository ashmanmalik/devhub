<template>
  <div
    v-if="content.quickNav === true"
    class="prev-next-navigation max-w-lg flex px-6 lg:px-12 pb-10 font-semibold"
  >
    <router-link
      v-if="prev && prev.to"
      class="w-1/2 flex items-center"
      :to="prev.to"
    >
      <span
        class="w-10 h-10 flex items-center justify-center border border-alt2 rounded-full icon-chevron-left"
      />
      <div class="mx-4 truncate">
        <div class="text-14 text-font-alt3">Previous</div>
        {{ prev.title }}
      </div>
    </router-link>
    <router-link
      v-if="next && next.to"
      class="w-1/2 flex ml-auto justify-end items-center text-right"
      :to="next.to"
    >
      <div class="mx-4 truncate">
        <div class="text-14 text-font-alt3">Next</div>
        {{ next.title }}
      </div>
      <span
        class="w-10 h-10 flex items-center justify-center border border-alt2 rounded-full icon-chevron-right"
      />
    </router-link>
  </div>
</template>
<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'

@Component
export default class CodeBlock extends Vue {
  @Getter sideNav
  @Getter content

  get index() {
    return this.parent.children.indexOf(this.current)
  }

  get parent(): any {
    return this.findParent(this.sideNav.flat(), this.current.to)
  }

  get parentIndex() {
    return this.grandParent.children.indexOf(this.parent)
  }

  get grandParent(): any {
    if (!this.current?.to) return null

    return this.findParent(
      this.sideNav.flat(),
      this.current.to.split('/').slice(0, -1).join('/')
    )
  }

  findParent(arr, url) {
    let parent = null

    arr.forEach((child) => {
      if (!child?.children) return

      const find = child.children.find(
        (_child) =>
          !_child.hash?.length && (_child.to || _child.fullPath) === url
      )

      if (find) {
        return (parent = child)
      }

      if (child.children) {
        parent = this.findParent(child.children, url) || parent
      }
    })

    return parent
  }

  findRecursive(arr, path) {
    let item = null

    arr.forEach((child) => {
      if (!child?.hash?.length && child.to === path) {
        item = child
      }

      if (child.children) {
        item = this.findRecursive(child.children, path) || item
      }
    })

    return item
  }

  get current(): any {
    return this.findRecursive(this.sideNav.flat(), this.$route.path) || {}
  }

  get prev() {
    return (
      this.parent?.children?.[this.index - 1] ||
      this.grandParent?.children?.[this.parentIndex - 1]?.children?.[
        this.grandParent?.children?.[this.parentIndex - 1]?.children?.length - 1
      ]
    )
  }

  get next() {
    return (
      this.parent?.children?.[this.index + 1] ||
      this.grandParent?.children?.[this.parentIndex + 1]?.children?.[0]
    )
  }
}
</script>
