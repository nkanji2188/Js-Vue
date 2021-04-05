<template>
  <div id="app">
    <div class="wrapper">

      <div class="opening-anime">
        <span class="opening-anime__text">
          <span class="opening-anime__text-child-01">J</span>
          <span class="opening-anime__text-child-02">a</span>
          <span class="opening-anime__text-child-03">v</span>
          <span class="opening-anime__text-child-04">a</span>
          <span class="opening-anime__text-child-05">S</span>
          <span class="opening-anime__text-child-06">c</span>
          <span class="opening-anime__text-child-07">r</span>
          <span class="opening-anime__text-child-08">i</span>
          <span class="opening-anime__text-child-09">p</span>
          <span class="opening-anime__text-child-10">t</span>
          <br>
          <span class="opening-anime__text-child-11">&amp;</span>
          <span class="opening-anime__text-child-12">V</span>
          <span class="opening-anime__text-child-13">u</span>
          <span class="opening-anime__text-child-14">e</span>
          <span class="opening-anime__text-child-15">.</span>
          <span class="opening-anime__text-child-16">j</span>
          <span class="opening-anime__text-child-17">s</span>
        </span>
      </div>

      <div class="opening-hide">
        <div class="main-bg">{{ info }}
          Abeunt<br>studia in<br>mores.
          <span class="pc-none"><br>Amat victoria curam.</span>
        </div>
        <Header/>
        <main class="main">
          <transition mode="out-in">
            <router-view/>
          </transition>
        </main>
        <footer class="footer">
          <small>&copy;kanji nakahashi 2021</small>
        </footer>
      </div>

    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import $ from 'jquery'

export default {
  name: 'App',
  components: {
    Header
  },

  mounted: function () {
    // アニメーション文字を一度同時表示
    setTimeout(openFunc01, 5000)
    function openFunc01() {
      $('[class^=opening-anime__text-child-]').removeClass().addClass('opening-anime__text-child--second')
      // $('[class^=opening-anime__text-child-]').animate({'opacity': 1}, 800, function() {
      //   $(this).fadeOut(800, function() {
      //     $(this).remove();
      //   });
      // });
    }
    // アニメを削除
    setTimeout(openFunc02, 7000)
    function openFunc02 () {
      $('.opening-anime').remove()
    }
  }

}
</script>

<style lang="scss">

.opening-anime{
  position: fixed;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translateY(-50%);
}
  .opening-anime__text{
    font-size: 4rem;
    line-height: 1.3;
    font-weight: bold;
    letter-spacing: nomal;
    @include mqtb{
      font-size: 5rem;
      letter-spacing: 1.2rem;
    }
    @include mqpc{
      font-size: 8rem;
    }
  }
  .opening-anime__text-child-01 {
    animation: kf-opening-anime 2s 1.5s both;
  }
  .opening-anime__text-child-02 {
    animation: kf-opening-anime 2s 1.6s both;
  }
  .opening-anime__text-child-03 {
    animation: kf-opening-anime 2s 1.7s both;
  }
  .opening-anime__text-child-04 {
    animation: kf-opening-anime 2s 1.8s both;
  }
  .opening-anime__text-child-05 {
    animation: kf-opening-anime 2s 1.9s both;
  }
  .opening-anime__text-child-06 {
    animation: kf-opening-anime 2s 2s both;
  }
  .opening-anime__text-child-07 {
    animation: kf-opening-anime 2s 2.1s both;
  }
  .opening-anime__text-child-08 {
    animation: kf-opening-anime 2s 2.2s both;
  }
  .opening-anime__text-child-09 {
    animation: kf-opening-anime 2s 2.3s both;
  }
  .opening-anime__text-child-10 {
    animation: kf-opening-anime 2s 2.4s both;
  }
  .opening-anime__text-child-11 {
    animation: kf-opening-anime 2s 2.5s both;
  }
  .opening-anime__text-child-12 {
    animation: kf-opening-anime 2s 2.6s both;
  }
  .opening-anime__text-child-13 {
    animation: kf-opening-anime 2s 2.7s both;
  }
  .opening-anime__text-child-14 {
    animation: kf-opening-anime 2s 2.8s both;
  }
  .opening-anime__text-child-15 {
    animation: kf-opening-anime 2s 2.9s both;
  }
  .opening-anime__text-child-16 {
    animation: kf-opening-anime 2s 3s both;
  }
  .opening-anime__text-child-17 {
    animation: kf-opening-anime 2s 3.1s both;
  }
    @keyframes kf-opening-anime {
      0% {
        color: #758ca0;
        opacity: 0;
      }
      40% {
        @include color-opening-anime;
        opacity: 1;
      }
      60% {
        @include color-opening-anime;
        opacity: 1;
      }
      100% {
        color: #758ca0;
        opacity: 0;
      }
    }
  .opening-anime__text-child--second{
    @include color-opening-anime;
    animation: kf-opening-anime02 2s both;
  }
    @keyframes kf-opening-anime02 {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

.opening-hide{
  animation: kf-opening-hide 0.5s 6.6s both;
}
  @keyframes kf-opening-hide {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
 }

.main-bg{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-left: 2%;
  padding-bottom: 2%;
  line-height: 1.5;
  font-size: 5rem;
  font-weight: bold;
  color: $color-sub;
  z-index: -1;
  animation: kf-main-bg-anime 10s infinite;
  @include mqtb {
    line-height: 1;
    font-size: 11vw;
  }
  @include mqpcl {
    font-size: 12vw;
  }
}
  @keyframes kf-main-bg-anime {
    0% {
      color: $color-sub;
    }
    50% {
      color: rgb(227, 241, 255);
    }
    100% {
      color: $color-sub;
    }
  }

// ページ移動のトランジション
.v-enter-active, .v-leave-active{
  transition: opacity 0.2s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

.footer{
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: $color-main;
}

</style>
