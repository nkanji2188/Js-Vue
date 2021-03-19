<template>
  <div class="home-vue">
    <Header/>
    <main class="main">

      <section class="section container">
        <div class="section__head">
          <h2 class="page-headding">
            <span class="page-headding__text">HOME</span>
          </h2>
        </div>
        <div class="section__body">

        </div>
        <div class="section__foot">
          <a class="button" href="">jjjjj</a>
        </div>
      </section>
    </main>

<p>{{ msg }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
// document.getElementById('header__title').textContent = 'l22222'
export default {
  name: 'Home',
  components: {
    Header
  },
  data () {
    return {
      data1: 'data1',
      name: 'honeタイトル'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
