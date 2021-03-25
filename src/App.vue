<template>
  <div id="app">
    <div class="wrapper">
      <div class="main-bg">
        Abeunt<br>studia in<br>mores.
        <!-- JavaScript<br>and<br>Vue.js<br> -->
        <span class="pc-none"><br>Amat victoria curam.</span>
      </div>
      <Header/>
      <main class="main">
        <transition mode="out-in">
          <router-view/>
        </transition>
      </main>
      <footer class="text-a-c pts pbs font-color-main">
        <small>&copy;kanji nakahashi 2021</small>
      </footer>
    </div>
  </div>
  <!-- <div>{{ msg }}</div> -->
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    // GlobalNav,
    Header
  },
}

</script>

<style lang="scss">
.header__mv{
  width: 100%;
  height: 100vh;
  // background: rgb(223, 129, 129);
}
.main-bg{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-left: 2%;
  padding-bottom: 2%;
  line-height: 1.5;
  font-size: 5rem;
  font-weight: bold;
  color: $color-sub;
  z-index: -1;
  @include color-anime;
  @include mqtb {
    line-height: 1;
    font-size: 11vw;
  }
  @include mqpcl {
    font-size: 12vw;
  }
}

.v-enter-active, .v-leave-active{
  transition: opacity 0.2s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

</style>
