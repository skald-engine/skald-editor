<template>
  <div class="sk-root">
    <div class="sk-header"></div>
    <div class="sk-content"></div>
  </div>
</template>

<script>
  export default {
    name: 'info-panel',
    components: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "@/style/index.scss";

  $BACKGROUND: $COLOR_UI_6;

  .sk-root {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: $BACKGROUND;
  }
  .sk-header {
    display: inline-flex;
    height: $SIZE_HEADER;
    flex-grow: 0;
    flex-shrink: 0;
    background: darken($BACKGROUND, 5%);
  }
  .sk-content {
    flex-grow: 1;
    flex-shrink: 1;
  }
</style>