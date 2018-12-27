<template>
  <div class="login-box">
    <header class="header">
      <i class="cubeic-back" @click="$router.go(-1)"></i>
      <i class="cubeic-close"></i>
      <i class="cubeic-more"></i>
    </header>
    <h2>用户登录</h2>
    <div class="login-input">
      <div class="login-item">
        <i class="cubeic-person"></i>
        <input type="text" placeholder="请输入用户名/电话号码">
      </div>
      <div class="login-item">
        <i class="cubeic-lock"></i>
        <input type="password" placeholder="请输入登录密码">
      </div>
    </div>
    <button class="submit">登录</button>
    <div class="go-reg">
      还没有账号？<a href="">请注册</a>
    </div>
    <div class="ques">
      <p>使用以下社交账号快速登录</p>
      <div class="ques-box">
        <a href=""><i class="icon-wx"></i></a>
        <a href=""><i class="icon-qq"></i></a>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .login-box{
    height 100vh
    background-color #f1f1f1
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
    .login-input{
      background-color #fff
      .login-item{
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
      border 0
      width 90%
      margin 50px auto 0 auto
      height 50px
      background-color #dd7eb6
      border-radius 50px
      font-size 1.1rem
      color #FFF
      box-shadow 0 10px 10px rgba(221,126,182,0.3)
      &:focus{
        outline none
      }
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
    .ques{
      padding 40px 0 0 0
      text-align center
      p{
        font-size 1.1rem
        color #999
        line-height 30px
      }
      .ques-box{
        padding 20px 0
        a{
          display inline-block
          width 35px
          height 35px
          padding 10px
          background #FFF
          border-radius 50%;
          margin 0 20px
          i{
            display inline-block
            width 35px
            height 35px
            background url(icon_share.png) no-repeat
            background-size 35px auto
          }
          .icon-qq{
            background-position 0 -35px
          }
        }
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
