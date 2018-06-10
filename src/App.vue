<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png" alt="Netflix" width="112" height="28">
          </a>
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-menu">
                <div class="navbar-end">
                  <a class="button navbar-item" @click="showModal = true">Upload</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <video-player
      :cloudinary-instance="cloudinaryInstance"
      :movie="movie"
    ></video-player>

    <div class="container">
      <h2 class="is-size-3">Movies</h2>
      <video-list
        :cloudinary-instance="cloudinaryInstance"
        :movies="movies"
        @choose-movie="updatePlayer"
      ></video-list>
    </div>

    <upload-modal
      :showModal="showModal"
      @handle-upload="uploadToServer"
    ></upload-modal>
  </div>
</template>

<script>
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
        movie: {},
        movies: [],
        url: 'https://wt-3ab4f5008e0b86a1e53e234e9d9ee5aa-0.sandbox.auth0-extend.com/server/movies',
        showModal: false
      }
    },

    created() {
      this.cloudinaryInstance = window.cloudinary.Cloudinary.new({
        cloud_name: 'jrtell',
        secure: true
      });

      axios.get(this.url).then(response => {
        this.movies = response.data;
      });
    },

    methods: {
      updatePlayer(movie) {
        this.movie = movie;
      },

      uploadToServer(data) {
        axios.post(this.url, data).then(res => {
          this.movies = [...this.movies, res.data];
          this.showModal = false;
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #e5e5e5;
    background-color: #000;
    padding-top: 30px;
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
</style>
