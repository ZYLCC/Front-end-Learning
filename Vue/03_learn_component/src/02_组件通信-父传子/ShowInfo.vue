<template>
  <div class="infos">

    <h2 :class="$attrs.class">姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>身高：{{ height }}</h2>

  </div>

  <div class="others" v-bind="$attrs">
    其他消息
  </div>
</template>

<script>
  export default {
    // 父组件给子组件通信传递数据
    // 1. props 数组语法
    // 弊端：1> 不能对数据类型进行验证  2> 没有默认值
    // props: ['name', 'age', 'height']

    // 2. props 对象语法（必须掌握）
    props: {
      // 禁止让 非prop的attribute 传到根节点 （class style 不受影响）
      // inheritAttrs: false,
      
      name: {
        type: String,
        required: true,  // 必传 （有必传的话一般没有默认值）
        default: 'name(必须传)'
      },
      age: {
        type: Number,
        default: 0
      }, 
      height: {
        type: Number,
        default: 0
      },
      friend: {
        // 类型是对象, 数组，默认值必须是函数返回
        type: Object,
        default: () => ({ name: 'zy' })
      },
      hobbies: {
        type: Array,
        default: () => ['sing', 'dance', 'rap', 'ball']
      }
    }
  }
</script>

<style scoped>

</style>