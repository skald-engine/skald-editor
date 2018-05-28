<template>
  <a :class="[$style.root, 'sk-sidebar-button']">
    <i class="fas fa-clock"></i>
  </a>
</template>


<script>
  export default {
    name: 'sk-performance-button',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>