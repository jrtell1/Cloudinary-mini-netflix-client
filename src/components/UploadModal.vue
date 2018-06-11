<template>
  <sweet-modal modal-theme="dark" overlay-theme="dark" ref="modal" v-on="$listeners">
    <form @submit.prevent="handleUpload()" class="has-text-left">
      <div class="field">
        <label class="label has-text-white">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Enter the movie title..." v-model="title">
        </div>
      </div>

      <div class="field">
        <label class="label has-text-white">Upload Banner</label>
        <button class="button" @click="startUpload('banner')">Upload</button>
        <span class="has-text-white">{{ banner }}</span>
      </div>

      <div class="field">
        <label class="label has-text-white">Upload Video</label>
        <button class="button" @click="startUpload('trailer')">Upload</button>
        <span class="has-text-white">{{ trailer }}</span>
      </div>

      <button class="button is-danger">Submit</button>
    </form>
  </sweet-modal>
</template>
<script>
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

    watch: {
      showModal(value) {
        value ? this.$refs.modal.open() : this.$refs.modal.close();
      }
    },

    methods: {
      /**
       * Uploads resource to Cloudinary, acceptable types are
       * 'banner' and 'trailer'.
       *
       * @param {String} type
       */
      startUpload(type) {
        // eslint-disable-next-line
        cloudinary.openUploadWidget(
          { cloud_name: 'jrtell', upload_preset: 'v63gpw1l' },
          (error, result) => {
            type === 'banner'
              ? (this.banner = result[0].public_id)
              : (this.trailer = result[0].public_id);
          }
        );
      },

      /**
       * Emits 'handle-upload' event, but only when all resources
       * has been uploaded and set.
       */
      handleUpload() {
        const data = {
          title: this.title,
          banner: this.banner,
          trailer: this.trailer
        };
        if (data.title && this.banner && this.trailer)
          this.$emit('handle-upload', data);
      }
    }
  };
</script>