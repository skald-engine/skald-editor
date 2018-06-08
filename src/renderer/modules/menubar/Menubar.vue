<template>
  <div :class="$style.root">
    <div :class="$style.container">
      
      <div :class="$style.left">
        <ul :class="$style.menu">
          <li v-for="view in views">
            <a href="#"
               :class="{[$style.active]: selected === view.id}"
               v-on:click="changeTab(view.id)">
              <span v-html="view.label"></span>
            </a>
          </li>
        </ul>
      </div>

      <div :class="$style.center">
      </div>

      <div :class="$style.right">
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'sk-menubar',
    data: function() {
      return {
        views: [
          {id: 'settings', label: '<i class="fas fa-cog"></i>'},
          {id: 'projects', label: 'Projects'},
          {id: 'objects', label: 'Objects'},
          {id: 'resources', label: 'Resources'},
          {id: 'display', label: 'Display'}
        ]
      }
    },
    computed: {
      selected: function() {
        return this.$store.state.gui.menubar.selected
      }
    },
    methods: {
      changeTab: function(value) {
        this.$store.commit('gui.menubar.change_tab', value);
      },
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";
  
  $MENU_ITEM_SPACING: ($SIZE_MENUBAR - $SIZE_MENUBAR_ITEM)/2;

  .root {
    width: 100%;
    height: 100%;
    background: $COLOR_UI_2;
    text-align: center;
  }

  .container {
    display: flex;
    width: 100%;
    max-width: $SIZE_CONTAINER;
    margin: 0 auto;
    padding: 0;
  }

  .left {}
  .center {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .right {}

  .menu {
    display: inline-block;
    padding: 0;
    margin: 0;
    cursor: default;

    li {
      display: inline;
      padding: 0;
      margin: 0;

      a {
        @extend %FONT_SYSTEM;
        @extend %TRANSITION_ALL;

        display: inline-flex;
        color: $COLOR_GRAY_2;
        height: $SIZE_MENUBAR_ITEM;
        padding: 0 10px;
        margin-top: $MENU_ITEM_SPACING;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        border-bottom: 1px solid transparent;

        &:hover {
          color: $COLOR_GRAY_2;
          background: $HOVER_HIGHLIGHT;
          text-decoration: none;
        }
      }

      .active {
        cursor: default;
        border-bottom: 1px solid $COLOR_UI_ACCENT;

        &:hover {
          background: transparent;
        }
      }
    }
  }




</style>