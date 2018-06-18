<template>
  <sweet-modal modal-theme="dark" overlay-theme="dark" ref="modal" v-on="$listeners">
    <form @submit.prevent="emitUpload()" class="has-text-left">
      <div class="columns is-mobile">
        <div class="column is-narrow step-container">
          <p class="step">1</p>
          <p class="check">
            <span class="icon is-small is-right" v-show="isStep1Valid">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="column">
          <div class="field">
            <label class="label has-text-white">Name</label>
            <div class="control has-icons-right">
              <input
                class="input"
                :class="{ 'is-success': isStep1Valid }"
                type="text"
                placeholder="Enter the movie title..."
                v-model="title"
              >
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-mobile">
        <div class="column is-narrow step-container">
          <p class="step">2</p>
          <p class="check">
            <span class="icon is-small is-right" v-show="isStep2Valid">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="column">
          <div class="field">
            <label class="label has-text-white">Upload Banner</label>
            <span class="has-text-white">{{ banner }}</span>
            <div class="file">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" @change="uploadBanner">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Choose an image</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-mobile">
        <div class="column is-narrow step-container">
          <p class="step">3</p>
          <p class="check">
            <span class="icon is-small is-right" v-show="isStep3Valid">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="column">
          <div class="field">
            <label class="label has-text-white">Upload Video</label>
            <span class="has-text-white">{{ trailer }}</span>
            <div class="file">
              <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Choose a video</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-centered is-mobile">
        <div class="column is-narrow">
          <button class="button is-danger" :class="{ 'is-loading': isProcessingUpload }" :disabled="!isAllStepsValid">
            Submit
          </button>
        </div>
      </div>
    </form>
  </sweet-modal>
</template>

<script>
  import config from '../config'
  import axios from 'axios'
  import { SweetModal, SweetModalTab } from 'sweet-modal-vue';

  export default {
    name: 'uploadmodal',

    components: {
      SweetModal,
      SweetModalTab
    },

    props: {
      showModal: {
        type: Boolean,
        required: true
      },
      isProcessingUpload: {
        type: Boolean,
        required: false
      }
    },

    data() {
      return {
        title: '',
        banner: null,
        trailer: null,
      }
    },

    computed: {
      isStep1Valid() {
        return this.title !== '';
      },

      isStep2Valid() {
        return this.banner !== null;
      },

      isStep3Valid() {
        return this.trailer !== null;
      },

      isAllStepsValid() {
        return this.isStep1Valid && this.isStep2Valid && this.isStep3Valid;
      }
    },

    watch: {
      showModal(value) {
        value ? this.$refs.modal.open() : this.$refs.modal.close();
      }
    },

    methods: {
      /**
       * @param event
       */
      uploadBanner(event) {
        if (!event.target.files[0]) return;

        const formData = new FormData();
        formData.append('upload_preset', config.cloudinary.cloudName);
        formData.append('file', event.target.files[0]);

        this.uploadFile(formData);
      },

      /**
       * @param {Object} formData
       */
      async uploadFile(formData) {
        try {
          const url = 'https://api.cloudinary.com/v1_1/' + config.cloudinary.cloudName + '/image/upload';
          const { data } = await axios.post(url, formData);

          return data;
        } catch (error) {
          return false;
        }
      },

      /**
       * Emits 'handle-upload' event, but only when all resources
       * has been uploaded and set.
       */
      emitUpload() {
        const data = {
          title: this.title,
          banner: this.banner,
          trailer: this.trailer
        };

        if (this.isAllStepsValid) {
          this.$emit('handle-upload', data);
        }
      }
    }
  };
</script>

<style scoped>
  .step-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .step {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #d81f26;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 25px;
    font-weight: bold;
  }

  .check {
    margin-top: 10px;
    font-size: 25px;
    color: green;
  }
</style>