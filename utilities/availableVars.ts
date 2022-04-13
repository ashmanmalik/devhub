const carListFn = async (store) => {
  store.commit('setCarList', (await import(`~/static/carList.json`)).default)
}

export default {
  carList: carListFn,
  carCount: carListFn,
}
