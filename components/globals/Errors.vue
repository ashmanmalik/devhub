<template>
  <div v-if="errors.length" class="errors mt-8">
    <p>
      If unsuccessful, the header status code is an error code and the response
      body contains an error response object. The error response object can be
      any of the ones below.
    </p>
    <h3 class="mb-3">Errors &amp; warnings</h3>
    <ul v-if="errors.length">
      <Error v-for="(error, key) in errors" :key="key" v-bind="error" />
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Error from '~/components/globals/Error.vue'
@Component({
  components: { Error },
})
export default class Errors extends Vue {
  @Prop() name
  errors = []

  async fetch() {
    try {
      this.errors = (await import(`~/static/errors/${this.name}.json`)).default
    } catch (e) {
      this.errors = []
    }
  }
}
</script>
