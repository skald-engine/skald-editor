<template>
  <div :class="$style.root" href="#">
    lorem project.spx
  </div>
</template>


<script>
  export default {
    name: 'sk-project-label',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
    display: inline-block;
    align-items: center;
    font-size: 12px;
    padding-right: 5px;
    color: fade-out($COLOR_UI_4, 0.4);
  }
</style>