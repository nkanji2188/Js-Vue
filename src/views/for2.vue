<template>
  <div id="app">
    <div class="box" v-for="item in animals" :key="item[i]">
        <h2 class="ttl">{{ item.name }}</h2>
        <div v-for="info in item.desc" :key="info.words">
         <p class="text">{{ info.words }}</p>
         <div v-for="info in item.desc02" :key="info.words">
          <p class="text02">{{ info.words }}</p>
        </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  // data: function () {
  data () {
    return {
      animals: [

        // { name: 'apple', desc: [{ words: '1500en' }, { text: 'minim culpa sint ad cillum aute cupidatat commodo.' }] },
        // { name: 'orenge', desc: [{ words: '2500en' }, { text: ' ullamco laboris esse sit vllum.' }] }
        { name: 'apple', desc: [{ words: '1500en' }], desc02: [{ words: 'llllllllllllllllllllll' }] },
        { name: 'orenge', desc: [{ words: '2500en' }], desc02: [{ words: 'oooooooooooooooooooooo' }] }
      ]
    }
  }
}
</script>
 <style lang="scss" scoped>
  .box {
    margin-bottom: 50px;
    padding: 20px;
    background: rgb(211, 255, 161);
  }
  .ttl{
    font-size: 50px;
  }
  .text{
    font-size: 16px;
    margin-top: 15px;
  }
  .text02{
    font-size: 16px;
    margin-top: 15px;
    color: rgb(85, 36, 150);
  }
 </style>
