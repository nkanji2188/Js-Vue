<script></script>
<template>
  <div class="Header-vue">

    <header class="header">
        <!-- <img class="header__logo" alt="Vue logo" src="../assets/images/logo.png"> -->
        <h1 class="header__title">&#x25CF;Js<span>&amp;</span>Vue&#x25CF;</h1>
    </header>

    <!-- global-nav-sp -->
    <nav id="global-nav-sp" class="global-nav-sp">
      <ul class="global-nav-sp__inner">
        <li>
          <router-link class="global-nav-sp__link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="global-nav-sp__link" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="global-nav-sp__link" to="/CountUp">CountUp</router-link>
        </li>
        <li>
          <router-link class="global-nav-sp__link" to="/for">for</router-link>
        </li>
        <li>
          <router-link class="global-nav-sp__link" to="/for2">for2</router-link>
        </li>
        <li>
          <router-link class="global-nav-sp__link" to="/Todo">Todo</router-link>
        </li>
        <li>
          <router-link class="global-nav-sp__link" to="/Each">Each</router-link>
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
          <router-link class="global-nav__link" to="/about">About</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/CountUp">CountUp</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/for">for</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/for2">for2</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/Todo">Todo</router-link>
        </li>
        <li class="global-nav__item">
          <router-link class="global-nav__link" to="/Each">Each</router-link>
        </li>
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

.Header-vue{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  display: flex;
  // background: #748CAB;
  @include mqtb {
  top: 10px;
  width: 100%;
  // padding: 20px;
  justify-content: center;
  }
}

.header{
  margin-top: 10px;
  margin-right: 20px;
}
  .header__title {
    color: $palette-orange;
    color: #fff;
    // text-shadow: 1px 1px 2px $palette-yellow;
    @include mqsp{
    position: fixed;
    top: 10px;
    left: 0;
    width: 100%;
    text-align: center;
    }
    & > span {
      font-size: 1.2rem;
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
  background: $color-bg-orange;
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
    color: $color-font-yellow;
  }
  .global-nav-sp__btn{
    width: 150px;
    margin-right: -88px;
    padding: 10px;
    text-align: left;
    font-weight: bold;
    color: $color-font-yellow;
    background: $color-bg-brown;
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
    border-left: 1px solid $color-font-brown;
    }
  }
  .global-nav__link {
    padding: 10px;
    font-weight: bold;
    color: $color-font-brown;
    color: #fff;
    // text-shadow: 1px 1px 2px $palette-yellow;
  }

</style>
