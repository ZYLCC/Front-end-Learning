<template>
  <div>
    <h2>Home计数：{{ counter }}</h2>
    <button @click="plus1">+1</button>
    <button @click="minus1">-1</button><br>
    <button @click="popularClick">home-流行</button>
    <button @click="hotClick">home-热门</button>
    <button @click="recommendClick">home-推荐</button>
  </div>

  <div class="show-position">
    <h3>X: {{ scrollPosition.x }} </h3>
    <h3>Y: {{ scrollPosition.y }} </h3>
  </div>

  <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor delectus quos perferendis repellendus omnis maiores pariatur aperiam nostrum numquam, quia, illo accusamus facere eius possimus neque magnam laborum, animi ratione mollitia vel voluptas sed? Fugiat optio sunt omnis laboriosam totam tenetur ipsa esse ratione natus eligendi harum vitae quam tempore eius veniam deserunt quos placeat sapiente, et officiis. Libero officia eveniet repellendus facilis saepe illum molestias eligendi impedit, quo maxime labore aliquid sit ut nesciunt, aut sapiente deserunt voluptatibus? Velit vel autem ex neque adipisci at fugiat incidunt quos, vitae sapiente maxime voluptas. Incidunt, hic enim, suscipit inventore expedita aliquam facere quae consequuntur quo porro quia vel aperiam et sed eveniet, blanditiis ullam esse. Necessitatibus quaerat maxime, molestias atque inventore odit quos porro explicabo eos enim eaque fugit quo natus ab magni unde voluptate incidunt cumque harum. Earum esse magni suscipit consequatur error alias excepturi unde quidem totam accusamus quisquam laborum ipsum pariatur, hic reiciendis incidunt voluptas soluta, molestias non culpa quae odio quam nemo obcaecati! Nesciunt tenetur enim culpa inventore magni saepe praesentium ex rem modi repudiandae! Beatae in, impedit quo totam quae illum, autem, id ipsum recusandae architecto quaerat maxime iste! Perferendis doloribus neque aperiam accusantium pariatur ad excepturi, illo tenetur nihil iusto dignissimos vitae ex ipsam recusandae sequi eveniet quis itaque sunt adipisci ratione fugiat! Ut quae facere ab, explicabo accusantium fugiat illo sapiente minus dolorem culpa velit? Veniam, et cum! Iusto aliquid at quasi explicabo obcaecati illum neque sequi necessitatibus quibusdam fugit praesentium tempora molestiae nostrum modi et ad odit atque porro ullam enim exercitationem impedit, libero accusantium magni! Soluta quisquam ratione at voluptates eaque facere, impedit aspernatur eius quam. Tempora alias similique earum, odit architecto repellendus maxime obcaecati sint et dignissimos reiciendis minima amet illo corrupti, ipsa unde quisquam. Debitis nihil accusantium asperiores odit molestiae nemo aliquid. Corporis ut accusantium velit quasi? Accusantium ratione neque ut distinctio ex quod incidunt voluptates modi similique suscipit dignissimos perferendis voluptatem odio, iste est assumenda ullam exercitationem architecto. Ea aperiam doloribus possimus, numquam, animi obcaecati perferendis similique explicabo impedit laudantium ducimus. Doloremque delectus nemo exercitationem at. Iure, eum deserunt nobis nemo quidem enim facilis nisi consequuntur repellendus odio consectetur tempore voluptate eligendi, suscipit, iusto sunt corporis sit magnam earum modi odit esse quae cumque minus. Magnam voluptatum quod quo aspernatur culpa nostrum impedit, veniam quaerat sapiente animi deserunt perspiciatis illum vitae fugit, debitis ipsum qui? Iusto reprehenderit veritatis quisquam culpa reiciendis cum soluta mollitia inventore, necessitatibus adipisci ea ipsa similique, exercitationem consequuntur tempora dolores ipsam maxime. Esse ut magni unde! Asperiores nihil illum numquam obcaecati totam atque repellendus nisi, reprehenderit dolor voluptate rerum eveniet accusantium? Doloribus, voluptate nihil impedit consequuntur iure commodi alias harum, earum iusto, fugit sapiente illo labore similique! Aspernatur, sint. Vitae harum maiores eius at! Fuga ratione neque labore, nobis aspernatur perferendis rem quam id quidem aliquam possimus obcaecati aliquid animi sed repudiandae nemo. Quidem aperiam in, voluptatum ad eveniet placeat inventore quas quibusdam assumenda, nulla non laboriosam soluta reprehenderit nihil id odio numquam. Sequi, praesentium.</div>
</template>

<script>
  import { ref, onMounted } from 'vue'
  import useCounter from '../hooks/useCounter'
  import useTitle from '../hooks/useTitle'
  import useScrollPosition from '../hooks/useScrollPosition'

  export default {
    setup() {
      // 1. 解构
      // const { counter, plus1, minus1 } = useCounter()
      // return {
      //   counter,
      //   plus1,
      //   minus1
      // }

      // 默认标题
      const title = useTitle("首页")

      // 监听按钮点击
      function popularClick() {
        title.value = "首页-流行"
      }
      function hotClick() {
        title.value = "首页-热门"
      }
      function recommendClick() {
        title.value = "首页-推荐"
      }

      const { scrollPosition } = useScrollPosition()

      // 2. 展开运算符
      return {
        ...useCounter(),
        popularClick,
        hotClick,
        recommendClick,
        scrollPosition
      }
    }

  }
</script>
  
<style scoped>
  .content {
    width: 4000px;
    height: 4000px;
    color: white;
  }
  
  .show-position{
    position: fixed;
    top: 0;
    right: 0;
    color: red;
  }
</style>