export const useGlobalStore = defineStore({
  id: 'global',
  state: () =>
    useStorage('global', {
      count: 0
    }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      Math.max(this.count--, 0)
    }
  }
})
