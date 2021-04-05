<script></script>
<template>
  <div class="header-vue">

    <header class="header">
      <h1 class="header__title"><span>[</span>Js&amp;Vue<span>]</span></h1>
    </header>

    <!-- global-nav-sp -->
    <nav id="global-nav-sp" class="global-nav-sp">
      <ul class="global-nav-sp__inner">
        <li>
          <router-link class="global-nav-sp__link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="global-nav-sp__link" to="/CountUp">CountUp</router-link>
        </li>
        <li>
          <router-link class="global-nav-sp__link" to="/Ajax">Ajax</router-link>
        </li>
        <li>
          <router-link class="global-nav-sp__link" to="/Todo">Todo</router-link>
        </li>
      </ul>
    </nav>
    <button id="global-nav-sp__btn" class="global-nav-sp__btn">Menu</button>

    <!-- global-nav-pc -->
    <nav id="global-nav" class="global-nav">
      <ul class="global-nav__inner">
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/">Home</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/CountUp">CountUp</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/Ajax">Ajax</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/Todo">Todo</router-link>
        </li>
        <!-- <li class="global-nav__item">
          <router-link class="global-nav__link" to="/Ajax02">Ajax02</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/for">for</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/for2">for2</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/Each">Each</router-link>
        </li> -->
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  mounted: function() {
    $('#global-nav-sp__btn').on('click', function(){
      $('#global-nav-sp').toggleClass('global-nav-sp--02')
      $('#global-nav-sp__btn').toggleClass('global-nav-sp__btn--02')
      if( $(this).html() === 'Menu'){
        $(this).html('Close');
      }else{
        $(this).html('Menu');
      }
      $('a').on('click', function(){
        $('#global-nav-sp').removeClass('global-nav-sp--02')
        $('#global-nav-sp__btn').removeClass('global-nav-sp__btn--02')
        $('#global-nav-sp__btn').html('Menu');
      });
    });
  }
}
</script>

<style lang="scss">

.header-vue{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  display: flex;
  @include mqtb {
    // top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  }
}

.header{
  // padding-top: 10px;
  margin-right: 20px;
  @include mqtb {
  }
}
  .header__title {
    padding-top: 10px;
    color: $color-main;
    // text-shadow: 1px 1px 2px $palette-yellow;
    @include mqsp{
      position: fixed;
      top: 0;
      left: 0;
      // padding-top: 20px;
      padding-bottom: 9px;
      width: 100%;
      text-align: center;
      background: rgba(255, 255, 255, 0.5);
    }
    & > span {
      margin-left: 5px;
      margin-right: 5px;
      color: $color-sub;
      -webkit-text-stroke-color: $color-main;
      -webkit-text-stroke-width: 0.5px;
    }
  }

.global-nav-sp {
  position: fixed;
  top: 0;
  right: -150px;
  width: 150px;
  height: 100vh;
  padding-top: 50px;
  padding-left: 20px;
  background: $color-sub;
  z-index: 3;
  transition: 0.5s;
  &--02{
    right: 0;
  }
  @include mqtb{
    display: none;
  }
}
  .global-nav-sp__link {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: $color-main;
  }
  .global-nav-sp__btn{
    width: 150px;
    margin-right: -88px;
    padding: 10px;
    text-align: left;
    font-weight: bold;
    color: #fff;
    background: $color-main;
    z-index: 4;
    transition: 0.5s;
    &--02{
      margin-right: 0;
      padding-left: 20px;
    }
    @include mqtb{
      display: none;
    }
  }

.global-nav {
  @include mqsp {
    display: none;
  }
  margin-top: 10px;
}
  .global-nav__inner {
      display: flex;
  }
  .global-nav__item {
    & + & {
    border-left: 1px solid $color-main;
    }
  }
  .global-nav__link {
    padding: 10px;
    font-weight: bold;
    color: $color-main;
    // text-shadow: 1px 1px 2px $palette-yellow;
  }

</style>
