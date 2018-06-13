<template>
  <div class="video-list-container">
    <div class="video-list">
      <div class="columns" v-for="i in Math.ceil(movies.length / 6)" :key="i">
        <div v-if="movies.length < 1">Loading...</div>
        <div v-else v-for="movie in movies.slice((i - 1) * 6, i * 6)" :key="movie._id" class="column">
          <img :src="bannerUrl(movie.banner)" alt="" class="banner" @click="$emit('choose-movie', movie)">
        </div>
      </div>
    </div>

    <div class="arrow arrow-left">
      <i class="fas fa-angle-left fa-5x"></i>
    </div>
    <div class="arrow arrow-right">
      <i class="fas fa-angle-right fa-5x"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'videolist',

    props: {
      cloudinaryInstance: {
        required: true
      },
      movies: {
        type: Array,
        required: true
      }
    },

    methods: {
      /**
       * Generates a Cloudinary url for the given banner.
       *
       * @param {String} bannerName
       * @returns {String}
       */
      bannerUrl(bannerName) {
        return this.cloudinaryInstance.url(bannerName);
      }
    }
  }
</script>
<style>
  .banner {
    max-width: 204px;
    height: auto;
  }

  .banner:hover {
    cursor: pointer;
  }

  .video-list-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .video-list {
    padding: 15px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    /*font-size: 30px;*/;
    height: 100%;
    display: flex;
    align-items: center;
    background: grey;
    opacity: 0.5;
  }

  .arrow-right {
    right: 0;
  }

  .arrow-left {
    left: 0;
  }
</style>