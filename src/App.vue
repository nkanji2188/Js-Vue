<template>
  <div id="app">
    <div class="wrapper">
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
.v-enter-active, .v-leave-active{
  transition: opacity 0.5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

</style>
