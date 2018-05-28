<template>
  <div :class="$style.root">
  </div>
</template>


<script>
  export default {
    name: 'sk-statusbar',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $COLOR_UI_2;
    padding: 0 5px;
  }
</style>