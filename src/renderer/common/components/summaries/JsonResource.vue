<template>
  <div :class="$style.root">
    {{name}}
  </div>
</template>


<script>
  export default {
    name: 'sk-json-resource-summary',

    props: {
      name: String
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