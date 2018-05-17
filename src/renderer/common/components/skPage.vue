<template>
  <div class="sk-page">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'sk-page'
  }
</script>

<style lang="scss" scoped>
  .sk-page {
    width    : 100vw;
    height   : 100vh;
    overflow : auto;
  }
</style>
