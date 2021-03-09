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

  </div>
<!-- <p>{{ msg }}</p> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  components: {
    Header
  },
  data () {
    return {
      msg: 'ooooooooo'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
