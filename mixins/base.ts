import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Base extends Vue {
  [key: string]: any
  public subscriptions: any = []
  listeners: any

  mounted() {
    if (this.listeners) {
      this.subscriptions.push(
        ...this.listeners.map((listener: string) => this[listener]('decorator'))
      )
    }
  }

  beforeDestroy() {
    this.subscriptions.forEach((sub: any) => sub())
  }
}
