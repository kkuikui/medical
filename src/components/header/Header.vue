<template>
  <header class="header">
    <h1>Button</h1>
    <i class="cubeic-back"></i>
    <i class="cubeic-close"></i>
    <i class="cubeic-more"></i>
  </header>
</template>

<style lang="stylus">
  .header{
    height 50px
    border-bottom 1px solid #DDD
    position relative
    .cubeic-back{
      position absolute
      top 10px
      left 5px
      font-size 1.75rem
      color #333
    }
    .cubeic-close{
      position absolute
      top 10px
      left 50px
      font-size 1.75rem
      color #333
      font-weight bold
    }
    .cubeic-more{
      position absolute
      top 10px
      right 10px
      font-size 1.75rem
      color #333
    }
    h1{
      font-size 1.5rem
      text-align center
      line-height 50px
      color #333
    }
  }
</style>
