import { defineStore } from "pinia"

const useUser = defineStore("user", {
  state: () => ({
    name: "cc",
    age: 25,
    level: 99,
  })
})

export default useUser