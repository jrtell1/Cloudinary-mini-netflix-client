<template>
  <div class="player-bg">
    <video
      id="trailer"
      autoplay
      loop
      controls
      class="cld-video-player player-bg-video">
    </video>
    <div class="player-content">
      <h1 class="is-size-1 has-text-weight-bold">{{ movieTitle }}</h1>
    </div>
  </div>
</template>

<script>
  import config from '../config'

  export default {
    name: 'videoplayer',

    props: {
      cloudinaryInstance: {
        required: true
      },
      movie: {
        type: Object,
        required: true
      }
    },

    computed: {
      movieTitle() {
        return this.movie.title || config.fallbackMovie.title;
      },

      movieTrailer() {
        return this.movie.trailer || config.fallbackMovie.trailer;
      }
    },

    watch: {
      movie(newMovie) {
        this.player.source(newMovie.trailer);
      }
    },

    mounted() {
      this.player = this.cloudinaryInstance.videoPlayer('trailer', {
        transformation: {
          crop: 'crop',
          width: 1200,
          aspect_ratio: '16:9',
          x: 100,
          y: 100,
          gravity: 'center'
        }
      });

      this.player.volume(localStorage.getItem('playerVolume') || 0.4);
      this.player.on('volumechange', this.onVolumeChanged);
      this.player.source(this.movieTrailer);

      document.hidden && this.player.mute();
      window.onfocus = () => this.player.unmute();
      window.onblur = () => this.player.mute();
    },

    methods: {
      /**
       * Triggers when volume is changed in Video Player.
       */
      onVolumeChanged() {
        localStorage.setItem('playerVolume', this.player.volume());
      }
    }
  }
</script>

<style>
  .player-bg {
    position: relative;
  }

  .player-bg-video {
    position: absolute;
    width: 100%;
    outline: none;
  }

  .player-content {
    position: absolute;
    top: 30%;
    left: 200px;
  }
</style>