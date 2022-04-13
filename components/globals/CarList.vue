<template>
  <div v-if="carList" class="car-list">
    <h2>Vehicles</h2>
    <p>
      The table below lists all our supported upcoming vehicles sorted by make.
      When using our API you can use the name of the vehicle or it's id to query
      for specific details. Please
      <a href="https://help.chargetrip.com/file-a-ticket">file a ticket</a> if
      you miss a vehicle.
      <br />
      <br />
      <b
        >Disclaimer: Upcoming vehicles may be removed or change at any time.
        Upcoming vehicles can not be used in your project and are only an
        indication of vehicles that might be added.</b
      >
    </p>

    <nav class="flex space-x-4 mt-6">
      <Tab
        v-for="(category, key) in categories"
        :key="key"
        :active="categoryIndex === key"
        @click="categoryIndex = key"
      >
        {{ category }}
      </Tab>
    </nav>

    <ul class="mt-5 bor">
      <li
        v-for="(category, categoryKey) in normalizedCarList"
        :key="categoryKey"
        class="divider-y divide-alt text-14 border-base border-t"
      >
        <div
          class="cursor-pointer py-2.5 flex items-center"
          @click="index = index === categoryKey ? null : categoryKey"
        >
          <Label :label="categoryKey" :sub-label="`${category.length} Cars`" />
          <span
            class="icon-chevron-down ml-auto transform"
            :class="{ 'rotate-180': index === categoryKey }"
          />
        </div>
        <ul v-show="index === categoryKey" class="pl-8 border-t border-base">
          <li
            v-for="(car, carKey) in category"
            :key="carKey"
            class="border-b border-base last:border-b-0 py-4"
          >
            <Label :label="car.name" :sub-label="car.id" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Mutation } from 'vuex-class'
import { Getter } from 'nuxt-property-decorator'
import { Label, Tab } from '@chargetrip/internal-vue-components'
import availableVars from '~/utilities/availableVars'

@Component({ components: { Label, Tab } })
export default class extends Vue {
  @Mutation setCarCount
  @Getter carList
  index = null

  categoryIndex = 0
  categories = ['Available vehicles', 'Upcoming vehicles']

  getCarName({ model, version, chargetrip_version }) {
    return `${model} ${chargetrip_version || version}`
  }

  normalizeCarList(carList) {
    return carList.reduce((obj, item) => {
      if (!obj[item.naming.make]) obj[item.naming.make] = []
      obj[item.naming.make].push({
        ...item,
        name: this.getCarName(item.naming),
      })
      return obj
    }, {})
  }

  get normalizedCarList() {
    const category = this.categories[this.categoryIndex]

    switch (category) {
      case 'Upcoming vehicles':
        return this.normalizeCarList(this.carList.new)
      case 'Available vehicles':
        return this.normalizeCarList(this.carList.public)
      default:
        return this.normalizeCarList(this.carList.public)
    }
  }

  async fetch() {
    try {
      if (this.carList) return
      await availableVars.carList(this.$store)
    } catch (e) {}
  }
}
</script>
<style lang="scss">
.car-list {
  .c-tab {
    @apply bg-transparent;
  }
  .checkbox-tree-list {
    li ul {
      @apply pl-7;

      .c-checkbox:not(.active) {
        @apply opacity-100;
      }

      li {
        @apply pl-0;
      }
    }
  }
}
</style>
