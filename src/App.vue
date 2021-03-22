<template>
  <div id="app">
    <div class="wrapper">
      <div class="main-bg">
        JavaScript<br>and<br>Vue.js
      </div>
      <Header/>
      <main class="main">
      <router-view/>
      </main>
      <footer class="text-a-c pts pbs">
        <small>&copy;kanji nakahashi 2021</small>
      </footer>
    </div>
  </div>
  <!-- <div>{{ msg }}</div> -->
  <!-- <transition mode="out-in">
  </transition> -->
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    // GlobalNav,
    Header
  }
}
</script>

<style lang="scss">
.main-bg{
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 5%;
  padding-left: 5%;
  width: 100%;
  height: 100vh;
  line-height: 1;
  font-size: 25rem;
  font-weight: bold;
  // text-shadow: #fff 0 0 10px;
  color: #8092a1;
  background: rgb(255, 243, 106);

  background: #758ca0;
  // background: #1D2D44;
  // background: #1D2D44;
  // color: rgb(255, 243, 106);
  // background: rgb(252, 237, 77);
  z-index: -1;
}
// .v-enter-active, .v-leave-active{
//   transition: opacity 0.5s;
// }
// .v-enter, .v-leave-to {
//   opacity: 0;
// }

</style>
