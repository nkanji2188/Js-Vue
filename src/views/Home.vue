<script></script>
<template>
  <div class="home-vue">

    <h2 class="page-heading">
      <span class="page-heading__text">
        <span>J</span>ava<span>S</span>cript
        <br>
        &amp;<span>V</span>ue.js
      </span>
    </h2>

    <section class="section container narrow">
      <div class="section__head">
        <h2 class="primary-heading">
          <span class="primary-heading__text line">Site Consept</span>
        </h2>
      </div>
      <div class="section__body">
        <div class="text-box">
          <p class="text-box__text">本サイトは、主にJavaScriptの技術習得の為に制作いたしました。</p>
          <p class="text-box__text">また、サイト制作環境にVue.jsを使いSPA（シングルページアプリケーション）で制作していますので、ページ移管のレスポンスがとても速くなっています。</p>
          <p class="text-box__text">各ページ下部には、そのページの主なコートが見ることが出来るリンクを設置していますので、ご覧頂ければと思います。</p>
        </div>
        <h3 class="primary-heading">
          <span class="primary-heading__text line">Page Introduction</span>
        </h3>
        <div class="curly-bracket">
          <h4 class="secondary-heading">
            <span class="secondary-heading__text">Count Up</span>
          </h4>
          <div class="text-box">
            <p class="text-box__text">主にJsとjQueryを使い、1から24までの数字を順番にクリックしていくゲームを作成いたしました。</p>
            <p class="text-box__text">つまらなくならないよう演出を多く取り入れました。</p>
            <p class="text-box__text">またランダムに当たりを入れ、いつゲームクリアーになるか分からない仕掛けをいれています。</p>
          </div>
          <div class="button-box">
            <router-link class="button" to="/CountUp">CountUpへ</router-link>
          </div>
        </div>
        <div class="curly-bracket">
          <h4 class="secondary-heading">
            <span class="secondary-heading__text">Ajax</span>
          </h4>
          <div class="text-box">
            <p class="text-box__text">非同期通信を利用してYouTube検索が出来るページです。</p>
            <p class="text-box__text">非同期にはjQueryではなくaxiosを使用しています。</p>
          </div>
          <div class="button-box">
            <router-link class="button" to="/Ajax">Ajaxへ</router-link>
          </div>
        </div>
        <div class="curly-bracket">
          <h4 class="secondary-heading">
            <span class="secondary-heading__text">ToDo List</span>
          </h4>
          <div class="text-box">
            <p class="text-box__text">とても簡単なものですが、Vueを使ったTo Do Listを制作しました。</p>
          </div>
          <div class="button-box">
            <router-link class="button" to="/Todo">ToDoListへ</router-link>
          </div>
        </div>
      </div>
    </section>

    <div class="code-block home">
      <a href="https://gist.github.com/nkanji2188/89767d037f6cad504a2e1a25916bf316" target="blank" class="code-block__link home">本サイトのメイン、App.vueのコードはこちらからご覧になれます。</a>
      <a href="https://gist.github.com/nkanji2188/c833e6e2a26aa992d71dda5dce0b719e" target="blank" class="code-block__link home">本ページの主なコードはこちらからご覧になれます。</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  // data () {
  //   return {
  //     data1: 'data1',
  //   }
  // },
}
</script>

<style lang="scss" scoped>

.curly-bracket{
  margin-top: 60px;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
  @include mqpc {
    padding-left: 150px;
    padding-right: 150px;
  }
  &::before {
    content: '{';
    position: absolute;
    top: 50%;
    left: -16px;
    transform: translateY(-50%) scale(1, 1.5);
    font-size: 10rem;
    font-weight: bold;
    color: $color-main;
    @include mqpc {
      left: 50px;
      // transform: translateY(-50%) scale(1, 1.5);
    }
  }
  &::after {
    content: '}';
    position: absolute;
    top: 50%;
    right: -16px;
    transform: translateY(-50%) scale(1, 1.5);
    font-size: 10rem;
    font-weight: bold;
    color: $color-main;
    @include mqpc {
      right: 50px;
      // transform: translateY(-50%) scale(1, 1.5);
    }
  }
}

</style>
