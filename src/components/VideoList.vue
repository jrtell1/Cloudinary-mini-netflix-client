<template>
  <div class="video-list-container">
    <div class="video-list">
      <div class="columns is-mobile" v-for="i in Math.ceil(movies.length / 6)" :key="i">
        <div class="column is-narrow" v-for="(movie, index) in movies.slice((i - 1) * 6, i * 6)" :key="movie._id">
          <img :src="bannerUrl(movie.banner)" :alt="movie.title" class="banner" @click="$emit('choose-movie', index)">
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-narrow" v-for="n in 12" :key="n" v-show="movies.length < 1">
          <div class="placeholder-banner"></div>
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
        return this.cloudinaryInstance.url(bannerName, {
          width: 200,
          height: 300,
          quality: 'auto',
          crop: 'fill',
          effect: 'auto_saturation',
          fetchFormat: 'auto'
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .banner {
    max-width: 200px;
    height: auto;
    transition: transform 200ms;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  .video-list-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .video-list {
    padding: 20px;
    height: 370px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .placeholder-banner {
    width: 200px;
    height: 300px;
    background: rgba(27, 27, 27, 0.7);
    animation: 1000ms ease infinite pulse;
  }

  @for $i from 1 through 12 {
    .placeholder-container:nth-child(#{$i}) .placeholder-banner {
      animation-delay: $i * 100ms;
    }
  }

  .arrow {
    position: absolute;
    top: 15px;
    bottom: 15px;
    display: flex;
    align-items: center;
    background: rgba(27, 27, 27, 0.7);
    padding: 5px;

    &.arrow-right {
      right: 0;
    }

    &.arrow-left {
      left: 0;
    }
  }

  @keyframes pulse {
    0% {
      background: rgba(27, 27, 27, 0.7);
    }

    25% {
      background: rgba(27, 27, 27, 0.5);
    }

    50% {
      background: rgba(27, 27, 27, 0.7);
    }
  }
</style>