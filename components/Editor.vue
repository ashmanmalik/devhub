<template>
  <div class="editor relative">
    <textarea
      ref="contentEl"
      v-model="file"
      class="whitespace-pre-line resize-none block bg-body font-primary outline-none w-full h-full"
      @mousedown="showHelper = false"
    />
    <div
      v-if="showHelper"
      class="helper transform -translate-x-1/2 -translate-y-full z-50 absolute bg-black flex shadow-down-m p-1 border border-alt2 rounded-md text-white"
      :style="{ left: `${helperPosition.x}px`, top: `${helperPosition.y}px` }"
    >
      <div
        v-for="(item, key) in items"
        :key="key"
        class="icon relative hover:bg-alt2 cursor-pointer w-6 h-6 rounded-sm flex items-center justify-center"
        :class="[`icon-${item.icon}`, { divider: item.divider }]"
        @click="item.fn"
        @mouseup.stop
      />
    </div>
    <Save
      v-if="showSaveModal"
      @cancel="showSaveModal = false"
      @submit="submit"
    />
  </div>
</template>

<script>
import {
  Component,
  Prop,
  Watch,
  Ref,
  Mutation,
  Emit,
} from 'nuxt-property-decorator'
import { Mixins } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import Save from '@/components/Save'
import Base from '~/mixins/base'
import { Listen } from '~/utilities/decorators'
@Component({
  components: { Save },
})
export default class Editor extends Mixins(Base) {
  @Getter content
  @Prop() value
  @Prop() isEditing
  @Ref('contentEl') contentEl
  @Mutation setIsEditing
  showSaveModal = false
  file = ''
  items = [
    { icon: 'bold', fn: this.makeBold.bind(this) },
    { icon: 'italic', divider: true, fn: this.makeItalic.bind(this) },
    { icon: 'h1', fn: this.makeH1.bind(this) },
    { icon: 'h2', fn: this.makeH2.bind(this) },
    { icon: 'h3', fn: this.makeH3.bind(this) },
  ]

  showHelper = false
  selection = null
  helperPosition = null

  beforeMount() {
    this.submit = this.submit.bind(this)
    this.cancel = this.cancel.bind(this)
    this.$root.$on('submitEditor', this.onSubmit)
    this.$root.$on('cancelEditor', this.cancel)

    this.toggleEdit = this.toggleEdit.bind(this)
    this.$root.$on('toggleEdit', this.toggleEdit)
  }

  @Watch('value', { immediate: true }) onValueChange() {
    this.file = this.value
  }

  insert(before, after = '') {
    if (!this.selection) return

    return (
      this.file.slice(0, this.selection.start) +
      before +
      this.file.slice(this.selection.start, this.selection.end) +
      after +
      this.file.slice(this.selection.end)
    )
  }

  cancel() {
    this.onValueChange()
    this.$emit('endEdit')
    this.setIsEditing(false)
  }

  makeBold() {
    this.file = this.insert('**', '**')
  }

  makeItalic() {
    this.file = this.insert('_', '_')
  }

  makeH1() {
    this.file = this.insert('# ')
  }

  makeH2() {
    this.file = this.insert('## ')
  }

  makeH3() {
    this.file = this.insert('### ')
  }

  @Emit('endEdit') toggleEdit() {
    return true
  }

  @Listen('mouseup') onMouseUp(e) {
    const selection = window.getSelection()

    if (selection.anchorOffset === selection.focusOffset) return

    const rect = this.$el.getBoundingClientRect()
    this.showHelper = true
    this.helperPosition = {
      x: Math.max(72, e.clientX - rect.left),
      y: Math.max(0, e.clientY - rect.top - 12),
    }

    this.selection = {
      start: selection.anchorOffset,
      end: selection.focusOffset,
    }
  }

  onSubmit() {
    this.showSaveModal = true
    this.showHelper = false
  }

  async submit({ name, description }) {
    this.showSaveModal = false
    this.$emit('input', this.file)
    this.$emit('endEdit')
    this.setIsEditing(false)

    const response = await this.$axios
      .post(this.$config.EDIT_API_URL, {
        name,
        description,
      })
      .catch((error) => {
        alert(error?.response?.data?.message || error || 'Unknown error.')
      })

    this.$emit('cancel')

    if (response) {
      alert(`Commit(s) pushed to branch fix/dev-portal/content-edit`)
    }
  }

  beforeDestroy() {
    this.$root.$off('submitEditor', this.submit)
    this.$root.$off('cancelEditor', this.cancel)
    this.$root.$off('toggleEdit', this.toggleEdit)
  }
}
</script>
<style lang="scss">
.editor {
  padding: 0 !important;

  textarea {
    height: calc(100vh - 96px);
  }

  .helper {
    .divider {
      @apply mr-2;

      & + * {
        @apply ml-2;
      }
      &::after {
        content: '';
        @apply w-px h-full bg-alt2 absolute right-0 -mr-2;
      }
    }
  }
}
</style>
