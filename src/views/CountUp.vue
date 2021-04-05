<template>
  <div class="count-up-vue">

    <h2 class="page-heading">
      <span class="page-heading__text">
        <span>C</span>ount<span>U</span>p
      </span>
    </h2>

    <section class="section container-small mts">
      <div class="section__head mb0">
        <h2 class="df jcsb">
          <span class="primary-heading__text letter-s-n">Best <span class="pc-not-none">Record</span> : <span id="count-record">0</span></span>
          <span class="primary-heading__text letter-s-n">Time : <span id="count-timer">0</span></span>
        </h2>
      </div>
      <div class="section__body">
        <div id="count-game" class="count-game">
          <div id="count-numbers" class="count-numbers"></div>
          <div id="count-start" class="count-start">
            <p id="count-start__text" class="font-color-white"></p>
            <button id="count-button" class="button count">START</button>
          </div>
        </div>
      </div>
    </section>

    <div class="code-block">
      <a href="https://gist.github.com/nkanji2188/90f42efcf1be6f0fcfe2ba003b179ce5" target="blank" class="code-block__link">本ページの主なコードはこちらからご覧になれます。</a>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted: function() {

    var start = '#count-start',
      countNum,
      cardArray,
      playTime,
      playTimer,
      // カードを当てる回数25枚のときは26
      rendom;
    init();

    // 初期化
    function init() {
      countNum = 1;
      cardArray = [];
      playTime = 0;
      rendom = Math.ceil(Math.random()*10 + 5);

      for (var i = 0; i <= 24; i ++) {
        cardArray.push(i);
      }
      for (var i = 0; i < cardArray.length; i ++) {
        var tmpNum = cardArray[i];
        var r = Math.floor (Math.random() * cardArray.length);
        cardArray[i] = cardArray[r];
        cardArray[r] = tmpNum;
      }

      $('#count-numbers').html('');

      for (var i = 0; i <= 24; i++) {
        var cardNum = cardArray[i] + 1;
        $('#count-numbers')
          .prepend(
            `<div class="count-numbers__card"><div class="count-numbers__card-inner">${cardNum}</div></div>`
          );
      }
    // end function init ()
    };

    $('#count-button').on('click', function() {
      init();
      $('.count-numbers__card').on('click', function() {
        var num = $(this).children().html();
        if (num == countNum) {
          countNum ++;
          $(this).addClass('hit');
          // 飛んでいくカードを追加、アニメーションの指定
          $(this)
            .prepend('<div class="count-numbers__card-inner--02"><div>HIT</div></div>');
          $('.count-numbers__card-inner--02')
            .css({color: '#fec617', background: '#ff0000'});
          // カードが回るまでの待機時間
          setTimeout(cardFunc01, 50);
          function cardFunc01() {
            $('.count-numbers__card-inner--02')
              .css('transform', 'rotateX(720deg) rotateY(720deg)');
          };
          // カードが飛び始めるまでの待機時間
          setTimeout(cardFunc02, 600);
          function cardFunc02() {
            $('.count-numbers__card-inner--02').css('transform', `translate( ${Math.floor( Math.random() * 5000) -2500}px, ${Math.floor( Math.random() * 5000) -2500}px)` )
            .fadeOut(500, function() {
              $(this).remove(500);
            });
          };
        }
      });

      // カウントダウン
      var countDown = 5;
      countFunc();
      var downTimer = setInterval(countFunc, 1000);
      function countFunc() {
        countDown--;
        $('#count-button').hide();
        $('#count-start__text').hide();
        if (countDown == 4) {
          $(start).append('<div class="count03"><div class="rotatez10">3</div></div>');
        }
        if (countDown == 3) {
          $('.count03').remove();
          $(start).append('<div class="count02"><div class="rotatez-7">2</div></div>');
        }
        if (countDown == 2) {
          $('.count02').remove();
          $(start).append('<div class="count01"><div class="rotatez10">1</div></div>');
        }
        if (countDown == 1) {
          $('.count01').remove();
          $(start).append('<p class="count-go">GO!!</p>');
        }
        if (countDown == 0) {
          clearInterval(downTimer);
          $('.count-go').remove();
          $(start).hide();
          playTimerFunc();
          playTimer = setInterval(playTimerFunc, 10);
        }
      };
    // end $('#count-button').on('click', function()
    });

    function playTimerFunc() {
      playTime ++;
      $('a').on('click', function() {
        clearInterval(playTimer);
      });
      $('#count-timer').html(playTime);
      if (countNum == rendom) {
        clearInterval(playTimer);
        $('#count-numbers')
          .prepend('<div class="count-end"><div>Congratulations!!</div></div>');
        $(start).show().addClass('fade-in');
        $('#count-start__text').show().html(`Your Record : ${$('#count-timer').html()}` );
        $('#count-button').show().html('PLAY AGAIN');
        if ($('#count-record').html() - $('#count-timer').html() > 0 || $('#count-record').html() == 0 ) {
          $('#count-record').html($('#count-timer').html());
        }
      }
    };

  }
}
</script>

<style lang="scss">

.count-up-vue {
  overflow: hidden;
}

.count-game{
  position: relative;
}

.count-numbers{
  display: flex;
  flex-wrap: wrap;
  perspective: 500px;
}
  .count-numbers__card{
    flex: 0 0 calc(20% - 1px);
    margin-right: 1px;
    margin-bottom: 1px;
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    background: $color-main;
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
    &.hit{
      background: $color-bg-orange;
      color: $color-font-yellow;
    }
  }
  .count-numbers__card-inner{
    pointer-events: none;
  }
  .count-numbers__card-inner--02{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $color-bg-orange;
    // カードの回転時間
    transition: 0.5s;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.count-start {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $color-main;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 1s;
  &.fade-in{
    opacity: 1;
    animation: kf-count-start-fade-in 3s;
  }
}
  @keyframes kf-count-start-fade-in {
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

.count-go, .count01, .count02, .count03{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  border-radius: 50%;
  color: $color-font-yellow;
  background: $palette-red;
  animation: kf-count-up 1s;
  opacity: 0;
}
  .count-go{
    top: calc(50% - 150px);
    left: calc(50% - 150px);
    width: 300px;
    height: 300px;
    line-height: 300px;
    font-size: 10rem;
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
  @keyframes kf-count-up {
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

.count-end {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2.8rem;
  font-weight: bold;
  color: $color-font-yellow;
  animation: kf-count-end 2s 1s;
  opacity: 0;
  z-index: 2;
  transform-origin: 0 0;
  @include mqco{
    font-size: 5rem;
  }
  & > div {
    padding: 0px 30px;
    border-radius: 30px;
    background: $palette-red;
    transform: rotateZ(-7deg) translate(-50%, -50%);
    transform-origin: 0 0;
  }
}
  @keyframes kf-count-end {
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
