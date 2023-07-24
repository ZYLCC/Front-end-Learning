<template>
  <h2>{{ title }}</h2>
  <div class="content">
    <slot>
      <p>我是 slot 插槽中默认的文字</p>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '这是一个默认title'
      },
    }
  }
</script>

<style scoped>

</style>