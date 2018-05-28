<template>
  <a :class="[$style.root, 'sk-sidebar-button']">
    <i class="fas fa-bug"></i>
  </a>
</template>


<script>
  export default {
    name: 'sk-tasks-button',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
  }
</style>