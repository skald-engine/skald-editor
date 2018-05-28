<template>
  <a :class="[$style.root, 'sk-frame-button']" href="#">
    <i class="fas fa-times"></i>
  </a>
</template>


<script>
  export default {
    name: 'sk-close-button',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>