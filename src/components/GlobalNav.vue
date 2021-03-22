<script></script>
<template>
  <div class="GlobalNav-vue">

    <nav id="global-nav-sp" class="global-nav-sp">
      <ul class="global-nav-sp__inner">
        <li class="pb10">
          <router-link class="global-nav-sp__link" to="/">Home</router-link>
        </li>
        <li class="pb10">
          <router-link class="global-nav-sp__link" to="/about">About</router-link>
        </li>
        <li class="pb10">
          <router-link class="global-nav-sp__link" to="/CountUp">CountUp</router-link>
        </li>
        <li class="pb10">
          <router-link class="global-nav-sp__link" to="/for">for</router-link>
        </li>
        <li class="pb10">
          <router-link class="global-nav-sp__link" to="/for2">for2</router-link>
        </li>
        <li class="pb10">
          <router-link class="global-nav-sp__link" to="/Todo">Todo</router-link>
        </li>
        <li class="pb10">
          <router-link class="global-nav-sp__link" to="/Each">Each</router-link>
        </li>
      </ul>
    </nav>
    <button id="global-nav-sp__btn" class="global-nav-sp__btn">Menu</button>

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

// .global-nav-sp {
//   position: fixed;
//   top: 0;
//   right: -150px;
//   width: 150px;
//   height: 100vh;
//   padding-top: 50px;
//   padding-left: 20px;
//   z-index: 3;
//   background: $color-bg-orange;
//   transition: 0.5s;
//   &--02{
//     right: 0;
//   }
//   @include mqtb{
//     display: none;
//   }
// }
//   .global-nav-sp__link {
//     font-weight: bold;
//     color: $color-font-yellow;
//   }
//   .global-nav-sp__btn{
//     position: fixed;
//     top: 0;
//     right: -88px;
//     width: 150px;
//     padding: 10px;
//     text-align: left;
//     font-weight: bold;
//     color: $color-font-yellow;
//     background: $color-bg-brown;
//     z-index: 4;
//     transition: 0.5s;
//     &--02{
//       right: 0;
//       padding-left: 20px;
//     }
//     @include mqtb{
//       display: none;
//     }
//   }

// .global-nav {
//   @include mqsp {
//     display: none;
//   }
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 20px;
//   margin-top: 10px;
//   display: flex;
//   justify-content: center;
//   z-index: 3;
// }
//   .global-nav__inner {
//       display: flex;
//   }
//   .global-nav__item {
//     & + & {
//     border-left: 1px solid $color-font-brown;
//     padding-left: 10px;
//     margin-left: 10px;
//     }
//   }
//   .global-nav__link {
//       font-weight: bold;
//       color: $color-font-brown;
//   }

</style>
