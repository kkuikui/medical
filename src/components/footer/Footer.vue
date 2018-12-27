<template>
  <div class="footer">
    <span>技术支持:</span>
    <i class="icon icon_logo"></i>
    <span>华奕健康云运营中心</span>
    <a href>
      <i class="icon icon_qq"></i>
    </a>
    <a href>
      <i class="icon icon_wx"></i>
    </a>
  </div>
</template>

<style lang="stylus">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: 20px;
  background-color: #5a2443;
  padding: 16px 0;
  text-align: center;
  color: #FFF;
  line-height: 30px;
  font-size: 1rem;
}

.footer span {
  display: inline-block;
}

.icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url('icon_share.png') no-repeat;
  background-size: 100% auto;
  margin: 0 5px;
  vertical-align: middle;
}

.icon_logo {
  background-position: 0 -60px;
}

.icon_qq {
  background-position: 0 0;
}

.icon_qq {
  background-position: 0 -30px;
}
</style>
