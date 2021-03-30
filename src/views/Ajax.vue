<script></script>
<template>
  <div class="ajax">

    <h2 class="page-heading">
      <span class="page-heading__text"><span>A</span>jax</span>

    </h2>

    <section class="section container">
      <div class="section__head">
      </div>
      <div class="section__body">
        <input v-model="keyword" placeholder="検索キーワードを入力">
        <button id="search_button" class="button">検索</button>
        <!-- <button @click="search_button">検索</button> -->
        <table cellspacing="0" cellpadding="5" v-show="results">
    <tr>
      <th width="50">
        <font>No</font>
      </th>
      <th width="200">
        <font>Video</font>
      </th>
      <th width="700">
        <font>Contents</font>
      </th>
    </tr>

    <tr v-for="(movie, index) in results" v-bind:key="movie.id.videoId">
      <!-- No -->
      <td valign="top" width="50">{{ index + 1 }}</td>
      <!-- Video -->
      <td valign="top" width="300">
        <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId">
          <img width="300" height="200" v-bind:src="movie.snippet.thumbnails.medium.url">
        </a>
      </td>
     <!-- titleとdescription -->
      <td align="left" valign="top" width="700">
        <font size="5" color="#c71585"><b>{{ movie.snippet.title }}</b></font>
        <br>
        {{ movie.snippet.description}}</td>
    </tr>
  </table>
      </div>
      <div class="section__foot">
      </div>
    </section>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SearchVideo",
  data: function() {
    return {
      results: null,
      keyword: "BREAKDANCE",
      order: "viewCount",
      params: {
        q: "",
        part: "snippet",
        type: "video",
        maxResults: "20",
        key: "AIzaSyBCytdaHcN5nHHWtwmJX8zEkE2mBXilQR8"
      }
    };
  },
  methods: {
    search_button: function() {
      this.params.q = this.keyword;
      var self = this;
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: this.params
        })
        .then(function(responce) {
          self.results = responce.data.items;
        })
    }
  }
}
</script>

<style lang="scss" scoped>

table {
  border-collapse: collapse;
  border: solid 2px #c71585;/*表全体を線で囲う*/
}
table th {
  color: #fff0f5;/*文字色*/
  background: #ff69b4;/*背景色*/
  border: dashed 1px #c71585;
}

table td {
  background: #fff0f5;
  border: dashed 1px #c71585;
}

</style>
