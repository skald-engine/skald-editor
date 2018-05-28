<template>
  <a href="#"
     :class="[$style.root, 'sk-frame-button']"
     v-on:click="action">
    <i class="fas fa-times"></i>
  </a>
</template>


<script>
  const { remote } = require('electron')

  export default {
    name: 'sk-close-button',
    methods: {
      action: function(event) {
        remote.BrowserWindow.getFocusedWindow().close()
      }
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>