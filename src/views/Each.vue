<script></script>
<template>
  <div id="info-block"></div>
</template>

<script>
export default {
  mounted: function () {
    var datas = [
      // 元々vueでは画像は表示されていない。普通のJS用
      { title: 'タイトル1', desc: 'elit nostrud' , img: '@/images/01.png' },
      { title: 'タイトル2', desc: 'Aute eiusmod', img: '@/assets/images/01.png' }
    ];

    datas.forEach (function ( val ) {
      var ttl = document.createElement ( 'p' );
      var text = document.createElement ( 'p' );
      var img = document.createElement ( 'img' );
      var div = document.createElement ( 'div' );
      ttl.textContent = val.title;
      ttl.classList.add ( 'ttl' );
      text.textContent = val.desc;
      img.src = val.img;
      document.getElementById( 'info-block' ).appendChild ( div ).appendChild ( ttl );
      document.getElementById( 'info-block' ).appendChild ( div ).appendChild ( text );
      document.getElementById( 'info-block' ).appendChild ( div ).appendChild ( img );
    });

 }
}
</script>

<style lang="scss">
  .case{
    text-align: center;
    background: rgb(30, 228, 63);
    & + &{
      margin-top: 50px;
    }
  }
  h2{
    font-size: 50px;
  }
  .pic02{
    margin: 0 auto;
  }
</style>
