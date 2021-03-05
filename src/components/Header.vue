<template>
  <div>
    <header class="header">
      <div class="header__box">
        <img class="header__logo" alt="Vue logo" src="../assets/images/logo.png">
      <h1 class="header__ttl">vue.js</h1>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header{
  &__ttl{
    font-size: 70px;
    color: #555;
  }
  &__box{
    display: flex;
    justify-content: center;
  }
  &__logo{
    margin-top: 15px;
    margin: 15px;
    width: 50px;
    height: 50px;
  }
}

</style>
