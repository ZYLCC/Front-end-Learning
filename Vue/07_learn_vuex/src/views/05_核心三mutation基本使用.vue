<template>
  <div>
    <button @click="changeName">修改name</button>
    <button @click="changeInfo">修改info</button>
    <h2>Store name: {{ $store.state.name }}</h2>
    <h2>Store level: {{ $store.state.level }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { CHANGE_INFO, CHANGE_NAME } from '../store/mutation_type'

  export default {
    computed: {
      ...mapGetters(["name", "level"])
    },
    methods: {
      // 传参写法1
      changeName() {
        // 不规范
        // this.$store.state.name = "Lcc"

        // 该用 commit，第二个参数可传参
        
        this.$store.commit(CHANGE_NAME, "coderLcc")
      },
      // 传参写法2
      changeInfo() {
        this.$store.commit({
          type: CHANGE_INFO,
          name: "zy",
          level: 100
        })
      },
      // 使用常量 commit


    }
  }
</script>

<script setup>

</script>

<style scoped>

</style>