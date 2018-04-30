<template>
  <div class="wrapper" v-if="isShow">
    <div class="be-msg-box">
      <div class="be-msg-box-title">{{ title }}</div>
      <div class="be-msg-box-content" v-for="(item, index) of msg" :key="index">
        {{ item }}
      </div>
      <div class="be-msg-btn">
        <be-button italic @click="close">确定</be-button>
      </div>
  </div>
  </div>
</template>
<script>
import BeButton from '../../button/src/main'
export default {
  name: 'be-msg',
  data() {
    return {
      title: '我是标题',
      message: [1, 2, 3],
      isShow: true
    }
  },
  // mounted() {
  //   this.close()
  // },
  computed: {
    msg() {
      if (typeof this.message === 'string' || typeof this.message === 'number') return [this.message]
      if (Array.isArray(this.message)) return this.message
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
  background-color: #5F6161;
  border-radius: 4px;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  text-align: center;
  .be-msg-box-title {
    line-height: 40px;
    font-size: 20px;
  }
  .be-msg-box-content {
    line-height: 1.5;
  }
  .be-msg-btn {
    float: right;
    margin: 10px 30px 10px;
  }
}
</style>
