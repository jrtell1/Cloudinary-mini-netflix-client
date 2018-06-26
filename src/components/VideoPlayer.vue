<template>
  <div class="player-bg">
    <video
      id="trailer"
      autoplay
      controls
      class="cld-video-player player-bg-video">
    </video>
  </div>
</template>

<script>
  export default {
    name: 'videoplayer',

    props: {
      cloudinaryInstance: {
        required: true
      },
      movies: {
        type: Array
      },
      activeMovieIndex: {
        type: Number,
        default: 0
      }
    },

    computed: {
      playlist() {
        return this.movies.map(movie => {
          return {
            publicId: movie.trailer,
            info: {
              title: movie.title
            }
          }
        });
      }
    },

    watch: {
      playlist(newPlaylist) {
        this.setPlaylist(newPlaylist);
      },

      activeMovieIndex(index) {
        this.player.playlist().playAtIndex(index);
      }
    },

    mounted() {
      this.player = this.cloudinaryInstance.videoPlayer('trailer', {
        transformation: {
          crop: 'crop',
          height: 500,
          aspect_ratio: '16:9',
          x: 100,
          y: 100,
          gravity: 'center'
        }
      });

      this.player.volume(localStorage.getItem('playerVolume') || 0.4);
      this.player.on('volumechange', this.onVolumeChanged);
      this.player.on('sourcechanged', this.onSourceChanged);
      this.setPlaylist(this.playlist);

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
      },

      /**
       * If movie is changed from within the player, emit the new index.
       */
      onSourceChanged() {
        this.$emit('choose-movie', this.player.playlist().currentIndex());
      },

      /**
       * Set new playlist.
       *
       * @param {Array} newList
       */
      setPlaylist(newList) {
        if (!newList || newList.length < 1) return; // We can't set an empty array as playlist

        this.player.playlist(newList, { autoAdvance: true, repeat: true, presentUpcoming: 8 });
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
</style>