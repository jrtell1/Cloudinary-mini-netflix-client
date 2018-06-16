<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png" alt="Netflix" width="112" height="28">
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-dark" @click="showModal = true">
                    <span class="icon">
                      <i class="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span>Upload</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-dark">
                    <social-sharing
                      title="Build a Mini Netflix from scratch"
                      url="https://cloudinary.gitbooks.io/build-a-mini-netflix-clone-with-vue/content"
                      inline-template
                    >
                      <network network="twitter">
                        <i class="fab fa-twitter"></i>
                        Share
                      </network>
                    </social-sharing>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <video-player
      :cloudinary-instance="cloudinaryInstance"
      :movies="movies"
      :active-movie="activeMovie"
    ></video-player>

    <div class="container">
      <h2 class="is-size-3">Movies</h2>
    </div>
    <video-list
      :cloudinary-instance="cloudinaryInstance"
      :movies="movies"
      @choose-movie="updatePlayer"
    ></video-list>

    <upload-modal
      :show-modal="showModal"
      :is-processing-upload="isUploading"
      @handle-upload="uploadToServer"
      @close="showModal = false"
    ></upload-modal>
  </div>
</template>

<script>
  import config from './config'
  import axios from 'axios'
  import VideoPlayer from './components/VideoPlayer'
  import VideoList from './components/VideoList'
  import UploadModal from './components/UploadModal'

  export default {
    name: 'app',

    components: {
      VideoPlayer,
      VideoList,
      UploadModal
    },

    data() {
      return {
        movies: [],
        activeMovie: 0,
        showModal: false,
        isUploading: false
      }
    },

    created() {
      this.cloudinaryInstance = window.cloudinary.Cloudinary.new({
        cloud_name: config.cloudinary.cloudName,
        secure: true
      });

      this.fetchMovies();
    },

    methods: {
      /**
       * Fetches movies asynchronously and updates movies list.
       */
      async fetchMovies() {
        const { data: movies } = await axios.get(config.api.url + '/movies');
        this.movies = movies;
      },

      /**
       * Sets new movie for the video player.
       *
       * @param {Number} movieIndex
       */
      updatePlayer(movieIndex) {
        this.activeMovie = movieIndex;
      },

      /**
       * Uploads new movie to server.
       *
       * @param data
       */
      uploadToServer(data) {
        this.isUploading = true;

        axios.post(config.api.url + '/movies', data).then(response => {
          this.movies = [...this.movies, response.data];
          this.showModal = false;
          this.isUploading = false;
        })
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #e5e5e5;
    background-color: #000;
    padding-top: 80px;
  }

  .navbar {
    background-color: transparent;
    z-index: 2;
    padding: 30px 0;
  }

  .navbar-item {
    height: 25px;
    width: auto;
  }

  .navbar-brand a:hover {
    background-color: transparent;
  }
</style>
