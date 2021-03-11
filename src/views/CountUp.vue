<script></script>
<template>
  <div class="CountUp-vue">
    <header class="header">
      <div class="header__inner">
        <h1 class="header__title">Count Up</h1>
      </div>
    </header>
    <main class="main">
      <section class="section container">
        <div class="section__head">
          <h2 class="df jcsb">
            <span class="page-headding__text">Best Record : <span id="count-record">0</span></span>
            <span class="page-headding__text">Time : <span id="count-timer">0</span></span>
          </h2>
        </div>

        <div class="section__body">
          <div id="count-game" class="count-game">
            <div id="count-numbers"></div>
            <div id="count-start" class="count-start">
              <p id="count-start__text" class="count-start__text"></p>
              <button id="count-button" class="button count">START</button>
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
  mounted: function() {

    var countNum;
    var cardArray;
    var time;
    var timer;
    init();

    function init() {
      // 初期化
      countNum = 1;
      cardArray = [];
      time = 0;

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

      $('.count-numbers__card-inner').on('click', function() {
        var num = $(this).html();
        if (num == countNum){
          $(this).addClass('hit');
          // $(this).hide();
          // $(this).animate({'margin-left': '+=250' }, 200);
          $(this).parent().prepend('<div class="count-numbers__card-inner--02"></div>');
          $('.count-numbers__card-inner--02')

          .animate({}, 100, function(){
            $(this).css('transform', 'rotateX(1020deg) rotateY(1020deg)' )
          })
          .animate({}, 1000, function(){
            $(this).css('transform', `translate( ${Math.floor( Math.random() * (5001-1)+1)}px, ${Math.floor( Math.random() * (5001-1)+1)}px)` )
            // $(this).css('transform', `rotateX(120deg) rotateY(120deg) translate( ${Math.floor( Math.random() * (5001-1)+1)}px, ${Math.floor( Math.random() * (5001-1)+1)}px)` )
            // $(this).css('transform', 'translate(' + Math.floor( Math.random() * (51-1)+1) + '0px,' + Math.floor( Math.random() * (51-1)+1) + '0px)')
         // if ( (Math.floor (Math.random() * (11-1)+1) % 2) == 0 ){
            // }else{
            //   $(this).css('transform', 'translate(' + Math.floor( Math.random() * (-101-1)+1) + '0px,' + Math.floor( Math.random() * (-101-1)+1) + '0px)')
            // }
          })
          // transform: rotateX(420deg) rotateY(300deg) translate(100px, 200px);
          .addClass('hit02');
          countNum ++;

              // .animate({'margin-left': '+=' + Math.floor( Math.random() * (101-1)+1) + '00px' }, 400)
        }
      });

      var count = 2;
      // var count = 4;
      countFunc();
      var downTimer = setInterval(countFunc, 1000);
      function countFunc() {
        count--;
        $('#count-button').html(count);
        $('#count-start__text').hide();
        if(count == 0){
          clearInterval(downTimer);
          $('#count-start').hide();
          timerFunc();
          timer = setInterval(timerFunc, 10);
        }
      };
    });

    // function timerFunc() {
    //   time ++;
    //   $('#count-timer').html(time);
    //   if(countNum == 26) {
    //     clearInterval(timer);
    //     $('#count-start__text').html(`Your Record : ${$('#count-timer').html()}` ).show();
    //     $('#count-button').html('PLAY AGAIN');
    //     $('#count-start').show();

    //     if($('#count-record').html() - $('#count-timer').html() > 0 || $('#count-record').html() == 0 ) {
    //       $('#count-record').html($('#count-timer').html());
    //     }
    //     init();
    //   }
    // };

  }
}
</script>

<style lang="scss">
.CountUp-vue{
  overflow: hidden;
}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__text{
  color: $color-font-yellow;
  }
}

#count-numbers{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  perspective: 500px;
}

.count-numbers__card{
  flex: 0 0 20%;
  height: 100px;
  line-height: 100px;
  font-size: 1.8rem;
  font-weight: bold;
  background: $color-bg-brown;
  color: $color-font-yellow;
  // margin-right: 1px;
  // margin-bottom: 1px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  // &::after{
  //   content:"";
  //   display: block;
  //   padding-top: 50%;
  // }
  position: relative;
}
.hit{
    background: $color-bg-orange;
    color: $color-font-yellow;
    // position: absolute;
    // transform: rotatex(360deg) rotateY(360deg);
    // transform: rotateY(450deg);
  }
.count-numbers__card-inner{
  cursor: pointer;
}
.count-numbers__card-inner--02{
  width: 100%;
  height: 100%;
  background: $color-bg-orange;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 1s;
}
.hit02{
  transform: rotateX(420deg) rotateY(300deg) translate(100px, 200px);
  // background: $color-bg-orange;
  color: $color-font-yellow;
  background: rgb(249, 21, 21);
  // opacity: 0;
  // transform: translate(100px, 200px);
    // position: absolute;
    // transform: rotatex(360deg) rotateY(360deg);
    // transform: rotateY(450deg);
}
// .count-numbers__card{
//   width: 99px;
//   height: 64px;
//   padding-top: 35px;
//   font-size: 1.8rem;
//   font-weight: bold;
//   background: $color-bg-brown;
//   color: $color-font-yellow;
//   margin-right: 1px;
//   margin-bottom: 1px;
//   text-align: center;
//   float: left;
//   cursor: pointer;
//   transition: 0.1s;
//   &.hit{
//     background: $color-bg-orange;
//     color: $color-font-yellow;
//   }
// }
</style>
