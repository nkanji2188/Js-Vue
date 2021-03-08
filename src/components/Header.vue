<template>
  <div class="Header-vue">
    <header class="header">
      <div class="header__inner">
        <img class="header__logo" alt="Vue logo" src="../assets/images/logo.png">
      <h1 class="header__title">vue.js</h1>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding-top: 25px;
  padding-bottom: 10px;
  // background: $color-bg-orange;
  &__title {
    font-size: 70px;
    color: #555;
  }
  &__inner {
    display: flex;
    justify-content: center;
  }
  &__logo {
    margin: 15px;
    margin-top: 30px;
    width: 50px;
    height: 50px;
  }
}
</style>
