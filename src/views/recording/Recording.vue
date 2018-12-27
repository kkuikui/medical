<template>
  <div class="recording-box">
    <div class="recording-wrap">
      <div class="recording-title">
        <h2>CT诊断</h2>
        <a href="#/them">
          <i class="cubeic-share"></i>转发
        </a>
      </div>
      <div class="recording-content">
        <!-- start 基本信息 -->
        <h2>戴莲仙</h2>
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
        <div class="recording-item">
          <div class="recording-i-title">诊断结果</div>
          <div
            class="recording-i-txt"
            v-bind:class="{recordingActive: show}"
          >三大队挥洒的好看撒空间的哈萨克打开撒打算看到撒客户的飒飒的就撒的哈萨克打开撒打开手机啊</div>
        </div>
        <a href="javascript:void(0)" class="recording-toggle" @click="showBox" v-text="btnTxt"></a>
        <!-- end 基本信息 -->
        <!-- start 电子报告 -->
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
        <!-- end 电子报告 -->
        <div>{{seller.StatusContent}}</div>
        <!-- start 类别 -->
        <div class="recording-category">
          <ul>
            <li class="cube-index-list-item">
              <div class="cube-item">
                <a href="#/button" class="link">
                  <img src="../../common/images/icon_h.png" alt height="28"> 检查记录
                  <i class="cubeic-arrow"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <!-- end 类别 -->
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script type="text/ecmascript-6">
import http from '../../api/http'
import api from '../../api/api'
import footer from '../../components/footer/Footer'

export default {
  data () {
    return {
      seller: {},
      show: true,
      btnTxt: '展开'
    }
  },
  created () {
    this._showData()
  },
  computed: {},
  methods: {
    showBox () {
      this.show = !this.show
      if (this.show === true) {
        this.btnTxt = '展开'
      } else if (this.show === false) {
        this.btnTxt = '收起'
      }
    },
    _showData () {
      let params = {
        userName: 'wz',
        password: '123456'
      }
      const res = http.post(api.login, params)
      console.log(res)

      let param = {
        mobile: '13580222888',
        nickname: 'hdsaie',
        password: '123456'
      }
      const resp = http.get(api.register, param)
      console.log(resp)
    }
  },
  components: {
    'v-footer': footer
  }
}
</script>
<style lang="stylus">
.recording-box {
  min-height: calc(100vh - 180px);
  padding: 100px 0 80px 0;
  background: #e896bc url('../../common/images/bg.jpg') no-repeat;
  background-size: 100% auto;
}

.recording-wrap {
  background-color: #FFF;
  margin: 0 10px 10px 10px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 6px rgba(209, 99, 146, 0.5);
}

.recording-wrap::before {
  content: '';
  display: block;
  position: absolute;
  width: 96%;
  height: 6px;
  top: -6px;
  left: 2%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px 5px 0 0;
}

.recording-title {
  height: 30px;
  line-height: 30px;
  padding: 12px 3px;
  margin: 0 6px;
  border-bottom: 1px solid #f1f1f1;
}

.recording-title h2 {
  display: block;
  float: left;
  font-size: 1.25rem;
  color: #333;
  font-weight: bold;
}

.recording-title a {
  display: block;
  float: right;
  font-size: 0.85rem;
  color: #de7eb7;
}

.recording-title a i {
  margin-right: 5px;
}

.recording-content {
  padding: 30px 0 0 0;
}

.recording-content h2 {
  display: block;
  font-size: 1.05rem;
  padding: 0 0 0 10px;
  text-align: left;
  height: 22px;
  line-height: 22px;
  border-left: 5px solid #b76182;
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

.recording-category {
  border-top: 1px solid #f1f1f1;
}

.recording-category li {
  line-height: 50px;
}

.recording-category li .cube-item a {
  display: block;
  padding: 0 20px;
  color: #333;
  font-size: 1rem;
}

.recording-category li .cube-item a i {
  float: right;
  color: #999;
}

.recording-category li .cube-item a img {
  float: left;
  margin: 11px 10px 0 0;
}
</style>
