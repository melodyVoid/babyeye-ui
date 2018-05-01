<template>
  <div class="wrapper" v-if="isShow">
    <div class="be-msg-box">
      <div class="be-msg-box-title">{{ title }}</div>
      <div class="be-msg-box-icon" :class="iconClass">
      </div>
      <div class="be-msg-box-content" v-for="(item, index) of msg" :key="index">
        {{ item }}
      </div>
      <div class="be-msg-btn">
        <be-button @click="close" :italic="btnItalic">确定</be-button>
      </div>
  </div>
  </div>
</template>
<script>
import BeButton from '../../button/src/main'
import path from 'path'
export default {
  name: 'be-msg',
  data() {
    return {
      title: '',
      message: '',
      icon: '',
      isShow: true,
      btnItalic: false
    }
  },
  // mounted() {
  //   this.close()
  // },
  computed: {
    msg() {
      if (typeof this.message === 'string' || typeof this.message === 'number') return [this.message]
      if (Array.isArray(this.message)) return this.message
    },
    iconClass() {
      return {
        [`be-icon-${this.icon}`]: true,
        'be-msg-box-icon-circle': this.icon
      }
    }
  },
  components: {
    BeButton
  },
  methods: {
    close() {
      this.isShow = false
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}
.be-msg-box {
  width: 420px;
  position: fixed;
  padding: 10px;
  color: #fff;
  // background-color: #5F6161;
  background:#697594;
  border-radius: 4px;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  text-align: center;
  .be-msg-box-title {
    line-height: 40px;
    font-size: 20px;
    // height: 40px;
  }
  .be-msg-box-icon {
    margin: 10px auto;
  }
  .be-msg-box-icon-circle {
    width: 50px;
    height: 50px;
    background-size: contain;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }
  .be-icon-eyecheck {
    background-image: url("../../../public/img/icon/icon-eyecheck.png");
  }
  .be-icon-eyeposition {
    background-image: url("../../../public/img/icon/icon-eyeposition.png");
  }
  .be-icon-fourlamp {
    background-image: url("../../../public/img/icon/icon-fourlamp.png");
  }
  .be-icon-fusion {
    background-image: url("../../../public/img/icon/icon-fusion.png");
  }
  .be-icon-sensitivity {
    background-image: url("../../../public/img/icon/icon-sensitivity.png");
  }
  .be-icon-stecheck {
    background-image: url("../../../public/img/icon/icon-stecheck.png");
  }
  .be-msg-box-content {
    line-height: 1.8;
  }
  .be-msg-btn {
    float: right;
    margin: 10px 30px 10px;
  }
}
</style>
