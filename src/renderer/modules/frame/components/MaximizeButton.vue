<template>
  <a href="#"
     :class="[$style.root, 'sk-frame-button']"
     v-on:click="action">
    <i class="fas fa-window-maximize"></i>
  </a>
</template>


<script>
  const { remote } = require('electron')

  export default {
    name: 'sk-maximize-button',
    methods: {
      action: function(event) {
        let win = remote.BrowserWindow.getFocusedWindow()
        if (win.isMaximized()) {
          win.unmaximize()
        } else {
          win.maximize()
        }
      }
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>