<template>
  <a :class="[$style.root, 'sk-sidebar-button']">
    <i class="fas fa-cog"></i>
  </a>
</template>


<script>
  export default {
    name: 'sk-settings-button',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>