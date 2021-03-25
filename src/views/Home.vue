<script></script>
<template>
  <div class="home-vue">

    <h2 class="page-heading">
      <span class="page-heading__text">
        <!-- FVが終わったらスパンだけに変更 -->
        <span class="top">J</span>ava<span class="top">S</span>cript<br>
        &amp;<span class="top">V</span>ue.js

        <!-- <span class="heading01 anime">J</span>
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
        <span class="heading17 anime">s</span> -->
      </span>
    </h2>

    <section class="section container narrow mtm">
      <div class="section__head">
        <h2 class="primary-heading">
          <!-- <span class="primary-heading__icon">S</span> -->
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
          <a class="button" href="">Count Up</a>
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
          <a class="button" href="">Count Up</a>
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
  // data () {
  //   return {
  //     data1: 'data1',
  //   }
  // },
  // mounted:function() {
  //   window.setTimeout( openFanc, 5000);
  //   function openFanc(){
  //     $('.opening').addClass('opening--02');
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.home-vue{
  // min-height: 100vh;
}

</style>
