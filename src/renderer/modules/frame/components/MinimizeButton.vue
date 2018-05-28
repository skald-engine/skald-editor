<template>
  <a :class="[$style.root, 'sk-frame-button']" href="#">
    <i class="fas fa-window-minimize"></i>
  </a>
</template>


<script>
  export default {
    name: 'sk-minimize-button',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>