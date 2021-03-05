<template>
  <div id="app">
    <Header/>
    <button class="button">jjjjj</button>
    <!-- <div class="header__ttl02">{{ msg }}</div> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/CountUp">CountUp</router-link> |
      <router-link to="/for">for</router-link>
      <router-link to="/for2">for2</router-link>
      <router-link to="/Todo">Todo</router-link>
      <router-link to="/Each">Each</router-link>
    </div>
      <router-view/>
    <transition mode="out-in">
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Js from './assets/js/jquery-3.4.1.min'

export default {
  name: 'App',
  components: {
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
