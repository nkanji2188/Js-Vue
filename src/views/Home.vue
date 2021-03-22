<template>
  <div class="home-vue">

    <h2 class="page-heading">
      <span class="page-heading__text">
        <span class="font-color-orange">J</span>ava<span class="font-color-orange">S</span>cript<br>&amp;<span class="font-color-orange">V</span>ue.js
      </span>
    </h2>

    <section class="section container narrow mtm">
      <div class="section__head">
        <h2 class="primary-heading">
          <span class="primary-heading__icon">S</span>
          <span class="primary-heading__text line">Site Consept</span>
        </h2>
      </div>
      <div class="section__body">
        <div class="text-box">
          <p class="text-box__text">本サイトは、主にJavaScriptの技術習得の為に制作いたしました。</p>
          <p class="text-box__text">また、サイト制作環境にVue.jsを使いSPA（シングルページアプリケーション）で制作していますので、ページ移管のレスポンスがとても速くなっています。</p>
        </div>
        <h3 class="primary-heading">
          <span class="primary-heading__text line">Page Introduction</span>
        </h3>
        <h4 class="secondary-heading">
          <span class="secondary-heading__text">Count Up</span>
        </h4>
        <div class="text-box">
          <p class="text-box__text">主にJsとjQueryを使い、1から24までの数字を順番にクリックしていくゲームを作成いたしました。</p>
          <p class="text-box__text">つまらなくならないよう演出を多く取り入れました。</p>
          <p class="text-box__text">またランダムに当たりを入れ、いつゲームクリアーになるか分からない仕掛けをいれています。</p>
        </div>
        <div class="button-box">
          <a class="button" href="">Count Upへ</a>
        </div>
        <h4 class="secondary-heading">
          <span class="secondary-heading__text">To Do List</span>
        </h4>
        <div class="text-box">
          <p class="text-box__text">とても簡単なものですが、Vueを使ったTo Do Listを制作しました。</p>
          <p class="text-box__text">つまらなくならないよう演出を多く取り入れました。</p>
          <p class="text-box__text">またランダムに当たりを入れ、いつゲームクリアーになるか分からない仕掛けをいれています。</p>
        </div>
        <div class="button-box">
          <a class="button" href="">Count Upへ</a>
        </div>

      </div>
      <div class="section__foot">
        <!-- <a class="button" href="">jjjjj</a> -->
      </div>
    </section>

<p>{{ msg }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// document.getElementById('header__title').textContent = 'l22222'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      data1: 'data1',
      name: 'honeタイトル'
    }
  }
}
</script>

<style lang="scss" scoped>
.home-vue{
  // min-height: 100vh;
}

</style>
