<template>
  <div id="app">
    <div class="wrapper">
      <!-- <GlobalNav/> -->
      <Header/>
      <!-- <main class="main">
      </main> -->
      <router-view/>
      <footer class="text-a-c pts pbs">
        <small>©kanji nakahashi 2021</small>
      </footer>
    </div>
  </div>
  <!-- <div>{{ msg }}</div> -->
  <!-- <transition mode="out-in">
  </transition> -->
</template>

<script>
// import GlobalNav from './components/GlobalNav.vue'
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
.v-enter-active, .v-leave-active{
  transition: opacity 0.5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

</style>
