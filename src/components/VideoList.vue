<template>
  <div class="video-list-container">
    <div class="video-list">
      <div class="columns is-mobile">
        <div class="column is-narrow" v-for="(movie, index) in movies" :key="movie._id">
          <div
            class="banner-container"
            :class="{ 'is-active': activeMovieIndex === index }"
            @click="$emit('choose-movie', index)"
            @mouseover="showPreview(index)"
          >
            <img :src="bannerUrl(movie.banner)" :alt="movie.title" class="banner">
            <video
              v-if="currentPreviewIndex === index"
              class="preview"
              autoplay
              muted
              loop
              :src="previewUrl(movie.trailer)"
              @mouseleave="hidePreview"
            ></video>
            <span v-if="activeMovieIndex === index" class="playing-label is-size-4">Playing</span>
          </div>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-narrow" v-for="n in 12" :key="n" v-show="movies.length < 1">
          <div class="placeholder-banner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const baseTransformations = {
    width: 200,
    height: 300,
    quality: 'auto',
    crop: 'fill',
    effect: 'auto_saturation',
    fetchFormat: 'auto'
  };

  export default {
    name: 'videolist',

    props: {
      cloudinaryInstance: {
        required: true
      },
      movies: {
        type: Array,
        required: true
      },
      activeMovieIndex: {
        type: Number,
        default: 0
      },
    },

    data() {
      return {
        currentPreviewIndex: null
      }
    },

    methods: {
      /**
       * Shows preview for the given index.
       */
      showPreview(index) {
        this.currentPreviewIndex = index;
      },

      /**
       * Sets preview to null.
       */
      hidePreview() {
        this.currentPreviewIndex = null;
      },

      /**
       * Generates a Cloudinary url for the given banner.
       *
       * @param {String} bannerName
       * @returns {String}
       */
      bannerUrl(bannerName) {
        return this.cloudinaryInstance.url(bannerName, baseTransformations);
      },

      /**
       * Generates a Cloudinary url for the given preview video.
       *
       * @param {String} trailerName
       * @returns {string}
       */
      previewUrl(trailerName) {
        return this.cloudinaryInstance.video_url(trailerName, {
          ...baseTransformations,
          duration: 7
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .banner-container {
    position: relative;
    transition: transform 200ms;
    border: 1px solid #404040;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  .banner {
    display: block;
    max-width: 200px;
    height: auto;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
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

  .preview {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: block;
  }

  .playing-label {
    padding: 5px 10px;
    bottom: 0;
    left: 0;
    position: absolute;
    text-shadow: 0 0 2px black;
    background: rgba(139, 0, 0, 0.5);
    width: 100%;
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