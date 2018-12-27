<template>
  <div class="home">
    <!-- <p><a href="#/recording">分享</a></p>
    <p><a href="#/them">分享-加按钮</a></p>
    <p><a href="#/login">登录</a></p>
    <p><a href="#/registered">注册</a></p>
    <p><a href="#/about">关于</a></p>
    <p><a href="#/print">二维码</a></p>
    <p><a href="#/share">分享</a></p>
    <p><a href="#/record">检查记录</a></p>
    <p><a href="#/choose">选择身份</a></p>
    <p><a href="#/forget">忘记密码</a></p>
    <p><a href="#/setpassword">密码修改成功！</a></p>
    <p><a href="#/skill">添加标签</a></p>
    <p><a href="#/regsuccess">注册成功</a></p> -->
    <header class="header">
      <i class="cubeic-back" @click="$router.go(-1)"></i>
      <i class="cubeic-close"></i>
      <i class="cubeic-more"></i>
    </header>
    <div class="home-scrollimg">
      <cube-slide ref="slide" :data="items" @change="changePage">
        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img :src="item.image" width="100%">
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
    <div class="home-menu">
      <a class="home-i">
        <i class="ico"></i>
        <span>云胶片</span>
      </a>
      <a class="home-i">
        <i class="ico ico1"></i>
        <span>影像问诊</span>
      </a>
      <a class="home-i">
        <i class="ico ico2"></i>
        <span>预约复检</span>
      </a>
      <a class="home-i">
        <i class="ico ico3"></i>
        <span>检查记录</span>
      </a>
    </div>
    <div class="home-ht">
      <div class="home-hti">
        <div class="home-htl">
          <h2>推荐医师</h2>
          <p>资深医师为您提供专业解答</p>
        </div>
        <div class="home-htr">
          <img src="./bg1.png" width="100%" alt="">
        </div>
      </div>
      <div class="home-hti">
        <div class="home-htl">
          <h2>医师排行榜</h2>
          <p>国内资深名医进驻提供专业的服务</p>
        </div>
        <div class="home-htr">
          <img src="./bg2.png" width="100%" alt="">
        </div>
      </div>
    </div>
    <div class="home-list">
      <h2>历史问诊记录</h2>
      <div class="home-litem">
        <div class="home-img"><img src="./doctor.png" width="100%" alt=""></div>
        <div class="home-txt">
          <h3>周映君</h3>
          <p>番禺中心医院/内科</p>
          <p>最近咨询时间：2018-12-20 18:24</p>
        </div>
        <a class="home-btn">
          <img src="./wx.png" width="100%" alt="">
        </a>
      </div>
      <div class="home-litem">
        <div class="home-img"><img src="./doctor.png" width="100%" alt=""></div>
        <div class="home-txt">
          <h3>周映君</h3>
          <p>番禺中心医院/内科</p>
          <p>最近咨询时间：2018-12-20 18:24</p>
        </div>
        <a class="home-btn">
          <img src="./wx.png" width="100%" alt="">
        </a>
      </div>
      <div class="home-litem">
        <div class="home-img"><img src="./doctor.png" width="100%" alt=""></div>
        <div class="home-txt">
          <h3>周映君</h3>
          <p>番禺中心医院/内科</p>
          <p>最近咨询时间：2018-12-20 18:24</p>
        </div>
        <a class="home-btn">
          <img src="./wx.png" width="100%" alt="">
        </a>
      </div>
      <div class="home-litem">
        <div class="home-img"><img src="./doctor.png" width="100%" alt=""></div>
        <div class="home-txt">
          <h3>周映君</h3>
          <p>番禺中心医院/内科</p>
          <p>最近咨询时间：2018-12-20 18:24</p>
        </div>
        <a class="home-btn">
          <img src="./wx.png" width="100%" alt="">
        </a>
      </div>
    </div>
    <div class="home-nav">
      <a href="" class="active">
        <i class="ic1"></i>
        <span>首页</span>
      </a>
      <a href="">
        <i class="ic2"></i>
        <span>消息</span>
      </a>
      <a href="">
        <i class="ic3"></i>
        <span>个人中心</span>
      </a>
    </div>
  </div>
</template>

<style lang="stylus">
  .home{
    min-height 100vh
    background-color #f2f2f2
    padding-bottom 80px
    position relative
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
    .home-scrollimg{
      height 160px
    }
    .home-menu{
      background-color #FFF
      height 120px
      margin-bottom 16px
      .home-i{
        display block
        width 25%
        height 100px
        text-align center
        line-height 40px
        font-size 1.1rem
        float left
        padding-top 20px
        color #666
        .ico{
          width 60px
          height 60px
          display block
          margin 0 auto
          background url(./icon.png) no-repeat
          background-size 100% auto
        }
        .ico1{
          background-position 0 -60px
        }
        .ico2{
          background-position 0 -120px
        }
        .ico3{
          background-position 0 -180px
        }
      }
    }
    .home-ht{
      height 110px
      background-color #FFF
      margin-bottom 16px
      .home-hti{
        width 50%
        height 110px
        float left
        .home-htl{
          width 60%
          height 90px
          float left
          padding 20px 0 0 4%
          h2{
            font-size 1.1rem
            color #666
            line-height 2rem
          }
          p{
            font-size 0.8rem
            color #999
            line-height 1.2rem
          }
        }
        .home-htr{
          width 36%
          height 100px
          float right
          line-height 100px
          img{
            vertical-align middle
          }
        }
      }
    }
    .home-list{
      background-color #FFF
      h2{
        font-size 1.25rem
        color #666
        display block
        border-bottom 1px solid #DDD
        line-height 50px
        padding-left 20px
      }
      .home-litem{
        width 96%
        height 100px
        margin 0 auto
        border-bottom 1px solid #DDD
        .home-img{
          width 15%
          height 100px
          line-height 100px
          float left
          img{
            vertical-align middle
          }
        }
        .home-txt{
          width 58%
          margin-left 2%
          float left
          h3{
            margin-top 16px
            font-size 1.25rem
            color #666
            line-height 2rem
            display block
          }
          p{
            font-size 0.9rem
            line-height 1.2rem
            color #999
          }
        }
        .home-btn{
          display block
          width 10%
          height 100px
          line-height 100px
          float left
          padding-left 2%
          img{
            vertical-align middle
          }
        }
      }
      .home-litem:last-child{
        border-bottom 0
      }
    }
    .home-nav{
      position fixed
      bottom 0
      left 0
      width 100%
      height 60px
      background-color #FFF
      border-top 1px solid #f2f2f2
      a{
        display block
        width 33.33%
        float left
        height 60px
        text-align center
        i{
          width 30px
          height 30px
          display block
          margin 6px auto 0 auto
          background url(./footer_icon.png) no-repeat
          background-size 100% auto
        }
        i.ic1{
          background-position 0 0
        }
        i.ic2{
          background-position 0 -60px
        }
        i.ic3{
          background-position 0 -120px
        }
        span{
          font-size 1rem
          color #999
          line-height 22px
        }
      }
      a.active{
        i.ic1{
          background-position 0 -30px
        }
        i.ic2.active{
          background-position 0 -90px
        }
        i.ic3.active{
          background-position 0 -150px
        }
        span{
          color #14afff
        }
      }
    }
  }
</style>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
      items: [
        {
          url: '',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        },
        {
          url: '',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        },
        {
          url: '',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ]
    }
  },
  created () {
  },
  computed: {},
  methods: {
    changePage (current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      console.log(item, index)
    }
  },
  components: {
  }
}
</script>
