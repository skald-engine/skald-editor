<template>
  <a :class="[$style.root, 'sk-frame-button']" href="#">
    <i class="fas fa-window-maximize"></i>
  </a>
</template>


<script>
  export default {
    name: 'sk-maximize-button',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>