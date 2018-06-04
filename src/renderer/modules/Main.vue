<template>
  <div :class="$style.root">

    <div :class="$style.menubar">
      <sk-menubar/>
    </div>

    <div :class="$style.container">
      <div :class="$style.left">
        <sk-infopanel/>
      </div>
      <div :class="$style.right">
        <sk-gamepanel/>
      </div>
    </div>

  </div>
</template>


<script>
  import Menubar from '@/modules/menubar/Menubar'
  import Gamepanel from '@/modules/gamepanel/Gamepanel'
  import Infopanel from '@/modules/infopanel/Infopanel'

  export default {
    name: 'sk-main',
    components: {
      'sk-menubar': Menubar,
      'sk-gamepanel': Gamepanel,
      'sk-infopanel': Infopanel,
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
    width: 100vw;
    height: 100vh;
    text-align: center;
  }

  .container {
    text-align: left;
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    // height: calc(1'00% - #{($SIZE_MENUBAR * 4)});
    max-width: $SIZE_CONTAINER;
    // padding: ($SIZE_MENUBAR * 2) 5px;
  }

  .left {
    width: 50%;
    flex-grow: 1;
    flex-shrink: 1;
    border-right: 1px solid $COLOR_UI_2;
    padding: ($SIZE_MENUBAR * 2) 10px;
  }
  .right {
    width: 50%;
    flex-grow: 1;
    flex-shrink: 1;
    padding: ($SIZE_MENUBAR * 2) 10px;
  }

  .menubar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: $SIZE_MENUBAR;
  }

</style>
