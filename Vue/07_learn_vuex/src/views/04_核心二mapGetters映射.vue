<template>
  <div>
    <h2>info => {{ message }}</h2>
    <hr>
    <h2>doubleCounter: {{ doubleCounter }}</h2>
    <!-- <button @click="plusLevel">按钮</button> -->
    <hr>
    <h2>users: {{ $store.state.users }}</h2>
    <h2>users' totalAge: {{ totalAge }}</h2>
    <hr>
    <h2>id-1的书籍信息：{{ getBookById(1) }}</h2>
    <h2>id-3的书籍信息：{{ getBookById(3) }}</h2>
  </div>
</template>

<!-- <script>
  import { mapGetters } from "vuex"

  export default {
    // 映射 getters 
    computed: {
      ...mapGetters(["doubleCounter", "totalAge", "message"]),
      ...mapGetters(["getBookById"])
    }
  }
</script> -->

<script setup>
  import { toRefs } from "vue"
  import { mapGetters, useStore } from "vuex";

  const store = useStore()

  const { message, doubleCounter, totalAge } = toRefs(store.getters)
  const { getBookById } = store.getters
</script>

<style scoped>

</style>