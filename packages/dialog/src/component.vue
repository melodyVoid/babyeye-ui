<template>
  <div class="be-dialog-wrapper" v-if="isVisible" :class="[size === 'large' ? 'large' : '']">
    <div class="be-dialog">
      <div class="be-dialog-title">{{ title }}</div>
      <div class="be-dialog-icon" :class="iconClass"></div>
      <div class="be-dialog-inner">
        <slot>
          <div class="be-dialog-content" v-for="(item, index) of msg" :key="index">
            {{ item }}
          </div>
        </slot>
      </div>
      <div class="be-dialog-footer">
        <slot name="footer">
          <div class="be-dialog-btn">
            <be-button @click="close" :italic="btnItalic" :size="btnSize">确定</be-button>
          </div>
        </slot>
      </div>
  </div>
  </div>
</template>
<script>
import BeButton from '../../button/src/main'
import path from 'path'
export default {
  name: 'be-dialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    isVisible: {
      type: Boolean,
      default: true
    },
    btnItalic: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  // data() {
  //   return {
  //     title: '',
  //     message: '',
  //     icon: '',
  //     isVisible: true,
  //     btnItalic: false,
  //     size: ''
  //   }
  // },
  computed: {
    msg() {
      if (typeof this.message === 'string' || typeof this.message === 'number') return [this.message]
      if (Array.isArray(this.message)) return this.message
    },
    iconClass() {
      return {
        [`be-icon-${this.icon}`]: true,
        'be-dialog-icon-circle': this.icon
      }
    },
    btnSize() {
      return this.size === 'large' ? 'medium' : 'small'
    }
  },
  components: {
    BeButton
  },
  methods: {
    close(e) {
      this.$emit('update:isVisible', false)
      this.$emit('click', e)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.be-dialog-wrapper {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
}
.be-dialog {
  width: 420px;
  position: fixed;
  padding: 10px;
  color: #fff;
  background:#697594;
  border-radius: 4px;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  text-align: center;
  .be-dialog-title {
    line-height: 40px;
    font-size: 20px;
  }
  .be-dialog-icon {
    margin: 10px auto;
  }
  .be-dialog-icon-circle {
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
  .be-icon-snr {
    background-image: url("../../../public/img/icon/icon-snr.png");
  }
  .be-dialog-content {
    line-height: 1.8;
    font-size: 16px;
  }
  .be-dialog-btn {
    float: right;
    margin: 10px 30px 10px;
  }
}

.large {
  .be-dialog {
    width: 600px;
    padding: 30px;
    .be-dialog-title {
    line-height: 60px;
    font-size: 28px;
    // height: 40px;
    }
    .be-dialog-icon {
      margin: 20px auto;
    }
    .be-dialog-icon-circle {
      width: 100px;
      height: 100px;
    }
    .be-dialog-content {
      line-height: 1.8;
      font-size: 20px;
    }
    .be-dialog-btn {
      .be-button.be-btn-size-medium {
        font-size: 20px;
      }
    }
  }
}

@media only screen and(max-width: 768px) {
  .be-dialog{
    width: 100vw;
  }
}
</style>
