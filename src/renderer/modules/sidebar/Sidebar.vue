<template>
  <div :class="$style.root">
    ok
  </div>
</template>


<script>
  export default {
    name: 'sk-sidebar',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
    display: flex;
    justify-content: center;
    background: $COLOR_UI_3;
    padding: 0 5px;
  }
</style>