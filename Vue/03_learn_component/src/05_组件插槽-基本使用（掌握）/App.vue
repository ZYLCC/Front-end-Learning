<template>
  <div class="app">
    <show-message title="这是第一个title" >
      <button>我是按钮</button>
    </show-message><hr>
    
    <show-message title="这是第二个title" >
      <i>我是斜体字体</i>
    </show-message><hr>

    <show-message title="这是第三个title" >
      <img src="https://cn.vuejs.org/assets/slots.dbdaf1e8.png" style="width: 500px;">
    </show-message><hr>

    <show-message></show-message><hr>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue';

  export default {
    components: {
      ShowMessage
    }
  }
</script>

<style scoped>

</style>