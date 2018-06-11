<template>
  <div>
    <div class="columns" v-for="i in Math.ceil(movies.length / 6)" :key="i">
      <div v-if="movies.length < 1">Loading...</div>
      <div v-else v-for="movie in movies.slice((i - 1) * 6, i * 6)" :key="movie._id" class="column">
        <img :src="bannerUrl(movie.banner)" alt="" class="banner" @click="$emit('choose-movie', movie)">
      </div>
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
</style>