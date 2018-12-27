<template>
  <div class="setp-box">
    <header class="header">
      <i class="cubeic-back" @click="$router.go(-1)"></i>
      <i class="cubeic-close"></i>
      <i class="cubeic-more"></i>
    </header>
    <div class="setp-succss">
      <img src="./right.png" alt="" width="100%">
      <p>密码修改成功！</p>
    </div>
    <a class="submit" href="" >重新登录</a>
    <v-footer></v-footer>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .setp-box{
    height 100vh
    .header{
      height 50px
      border-bottom 1px solid #DDD
      position relative
      background-color #f1f1f1
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
    .setp-input{
      background-color #fff
      .setp-item{
        height 60px
        padding 8px 0 3px 0
        border-bottom 1px solid #DDD
        margin 0 20px
        &:last-child{
          border-bottom 0
        }
        i{
          color #DDD
          font-size 1.5rem
          display inline-block
          margin 13px 10px 0 0
          float left
        }
        input{
          height 50px
          width calc(100% - 50px)
          font-size 1.1rem
          color #666
          &:focus{
            outline none
          }
          &::placeholder{
            color #999
          }
        }
      }
    }
    .submit{
      display block
      text-align center
      border 0
      width 90%
      margin 50px auto 0 auto
      height 50px
      line-height 50px
      background-color #1689f4
      border-radius 5px
      font-size 1.1rem
      color #FFF
      &:focus{
        outline none
      }
    }
    .setp-succss{
      width 40%
      margin 0 auto
      padding 40px 0 0 0
      text-align center
      color #666
      line-height 40px
      font-size 1.25rem
    }
    .go-reg{
      font-size 1.1rem
      color #999
      text-align center
      padding 30px 0
      a{
        color #dd7eb6
      }
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
