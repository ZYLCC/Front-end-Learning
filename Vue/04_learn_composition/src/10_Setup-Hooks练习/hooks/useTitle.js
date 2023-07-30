import { watch, ref } from "vue"

export default function useTitle(titleValue) {
  // 定义 ref 的引入数据
  const title = ref(titleValue)

  // 侦听 title 变化
  watch(title, (newValue) => {
    document.title = newValue
  }, {
    immediate: true
  })

  return title
}