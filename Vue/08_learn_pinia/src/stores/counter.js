import { defineStore } from 'pinia'

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
  }),

})

export default useCounter