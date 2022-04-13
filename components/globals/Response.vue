<template>
  <div class="response">
    <h2>Response</h2>
    <p>
      If successful, the HTTP status code in the response header is
      <code>200</code> and the response body contains the attributes you
      requested.
    </p>
    <Errors :name="error" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Errors from '@/components/globals/Errors.vue'

@Component({ components: { Errors } })
export default class Response extends Vue {
  @Prop() error
}
</script>
