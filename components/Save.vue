<template>
  <Modal class="save">
    <div class="max-w-screen-sm">
      <h2>Save edits</h2>
      <p class="text-font-alt2 text-14 mt-2 mb-6">
        Enter your name and describe your edits in a single line. This way
        everyone has a clear overview of what has happened and why changes have
        been applied.
      </p>
      <Input v-model="name" label="Name" class="mb-2" />
      <Input v-model="description" label="Description" />
      <div class="flex justify-between mt-8">
        <Button type="secondary" @click.native="$emit('cancel')">
          Cancel
        </Button>
        <Button type="primary" @click.native="save"> Save </Button>
      </div>
    </div>
  </Modal>
</template>
<script lang="ts">
import {
  Component,
  Getter,
  Mutation,
  Vue,
  Watch,
} from 'nuxt-property-decorator'
import { Modal, Input, Button } from '@chargetrip/internal-vue-components'

@Component({ components: { Modal, Input, Button } })
export default class Save extends Vue {
  name = ''
  description = ''
  @Getter user
  @Mutation setUser

  @Watch('user', { immediate: true }) onUserChange() {
    this.name = this.user.name
    this.description = this.user.description
  }

  save() {
    if (this.name.length && this.description.length) {
      const user = { name: this.name, description: this.description }

      this.setUser({ ...user, description: '' })
      this.$emit('submit', user)
    }
  }
}
</script>
