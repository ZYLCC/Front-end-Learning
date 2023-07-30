import { ref } from 'vue'

export default function useCounter() {
  let counter = ref(0)
    const add = () => {
      counter.value++
    }
    const sub = () => {
      counter.value--
    }

    return { counter, add, sub }
}