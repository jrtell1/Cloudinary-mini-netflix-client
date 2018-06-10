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
      <h1 class="is-size-1  has-text-weight-bold">{{ movie.title || 'Black Panther' }}</h1>
    </div>
  </div>
</template>
​
<script>
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

    watch: {
      movie(newMovie, oldMovie) {
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

      this.player.source(this.movie.trailer || 'mini-netflix/trailers/Marvel_Studios_Black_Panther_-_Official_Trailer_nmrtr7');

      document.hidden && this.player.mute();
      window.onfocus = () => this.player.unmute();
      window.onblur = () => this.player.mute();
    }
  }
</script>
​
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