<template>
  <div :class="$style.root">
    {{name}} ({{enabled}})
  </div>
</template>


<script>
  export default {
    name: 'sk-manager-object-summary',

    props: {
      name: String,
      enabled: Boolean
    }
  }
</script>


<style lang="scss" module>
  @import "@/style/index.scss";
  
  .root {
    width: 100%;
    height: 100%;
  }
</style>