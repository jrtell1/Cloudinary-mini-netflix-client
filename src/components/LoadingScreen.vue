<template>
    <div class="loading-screen">
        <slot class="logo"></slot>
        <div class="loader"></div>
    </div>
</template>

<script>
  export default {
    name: 'loadingscreen'
  }
</script>

<style scoped>
    .loading-screen {
        background: #000;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        z-index: 50;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .loader {
        margin: 20px;
        -webkit-animation: spin 800ms cubic-bezier(.17,.67,.83,.67) infinite;
        animation: spin 800ms cubic-bezier(.17,.67,.83,.67) infinite;
        border: 3px solid #ddd;
        border-top: 3px solid #d81f26;
        border-radius: 50%;
        height: 50px;
        width: 50px;
    }

    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>
