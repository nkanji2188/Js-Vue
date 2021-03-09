<template>
  <div class="GlobalNav-vue">
    <nav class="global-nav">
      <ul class="global-nav__inner">
        <li class="global-nav__item"><router-link class="global-nav__link" to="/">Home</router-link></li>
        <li class="global-nav__item"><router-link class="global-nav__link" to="/about">About</router-link></li>
        <li class="global-nav__item"><router-link class="global-nav__link" to="/CountUp">CountUp</router-link></li>
        <li class="global-nav__item"><router-link class="global-nav__link" to="/for">for</router-link></li>
        <li class="global-nav__item"><router-link class="global-nav__link" to="/for2">for2</router-link></li>
        <li class="global-nav__item"><router-link class="global-nav__link" to="/Todo">Todo</router-link></li>
        <li class="global-nav__item"><router-link class="global-nav__link" to="/Each">Each</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.global-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  &__inner {
    display: flex;
  }
  &__item {
    & + & {
      border-left: 1px solid $color-font-main;
      padding-left: 10px;
      margin-left: 10px;
    }
  }
  &__link {
    font-weight: bold;
    color: $color-font-main;
  }
}
</style>
