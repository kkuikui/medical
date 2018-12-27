<template>
  <div class="share-box">
    <header class="header">
      <i class="cubeic-back" @click="$router.go(-1)"></i>
      <i class="cubeic-close"></i>
      <i class="cubeic-more"></i>
    </header>
    <h2>分享结果</h2>
    <div class="share-tips">张*丰 [ 男 / 60岁 ]</div>
    <cube-radio-group>
      <cube-radio
        key="1"
        option="1"
        v-model="selected4">
        不使用安全保护
      </cube-radio>
      <cube-radio
        key="2"
        option="2"
        v-model="selected4">
        使用规则进行安全保护
        <div class="share-chb">
          <span>限制分享数据打开时间</span>
          <cube-radio-group v-model="selected3" :options="options3" :horizontal="true" />
          <span>打开数据需要密码</span>
          <cube-radio-group v-model="selected1" :options="options1" />
        </div>
      </cube-radio>
      <cube-radio
        key="3"
        option="3"
        v-model="selected4">
        允许对方查看其它检查记录
      </cube-radio>
    </cube-radio-group>
    <button class="submit">转发</button>
    <v-footer></v-footer>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .share-box{
    height 100vh
    padding-bottom 50px
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
    .share-tips{
      font-size 1.1rem
      color #666
      line-height 30px
      padding 0 0 20px 17px
    }
    .share-t{
      font-size 1.1rem
      color #de7eb7
      line-height 30px
      padding 20px
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
  }
</style>

<script type="text/ecmascript-6">
// import http from '../../api/http'
// import api from '../../api/api'
import footer from '../../components/footer/Footer'

export default {
  data () {
    return {
      selected4: '1',
      selected3: '3',
      options3: [
        {
          label: '10分钟内',
          value: '1'
        },
        {
          label: '30分钟内',
          value: '2'
        },
        {
          label: '1小时内',
          value: '3'
        },
        {
          label: '24小时内',
          value: '4'
        }
      ],
      selected1: '1',
      options1: [
        {
          label: '不需要密码保护',
          value: '1'
        },
        {
          label: '病人手机号码后6位',
          value: '2'
        },
        {
          label: '病人姓名',
          value: '3'
        }
      ]
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
