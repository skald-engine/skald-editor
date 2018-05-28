<template>
  <ul :class="$style.root" href="#">
    <li><a href="#">Skald</a></li>
    <li><a href="#">Edit</a></li>
    <li><a href="#">View</a></li>
    <li><a href="#">Help</a></li>
  </ul>
</template>


<script>
  export default {
    name: 'sk-menu',
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";

  .root {
    -webkit-app-region: no-drag;
    -webkit-user-drag: none;
    user-select: none;
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;

    & * {
      -webkit-app-region: no-drag;
      -webkit-user-drag: none;
      user-select: none;
    }

    li {
      display: inline-block;
      padding: 0;
      margin: 0;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: $SIZE_FRAME_ITEM;
        text-transform: uppercase;
        font-weight: 300;
        padding: 0 5px;

        color: $COLOR_UI_5;
        background: fade-out($COLOR_UI_5, 1);
        font-size: 12px;
        transition: all $TRANSITION_TIME ease;

        &:hover {
          text-decoration: none;
          color: $COLOR_UI_5;
          background: fade-out($COLOR_UI_5, .9);
          text-shadow: 0 0 1px $COLOR_UI_5;
        }
      }
    }
  }
</style>