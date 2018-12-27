<template>
  <div class="print-box">
    <header class="header">
      <i class="cubeic-back" @click="$router.go(-1)"></i>
      <i class="cubeic-close"></i>
      <i class="cubeic-more"></i>
    </header>
    <div class="choose-title">请选择你的身份</div>
    <div class="code">
      <img src="./log1.png" alt="" width="100%">
      <p>我是患者</p>
    </div>
    <div class="code">
      <img src="./log2.png" alt="" width="100%">
      <p>我是医生</p>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .print-box{
    height 100vh
    .header{
      background-color #f1f1f1
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
    h2{
      font-size 1.5rem
      font-weight bold
      display block
      line-height 16px
      border-left 5px solid #de7eb7
      padding-left 10px
      color #333
      margin 40px 0 30px 0
    }
    .choose-title{
      font-size 1.25rem
      color #333
      line-height 40px
      padding 20px 0 10px 17px
    }
    .print-t{
      font-size 1.1rem
      color #de7eb7
      line-height 30px
      padding 20px
    }
    .code{
      width 40%
      margin 0 auto
      padding 40px 0 0 0
      text-align center
      color #666
      line-height 40px
      font-size 1.25rem
    }
  }
</style>

<script type="text/ecmascript-6">
// import http from '../../api/http'
// import api from '../../api/api'
import footer from '../../components/footer/Footer'

export default {
  data () {
    return {
    }
  },
  created () {
  },
  computed: {},
  methods: {
  },
  components: {
    'v-footer': footer
  }
}
</script>
