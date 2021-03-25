<script></script>
<template>
  <div id="app">
    <div class="wrapper">

      <div class="opening-anime">
        <span class="page-heading__text">
          <!-- 読み込み時のanimeクラスを削除 -->
          <span class="heading01 anime">J</span>
          <span class="heading02 anime">a</span>
          <span class="heading03 anime">v</span>
          <span class="heading04 anime">a</span>
          <span class="heading05 anime">S</span>
          <span class="heading06 anime">c</span>
          <span class="heading07 anime">r</span>
          <span class="heading08 anime">i</span>
          <span class="heading09 anime">p</span>
          <span class="heading10 anime">t</span>
          <br>
          <span class="heading11 anime">&amp;</span>
          <span class="heading12 anime">V</span>
          <span class="heading13 anime">u</span>
          <span class="heading14 anime">e</span>
          <span class="heading15 anime">.</span>
          <span class="heading16 anime">j</span>
          <span class="heading17 anime">s</span>
        </span>
      </div>

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
  // 初回読み込み時のみのアニメーション
  // mounted: window.onload = function() {
  // $('.page-heading__text > span').addClass('anime')
  // }
}

</script>

<style lang="scss">
.wrapper{
  position: relative;
}

.opening-anime{
  position: fixed;
  // position: absolute;
  top: 50%;
  width: 100%;
  // height: 100vh;
  transform: translateY(-50%);
  text-align: center;
  // display: flex;
  // justify-content: center;
  // align-items: center;
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
