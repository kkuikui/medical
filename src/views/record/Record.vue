<template>
  <div class="print-box">
    <header class="header">
      <i class="cubeic-back" @click="$router.go(-1)"></i>
      <i class="cubeic-close"></i>
      <i class="cubeic-more"></i>
    </header>
    <h2>检查记录</h2>
    <div class="record-item">
      <p class="record-time">2018-4</p>
      <div class="record-tips">
        <div class="record-tips-top">
          <span class="left">2018-4-12</span>
          <span class="right">CT诊断</span>
        </div>
        <div class="recording-item">
          <div class="recording-i-title">检查号</div>
          <div class="recording-i-txt">RM1052326</div>
        </div>
        <div class="recording-item">
          <div class="recording-i-title">检查时间</div>
          <div class="recording-i-txt">2017-11-11</div>
        </div>
        <div class="recording-item">
          <div class="recording-i-title">检查部位</div>
          <div class="recording-i-txt">协骨三维重建</div>
        </div>
        <div class="recording-imgs">
          <div class="recording-img">
            <img src="../../common/images/bg.jpg" alt width="100%" height="110">
            <span>电子报告</span>
          </div>
          <div class="recording-img">
            <img src="../../common/images/bg.jpg" alt width="100%" height="110">
            <span>电子胶片</span>
          </div>
          <div class="recording-img">
            <img src="../../common/images/bg.jpg" alt width="100%" height="110">
            <span>DICOM 浏览</span>
          </div>
        </div>
      </div>
    </div>
    <div class="record-item">
      <p class="record-time">2018-4</p>
      <div class="record-tips">
        <div class="record-tips-top">
          <span class="left">2018-4-12</span>
          <span class="right">CT诊断</span>
        </div>
        <div class="recording-item">
          <div class="recording-i-title">检查号</div>
          <div class="recording-i-txt">RM1052326</div>
        </div>
        <div class="recording-item">
          <div class="recording-i-title">检查时间</div>
          <div class="recording-i-txt">2017-11-11</div>
        </div>
        <div class="recording-item">
          <div class="recording-i-title">检查部位</div>
          <div class="recording-i-txt">协骨三维重建</div>
        </div>
      </div>
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
    .print-tips{
      font-size 1.1rem
      color #666
      line-height 30px
      padding 0 0 20px 17px
    }
    .print-t{
      font-size 1.1rem
      color #de7eb7
      line-height 30px
      padding 20px
    }
    .recording-item {
      padding: 15px 15px 0 15px;
    }

    .recording-i-title {
      width: 80px;
      line-height: 1.75rem;
      float: left;
      color: #999;
      font-size: 1rem;
    }

    .recording-i-txt {
      margin-left: 90px;
      line-height: 1.75rem;
      color: #333;
      font-size: 1rem;
    }

    .recordingActive {
      height: 30px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .recording-toggle {
      font-size: 1rem;
      margin-left: 105px;
      color: #de7eb7;
      line-height: 26px;
    }

    .recording-imgs {
      margin: 12px 5px 0 5px;
      padding: 20px 0;
      text-align: center;
      border-top: 1px solid #f1f1f1;
    }

    .recording-img {
      display: inline-block;
      width: 20%;
      height: 130px;
      margin: 0 5%;
    }

    .recording-img span {
      font-size: 0.75rem;
      color: #666;
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
