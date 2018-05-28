<template>
  <a href="#"
     :class="[$style.root, 'sk-frame-button']"
     v-on:click="action">
    <i class="fas fa-window-minimize"></i>
  </a>
</template>


<script>
  const { remote } = require('electron')

  export default {
    name: 'sk-minimize-button',
    methods: {
      action: function(event) {
        remote.BrowserWindow.getFocusedWindow().minimize()
      }
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>