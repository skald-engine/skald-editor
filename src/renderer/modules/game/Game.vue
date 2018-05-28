<template>
  <div :class="$style.root">
    <div :class="$style.temp"></div>
  </div>
</template>


<script>
  export default {
    name: 'sk-game',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
    display: flex;
    justify-content: center;
    background: $COLOR_UI_5;
  }

  .temp {
    display: flex;
    height: 50px;
    width: 100%;
    background: $COLOR_UI_2;
  }
</style>