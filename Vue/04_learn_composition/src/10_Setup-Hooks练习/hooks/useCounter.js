import { ref, onMounted } from "vue"

export default function useCounter() {
  const counter = ref(0)

  function plus1() {
    counter.value++
  }
  function minus1() {
    counter.value--
  }

  onMounted(() => {
    setTimeout(() => {
      counter.value = 50
    }, 1000)
  })

  return {
    counter,
    plus1,
    minus1
  }
}