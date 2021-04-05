<script></script>
<template>
  <div class="ajax">

    <h2 class="page-heading">
      <span class="page-heading__text"><span>A</span>jax</span>
    </h2>

    <section class="section container">
      <div class="section__head">
        <h1>{{ info }}</h1>

        <input @click="getIp" type="button" value="IPを取得">
      </div>
      <div class="section__body">
        <ul class="list">
          <li id="js" class="seminar">
            <h2>勉強会</h2>
            <p class="check">空き情報確認</p>
          </li>
          <li id="secrity" class="seminar">
            <h2>セキュリティー対策講座</h2>
            <p class="check">空き情報確認</p>
          </li>
          <li id="uiux" class="seminar">
            <h2>UX/UIハッカソン</h2>
            <p class="check">空き情報確認</p>
          </li>
        </ul>
      </div>
      <div class="section__foot">
      </div>
    </section>

  </div>
</template>

<script>
import axios from 'axios';
export default {
// new Vue({
  el: '.ajax',
  data () {
    return {
      info: null
    }
  },

  mounted () {
    // thisで上手く行った
    axios
      // .get('https://httpbin.org/get')
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // .get('https://data.city.kyoto.lg.jp/API/action/datastore/search.json?')
      .then(response => (this.info = response))
      // .then(response => (this.info = response.data.bpi))
  },
  methods: {
    getIp() {
      axios.get('https://httpbin.org/get')
      .then((responce) => {
        alert(responce.data.origin);
      })
      .catch((e) => {
        alert(e);
      });
    }
}

}

</script>

<style lang="scss" scoped>

.list {
  overflow: hidden;
  display: flex;
}
.list h2 {
  margin-bottom: 30px;
  font-size: 1.6rem;
  text-align: center;
}

.seminar{
  margin: 10px 10px 10px 0;
  border: 1px solid #000;
  padding: 4px;
  width: (100% / 3);
}
.check {
  padding: 8px;
  font-size: 1.2rem;
  color: #fff;
  background: rgb(43, 163, 255);
  text-align: center;
  cursor: pointer;
}

.red {
  background: rgb(255, 0, 0);
}

.green {
  background: rgb(42, 182, 8);
}

</style>
