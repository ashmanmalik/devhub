<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import availableVars from '~/utilities/availableVars'

@Component
export default class extends Vue {
  @Prop() vars

  async fetch() {
    await Promise.all(
      this.vars.map((varName) => availableVars?.[varName]?.(this.$store))
    )
  }

  replaceVars(nodes, varName) {
    return nodes.map((node) => {
      if (node.children) {
        node.children = this.replaceVars(node.children, varName)
      }

      if (node.text) {
        node.text = node.text.replaceAll(
          `$${varName}`,
          this.$store.getters[varName]
        )
      }

      return node
    })
  }

  render(h) {
    this.vars.forEach((varName) => {
      this.$slots.default = this.replaceVars(this.$slots.default, varName)
    })

    return h('div', this.$slots.default)
  }
}
</script>
