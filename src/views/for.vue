<template>
  <div id="app">

    <div v-for="item in array" :key="item" class="box">
      <h2 class="ttl">
        タイトル：{{ item.title }}
      </h2>
      <p class="text">
        説明文：{{ item.info }}
      </p>
      <div class="pic__box">
        <p>画像</p>
        <img :src="item.img" class="pic">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      array: [
        { title: 'title', info: 'Nisi sit r quis ullamco.', img: require('@/assets/images/logo.png') },
        { title: 'title02', info: 'Labore nulla od esse non.', img: require('@/assets/images/01.png') },
        { title: 'title02', info: 'Labore nulla od esse non.', img: require('@/assets/images/02.jpg') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .box{
    padding: 20px;
    background: rgb(74, 231, 68);
    margin-top: 20px;
  }
  .ttl{
    font-size: 50px;
  }
  .text{
    font-size: 16px;
  }
  .pic{
    width: 300px;
    // margin: 0 auto;
    &__box{
      margin-top: 50px;
      display: flex;
      justify-content: center;
    }
  }
</style>
