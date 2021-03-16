<script></script>
<template>
  <div class="CountUp-vue">
    <header class="header">
      <div class="header__inner">
        <h1 class="header__title">Count Up</h1>
      </div>
    </header>
    <main class="main">
      <section class="section count-up-container min-height">
        <div class="section__head">
          <h2 class="count-page-headding df jcsb">
            <span class="page-headding__text">Best <span class="sp-none">Record</span> : <span id="count-record">0</span></span>
            <!-- <span class="page-headding__text">Time : <span id="count-timer">0</span></span> -->
          </h2>
        </div>

        <div class="section__body">
          <div id="count-game" class="count-game">
            <div id="count-numbers" class="count-numbers"></div>
            <div id="count-start" class="count-start">
              <p id="count-start__text" class="count-start__text"></p>
              <button id="count-button" class="button count">START</button>
            </div>
          </div>
        </div>
        <!-- <div class="section__foot">
        </div> -->
      </section>
    </main>
  </div>
</template>

<script>
export default {
  mounted: function() {

// console.log($('#count-button').width())
    var countNum;
    var cardArray;
    var time;
    var timer;
    // カードを当てる回数25枚のときは26
    var rendom;
    var start = '#count-start';
    init();

    // 初期化
    function init() {
      countNum = 1;
      cardArray = [];
      time = 0;
      // rendom = Math.ceil(Math.random()*10 + 5);
      rendom = 5;

      for(var i = 0; i <= 24; i ++) {
        cardArray.push(i);
      }
      for(var i = 0; i < cardArray.length; i ++){
        var tmpNum = cardArray[i];
        var r = Math.floor (Math.random() * cardArray.length);
        cardArray[i] = cardArray[r];
        cardArray[r] = tmpNum;
      }

      $('#count-numbers').html('');

      for(var i = 0; i <= 24; i++) {
        var cardNum = cardArray[i] + 1;
        $('#count-numbers').prepend(`<div class="count-numbers__card"><div class="count-numbers__card-inner">${cardNum}</div></div>`);
      }
    }; // end function init ()

    $('#count-button').on('click', function() {
      init();
      $('.count-numbers__card-inner').on('click', function() {
        var num = $(this).html();
        if (num == countNum){
          countNum ++;
          $(this).addClass('hit');
          $(this).parent().prepend('<div class="count-numbers__card-inner--02">HIT</div>');
          // ↑飛んでいくカードを追加、アニメーションの指定
          $('.count-numbers__card-inner--02')
          .animate({}, function(){
            $(this)
            .css('transform', 'rotateX(720deg) rotateY(720deg)' )
            .addClass('bg-color-red')
          })
          var animeCount = 0;
          // カードが飛び始めるまでの待機時間
          var animeTimer = setInterval(animeFunc, 600);
          function animeFunc() {
            animeCount++;
            $('.count-numbers__card-inner--02')
            .animate({}, function(){
              $(this).css('transform', `translate( ${Math.floor( Math.random() * 10000) -5000}px, ${Math.floor( Math.random() * 10000) -5000}px)` );
              $(this).fadeOut( function(){
              $(this).remove();
              });
            })
            if(animeCount == 1){
              clearInterval(animeTimer);
            }
          };
        }
      });
      // カウントダウン
      // var countDown = 2;
      var countDown = 5;
      countFunc();
      var downTimer = setInterval(countFunc, 1000);
      function countFunc() {
        countDown--;
        $('#count-button').hide();
        $('#count-start__text').hide();
        if(countDown == 4){
          $(start).append('<div class="count03"><div class="rotatez10">3</div></div>');
        }
        if(countDown == 3){
          $('.count03').remove();
          $(start).append('<div class="count02"><div class="rotatez-7">2</div></div>');
        }
        if(countDown == 2){
          $('.count02').remove();
          $(start).append('<div class="count01"><div class="rotatez10">1</div></div>');
        }
        if(countDown == 1){
          $('.count01').remove();
          $(start).append('<p class="count-go">GO!!</p>');
        }
        if(countDown == 0){
          clearInterval(downTimer);
          $('.count-go').remove();
          $(start).hide();
          timerFunc();
          timer = setInterval(timerFunc, 10);
        }
      };

    }); // $('#count-button').on('click', function()

    function timerFunc() {
      time ++;
      $('#count-timer').html(time);
      if(countNum == rendom) {
        $('#count-numbers').prepend('<div class="count-end"><div>Congratulations!!</div></div>');
        clearInterval(timer);
        $('#count-start__text').html(`Your Record : ${$('#count-timer').html()}` ).show();
        $('#count-button').show().html('PLAY AGAIN');
        $(start).show().addClass('fade-in');
        if($('#count-record').html() - $('#count-timer').html() > 0 || $('#count-record').html() == 0 ) {
          $('#count-record').html($('#count-timer').html());
        }
      }
    };

  }
}

