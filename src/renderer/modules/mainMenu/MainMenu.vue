<template>
  <div class="sk-root">
    <a class="sk-item active" href="#" v-vk-tooltip.right="'Projects'">
      <i class="fas fa-circle-notch"></i>
    </a>
    <a class="sk-item" href="#" v-vk-tooltip.right="'Game Objects'">
      <i class="fas fa-th"></i>
    </a>
    <a class="sk-item" href="#" v-vk-tooltip.right="'Resources'">
      <i class="far fa-images"></i></a>
    <a class="sk-item" href="#" v-vk-tooltip.right="'Display List'">
      <i class="fas fa-sitemap"></i>
    </a>
    <a class="sk-item" href="#" v-vk-tooltip.right="'Perfomance'">
      <i class="fas fa-clock"></i>
    </a>
    <a class="sk-item" href="#" v-vk-tooltip.right="'Building'">
      <i class="fas fa-wrench"></i>
    </a>
    <div class="sk-spacing"></div>
    <a class="sk-item" href="#" v-vk-tooltip.right="'Settings'">
      <i class="fas fa-cog"></i>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'main-menu',
    components: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "@/style/index.scss";
  
  $BACKGROUND: $COLOR_UI_1;
  $FOREGROUND: $COLOR_WHITE;

  .sk-root {
    height: 100%;
    background: $BACKGROUND;
    display: flex;
    flex-direction: column;
  }
  .sk-item {
    display: inline-flex;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    height: $SIZE_MENU_ITEM;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: $FOREGROUND;

    transition: .3s ease all;

    &.active {
      background: darken($BACKGROUND, 10%);
    }
    &:hover:not(.active) {
      background: lighten($BACKGROUND, 5%);
      color: lighten($FOREGROUND, 5%);
      text-shadow: 0px 0px 5px fade-out(lighten($FOREGROUND, 5%), .1);
    }
  }
  .sk-spacing {
    flex-grow: 1;
    flex-shrink: 1;
  }
</style>