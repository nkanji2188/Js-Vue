<template>
  <div id="app">
    <div class="wrapper">
      <GlobalNav/>
      <Header/>
      <main class="main">
        <!-- <div class="header__ttl02">{{ msg }}</div> -->
        <router-view/>
      </main>
      <footer class="footer">
        <p class="text-a-c">@@@@@@@@@</p>
      </footer>
    </div>
  </div>
  <!-- <transition mode="out-in">
  </transition> -->
</template>

<script>
import GlobalNav from './components/GlobalNav.vue'
import Header from './components/Header.vue'
// import Js from './assets/js/jquery-3.4.1.min'

export default {
  name: 'App',
  components: {
    GlobalNav,
    Header
  },
  data () {
    return {
      msg: '@@@@'
    }
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