</script>

<style lang="scss">
.CountUp-vue  {
  overflow: hidden;
  min-height: 100vh;
}

.count-up-container {
  max-width: 650px;
  @include mqco {
    margin-right: auto;
    margin-left: auto;
  }
}

.count-page-headding{
    padding-left: 10px;
    padding-right: 10px;
    @media screen and(min-width: 670px) {
      padding-left: 0;
      padding-right: 0;
    }
}

.count-game{
  position: relative;
}

.count-numbers{
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  perspective: 500px;
}

.count-numbers__card{
  flex: 0 0 calc(20% - 1px);
  // line-height: 130px;
  font-size: 1.8rem;
  font-weight: bold;
  background: $color-bg-brown;
  color: $color-font-yellow;
  margin-right: 1px;
  margin-bottom: 1px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after{
    content:"";
    display: block;
    padding-top: 100%;
  }
}

.hit{
  background: $color-bg-orange;
  color: $color-font-yellow;
}

.count-numbers__card-inner{
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  // z-index: 99;
  // &::after{
  //   content:"";
  //   display: block;
  //   padding-top: 100%;
  // }
}

.count-numbers__card-inner--02{
  width: 100%;
  height: 100%;
  background: $color-bg-orange;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  // カードの回転時間
  transition: 0.5s;
  // background: $palette-red;
}

.count-start{
  // opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  // transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background: $color-bg-brown;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 1s;
  &__text{
  color: $color-font-yellow;
  }
  &.fade-in{
    opacity: 1;
    animation: anime-fade-in 3s;
  }
  // &::after{
  //   content:'';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: #000;
  //   z-index: -1;
  // }
}
  @keyframes anime-fade-in {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

.count-go, .count01,.count02, .count03{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  border-radius: 50%;
  color: $color-font-yellow;
  background: $palette-red;
  animation: anime-count 1s;
  opacity: 0;
}

.count-go{
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  width: 300px;
  height: 300px;
  line-height: 300px;
  font-size: 100px;
}
.count01{
  top: 60%;
  left: 40%;
}
.count02{
  top: 20%;
  left: 30%;
}
.count03{
  top: 40%;
  left: 70%;
}

  @keyframes anime-count {
    0% {
      opacity: 1;
      transform: scale(1, 1);
    }
    20% {
      transform: scale(1.2, 1.2);
    }
    80% {
      transform: scale(0.8, 0.8);
      opacity: 1;
    }
    100% {
        transform: scale(0.8, 0.8);
        opacity: 1;
    }
  }

.count-end{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  font-weight: bold;
  color: $color-font-yellow;
  opacity: 0;
  z-index: 2;
  animation: anime-count-end 2s 1s;
  transform-origin: 0 0;
  @include mqco{
    font-size: 5rem;
  }
  & > div{
    transform: rotateZ(-7deg) translate(-50%, -50%);
    transform-origin: 0 0;
    padding: 0px 30px;
    border-radius: 30px;
    background: $palette-red;
  }
}
  @keyframes anime-count-end {
    0% {
      opacity: 1;
      transform: rotateZ(0) scale(1, 1);
    }
    20% {
      transform: rotateZ(360deg) scale(1.2, 1.2);
    }
    35% {
      transform: scale(0.8, 0.8);
    }
    42% {
        transform: scale(1.2, 1.2);
    }
    50% {
        transform: scale(1, 1);
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
  }
</style>
