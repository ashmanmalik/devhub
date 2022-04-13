<template>
  <CTable class="status-table">
    <Row>
      <Cell v-for="(col, c) in columns" :key="c" tag="th">
        {{ col }}
      </Cell>
    </Row>
    <Row v-for="(row, key) in rows" :key="key">
      <Cell
        v-for="(_, c) in columns"
        :key="`${key}-${c}`"
        :font-weight="!c ? 'semibold' : null"
      >
        <div v-html="$options.filters.markdown(row[c])" />
      </Cell>
    </Row>
  </CTable>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Row, Cell } from '@chargetrip/internal-vue-components'
import CTable from '@/components/Table.vue'

@Component({
  components: { CTable, Row, Cell },
})
export default class PropertyTable extends Vue {
  @Prop() statuses
  @Prop() descriptions

  get columns() {
    return ['Status', 'Description']
  }

  get rows() {
    if (!this.statuses) {
      return []
    }
    const statuses = Array.isArray(this.statuses)
      ? this.statuses
      : this.statuses?.split('|')

    const descriptions = Array.isArray(this.descriptions)
      ? this.descriptions
      : this.descriptions?.split('|')

    return this.statuses.map((_, i) => [statuses?.[i], descriptions?.[i]])
  }
}
</script>
