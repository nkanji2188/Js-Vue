<script></script>
<template>
  <div class="ajax">

    <h2 class="page-heading">
      <span class="page-heading__text"><span>A</span>jax</span>
    </h2>

    <section class="section container">
      <div class="section__head df jcc mbm">
        <input v-model="keyword" placeholder="検索キーワードを入力" class="input-search">
        <button @click="search_button" class="button-input">検索</button>
      </div>
      <div class="section__body">

        <div v-show="results" class="">

          <div class="df jcc fw-b">
            <div class="search-video-head">Video</div>
            <div class="search-video-head pc-not-none">Contents</div>
          </div>

          <div v-for="(movie, index) in results" v-bind:key="movie.id.videoId" class="search-video">
            <!-- No Video-->
            <div class="search-video__inner left">
              <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId" class="position-re bg-color-sub">
                <div class="position-re">
                  <div class="search-video__number">{{ index + 1 }}</div>
                  <img v-bind:src="movie.snippet.thumbnails.medium.url">
                </div>
              </a>
            </div>
            <!-- description -->
            <div class="search-video__inner">
              <h3 class="fz20">{{ movie.snippet.title }}</h3>
              <p>{{ movie.snippet.description }}</p>
            </div>
          </div>

        </div>

      </div>
      <!-- <div class="section__foot">
      </div> -->
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
.input-search {
  width: 30%;
  vertical-align: top;
  padding: 10px;
  background: $color-sub;
}

.search-video-head {
  flex: 0 0 100%;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  background: #000;
  position: relative;
  @include mqpc {
    flex: 0 0 50%;
  }
  &::before {
    content: 'No';
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    background: rgb(130, 130, 130);
    @include mqsp-small {
      left: -16px;
    }
  }
  &::after {
    @include mqsp-small {
      content: '';
      position: absolute;
      top: 0;
      right: -16px;
      padding: 20.5px;
      background: #000;
    }
  }
  & + & {
    &::before {
      display: none;
    }
  }
}
.search-video {
  justify-content: center;
  position: relative;
  @include mqpc {
    display: flex;
  }
}
  .search-video__inner {
    margin-bottom: 20px;
    @include mqpc {
      flex: 0 0 50%;
    }
    &.left{
      @include mqpc {
        padding-right: 20px;
      }
    }
    & > a {
      display: flex;
      justify-content: center;
    }
  }
  .search-video__number {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    width: 40px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    background: rgb(130, 130, 130);
  }

</style>
