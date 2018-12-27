<template>
  <div id="app" class="cube-page cube-view button-view">
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import './common/stylus/mixin.styl';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
