<script></script>
<template>
  <div id="app">
    <div class="wrapper">

      <div class="opening-anime">
        <span class="page-heading__text">
          <span class="heading01">J</span>
          <span class="heading02">a</span>
          <span class="heading03">v</span>
          <span class="heading04">a</span>
          <span class="heading05">S</span>
          <span class="heading06">c</span>
          <span class="heading07">r</span>
          <span class="heading08">i</span>
          <span class="heading09">p</span>
          <span class="heading10">t</span>
          <br>
          <span class="heading11">&amp;</span>
          <span class="heading12">V</span>
          <span class="heading13">u</span>
          <span class="heading14">e</span>
          <span class="heading15">.</span>
          <span class="heading16">j</span>
          <span class="heading17">s</span>
        </span>
      </div>

      <div class="main-bg header-opening">
        Abeunt<br>studia in<br>mores.
        <!-- JavaScript<br>and<br>Vue.js<br> -->
        <span class="pc-none"><br>Amat victoria curam.</span>
      </div>
      <!-- <Header/> -->
      <Header class="header-opening"></Header>
      <main class="main header-opening">
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
  mounted:function() {
    window.setTimeout(openFanc, 5000);
    function openFanc() {
      $('[class^=heading]').animate({'opacity': 1}, 1000, function() {
        $(this).fadeOut(1000, function() {
          $(this).remove();
        });
      });
    }
    window.setTimeout(openFanc02, 7000);
    function openFanc02() {
      $('.header-opening').addClass('header-opening--02');
    }

  }
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

.header-opening{
  // transform: translateY( 50px);
  opacity: 0;
  // filter: blur(2px);
  transition: 1s;
  // animation: header-anime 2s 5s;
}
.header-opening--02{
  transform: translateY( 0);
  filter: blur(0);
  opacity: 1;
  // animation: header-anime 2s 5s;
}
//  @keyframes header-anime {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }

.v-enter-active, .v-leave-active{
  transition: opacity 0.2s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

</style>
