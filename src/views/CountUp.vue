<script></script>
<template>
  <div class="CountUp">
    <header class="header">
      <div class="header__inner">
        <h1 class="header__title">Count Up</h1>
      </div>
    </header>
    <main class="main">
      <section class="section container">
        <div class="section__head">
          <h2 class="df jcsb">
            <span id="count-record" class="page-headding__text">Best Record : <span>0</span></span>
            <span id="count-timer" class="page-headding__text">Time : <span>0</span></span>
          </h2>
        </div>

        <div class="section__body">
          <div id="count-game" class="count-game">
            <div id="count-numbers" class="count-numbers"></div>
            <div id="count-start" class="count-start">
              <p class=""></p>
              <button class="button count">START</button>
            </div>
          </div>
        </div>

        <div class="section__foot">
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  mounted: function () {

    $('#count-start').hide();

    var countNum;
    var cardArray;
    var time;
    var timer;
    init ();

    function init () {
      // 初期化
      countNum = 1;
      cardArray = [];
      time = 0;

      for (var i = 0; i <= 24; i++) {
        cardArray.push(i);
      }

      for (var i = 0; i < cardArray.length; i++){
        var tmpNum = cardArray[i];
        var r = Math.floor (Math.random() * cardArray.length);

        cardArray[i] = cardArray[r];
        cardArray[r] = tmpNum;
      }

      $('#count-numbers').html('');

      for (var i = 0; i <= 24; i++) {
        var cardNum = cardArray[i];
        $('#count-numbers').append(`<div>${cardNum}</div>`);
        // $('#count-numbers').prepend('<div>' + cardNum + '</div>');
        // $('#count-numbers').prepend(`<div>${cardNum}</div>`);
      }

    }

  }
}
</script>

<style scoped lang="scss">
.count-game{
  position: relative;
}
.count-start{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  background: $color-bg-brown;
}

.count-numbers{
  width: 99px;
  height: 64px;
  padding-top: 35px;
  font-size: 1.8rem;
  font-weight: bold;
  background: $color-bg-brown;
  color: $color-font-yellow;
  margin-right: 1px;
  margin-bottom: 1px;
  text-align: center;
  float: left;
  cursor: pointer;
  &__hit{
    background: $color-bg-orange;
    color: $color-font-yellow;
  }
}
</style>
