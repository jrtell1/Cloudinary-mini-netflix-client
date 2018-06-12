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
              <input class="input" :class="{ 'is-success': isStep1Valid }" type="text" placeholder="Enter the movie title..." v-model="title">
            </div>
          </div>
        </div>
      </div>

      <transition name="height">
      <div class="columns is-mobile" v-show="isStep1Valid">
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
            <transition name="height">
              <div class="banner-upload-area" v-show="!isStep2Valid"></div>
            </transition>
          </div>
        </div>
      </div>
      </transition>

      <transition name="height">
      <div class="columns is-mobile" v-show="isStep2Valid && isStep1Valid">
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
            <transition name="height">
              <div class="trailer-upload-area" v-show="!isStep3Valid"></div>
            </transition>
          </div>
        </div>
      </div>
      </transition>

      <transition name="height">
      <div class="columns is-centered is-mobile" v-show="isAllStepsValid">
        <div class="column is-narrow">
          <button class="button is-danger" :disabled="!isAllStepsValid">Submit</button>
        </div>
      </div>
      </transition>
    </form>
  </sweet-modal>
</template>
<script>
  import config from '../config'
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

    mounted() {
      const options = {
        cloud_name: config.cloudinary.cloudName,
        upload_preset: config.cloudinary.uploadPreset,
        multiple: false,
        max_files: 1,
        theme: 'white',
        // stylesheet: '#cloudinary-overlay.modal { background-color: transparent }'
      };

      this.mountBannerUploadWidget(options);
      this.mountTrailerUploadWidget(options);
    },

    methods: {
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

        if (data.title && this.banner && this.trailer) {
          this.$emit('handle-upload', data);
        }
      },

      /**
       * Mounts an upload widget to the banner container.
       *
       * @param options
       */
      mountBannerUploadWidget(options) {
        const modifiedOptions = {
          inline_container: '.banner-upload-area',
          ...options
        };

        // eslint-disable-next-line
        cloudinary.openUploadWidget(modifiedOptions, (error, result) => {
          this.banner = result[0].public_id;
        });
      },

      /**
       * Mounts an upload widget to the trailer container.
       *
       * @param options
       */
      mountTrailerUploadWidget(options) {
        const modifiedOptions = {
          inline_container: '.trailer-upload-area',
          ...options
        };

        // eslint-disable-next-line
        cloudinary.openUploadWidget(modifiedOptions, (error, result) => {
          this.trailer = result[0].public_id;
        });
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
        border: 2px solid #d81f26;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding: 0 11px;
        font-size: 25px;
        font-weight: bold;
    }

    .check {
        margin-top: 10px;
        font-size: 25px;
        color: green;
    }

    .height-enter-active, .height-leave-active {
        transition: all .5s;
        max-height: 520px;
    }
    .height-enter, .height-leave-to {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
    }
</style>