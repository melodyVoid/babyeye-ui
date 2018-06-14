<template>
  <div class="be-msg-box-wrapper" v-if="isShow" :class="[size === 'large' ? 'large' : '']">
    <div class="be-msg-box">
      <div class="be-msg-box-title">{{ title }}</div>
      <div class="be-msg-box-icon" :class="iconClass"></div>
      <div class="be-msg-box-content" v-for="(item, index) of msg" :key="index">
        {{ item }}
      </div>
      <table class="sen" v-if="sensitivity && typeof sensitivity === 'object'">
        <tr>
          <th>空间频率</th>
          <th>对比敏感度(右)</th>
          <th>对比敏感度(左)</th>
        </tr>
        <tr>
          <td>1.5</td>
          <td>{{ sensitivity.OD['1.5'] }}</td>
          <td>{{ sensitivity.OS['1.5'] }}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>{{ sensitivity.OD['3'] }}</td>
          <td>{{ sensitivity.OS['3'] }}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>{{ sensitivity.OD['6'] }}</td>
          <td>{{ sensitivity.OS['6'] }}</td>
        </tr>
        <tr>
          <td>12</td>
          <td>{{ sensitivity.OD['12'] }}</td>
          <td>{{ sensitivity.OS['12'] }}</td>
        </tr>
        <tr>
          <td>18</td>
          <td>{{ sensitivity.OD['18'] }}</td>
          <td>{{ sensitivity.OS['18'] }}</td>
        </tr>
      </table>
      <table class="vergence" v-if="vergence && typeof vergence === 'object'">
        <tr>
          <th></th>
          <th>模糊点</th>
          <th>破裂点</th>
          <th>恢复点</th>
        </tr>
        <tr>
          <td>BI</td>
          <td v-for="(BI, index) of vergence.BI" :key="index">{{ BI }}</td>
        </tr>
        <tr>
          <td>BO</td>
          <td v-for="(BO, index) of vergence.BO" :key="index">{{ BO }}</td>
        </tr>
      </table>
      <div class="be-msg-btn">
        <be-button @click="close" :italic="btnItalic" :size="btnSize">确定</be-button>
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
      btnItalic: false,
      size: '',
      sensitivity: null,
      vergence: null
    }
  },
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
      this.isShow = false
      this.$emit('click', e)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.be-msg-box-wrapper {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
}
.be-msg-box {
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
  .be-msg-box-title {
    line-height: 40px;
    font-size: 20px;
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
  .be-icon-snr {
    background-image: url("../../../public/img/icon/icon-snr.png");
  }
  .be-msg-box-content {
    line-height: 1.8;
    font-size: 16px;
  }
  .be-msg-btn {
    float: right;
    margin: 10px 30px 10px;
  }
  .sen {
    margin: 15px auto;
    border-collapse:collapse;
    border-spacing:0;
    th {
      border-bottom: 1px solid #fff;
    }
    td, th {
      width: 30%;
      padding: 5px 0;
    }
  }
  .vergence {
    margin: 15px auto;
    border-collapse:collapse;
    border-spacing:0;
    td, th {
      // width: 25%;
      border: 1px solid #fff;
      padding: 5px 20px 10px;
    }
  }
}

.large {
  .be-msg-box {
    width: 600px;
    padding: 30px;
    .be-msg-box-title {
    line-height: 60px;
    font-size: 28px;
    // height: 40px;
    }
    .be-msg-box-icon {
      margin: 20px auto;
    }
    .be-msg-box-icon-circle {
      width: 100px;
      height: 100px;
    }
    .be-msg-box-content {
      line-height: 1.8;
      font-size: 20px;
    }
    .be-msg-btn {
      .be-button.be-btn-size-medium {
        font-size: 20px;
      }
    }
    .sen, .vergence {
      font-size: 18px;
    }
  }
}

@media only screen and(max-width: 768px) {
  .be-msg-box{
    width: 100vw;
  }
}
</style>
