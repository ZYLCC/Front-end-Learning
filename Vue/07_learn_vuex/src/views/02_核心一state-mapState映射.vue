<template>
  <div>
    <h2>name: {{ name }}</h2>
    <h2>levle: {{ level }}</h2>
    <h2>avaterURL: {{ avaterURL }}</h2>
    <hr>
    <!-- <h2>{{ sName }}</h2>
    <h2>{{ sLevel }}</h2> -->
    <h2></h2>
  </div>
</template>

<!-- <script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        name: "cc"
      }
    },
    computed: {
      // 计算属性：数组语法
      ...mapState(["name", "level", "avaterURL"]),
      // 如果和 data 中变量名冲突
      // 计算属性：对象语法
      ...mapState({
        sName: state => state.name,
        sLevel: state => state.level
      })
    },
  }
</script> -->

<script setup>
  import { computed, toRefs } from 'vue';
  import { mapState, useStore } from 'vuex'

  // 得到的是函数
  // const { name, level } = mapState(["name", "level"])

  // 直接对 store.state 进行结构
  const store = useStore()
  const { name, level, avaterURL } = toRefs(store.state)

</script>

<style scoped>

</style>