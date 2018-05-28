<template>
  <a :class="[$style.root, 'sk-sidebar-button']">
    <i class="fas fa-th-large"></i>
  </a>
</template>


<script>
  export default {
    name: 'sk-projects-button',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>