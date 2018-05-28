<template>
  <div :class="$style.root">
    <div :class="$style.temp"></div>
  </div>
</template>


<script>
  export default {
    name: 'sk-infobar',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
    display: flex;
    justify-content: center;
    background: $COLOR_UI_4;
  }

  .temp {
    display: flex;
    height: 40px;
    width: 100%;
    background: $COLOR_UI_2;
  }
</style>