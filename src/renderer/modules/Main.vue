<template>
  <div :class="$style.root">
    <div :class="$style.grid">
      <div :class="[$style.panel, $style.frame]">
        <sk-frame></sk-frame>
      </div>
      <div :class="[$style.panel, $style.temp]">
      </div>
    </div>
  </div>
</template>


<script>
  import Frame from '@/modules/frame/Frame'

  export default {
    name: 'sk-main',
    components: {
      'sk-frame': Frame
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .grid {
    width: 100vw;
    height: 100vh;
    display: grid;
    align-items: stretch;
    grid-template-columns: auto;
    grid-template-rows: $SIZE_FRAME auto;
    grid-template-areas:
      "frame"
      "temp"
  }

  .panel {
    display: flex;
    align-items: center;
    & > div {
      width: 100%;
      height: 100%;
    }
  }

  .frame {
    grid-area: frame;
  }
  .temp {
    grid-area: temp;
  }
</style>
