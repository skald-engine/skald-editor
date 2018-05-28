<template>
  <a :class="[$style.root, 'sk-sidebar-button']">
    <i class="fas fa-list"></i>
  </a>
</template>


<script>
  export default {
    name: 'sk-resources-button',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>