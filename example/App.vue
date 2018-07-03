<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <be-button size="large" italic round disabled @click="handleClick" >哈哈hhhhhhh</be-button> -->
    <be-button italic  @click="isDialogVisible=!isDialogVisible" >显示dialog</be-button>

    <!-- <be-msg></be-msg> -->
    <be-dialog title="test" icon='fourlamp' :isVisible.sync="isDialogVisible">
      <img src="./assets/logo.png">
      <be-button @click.enter="isDialogVisible=!isDialogVisible">Something</be-button>
      <div slot="footer">Hello</div>
    </be-dialog>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import * as BabyeyeUI from '../packages'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'be-dialog': BabyeyeUI.Dialog,
    'be-button': BabyeyeUI.Button
  },
  methods: {
    handleClick() {
      alert(1)
    }
  },
  data() {
    return {
      isDialogVisible: true
    }
  },
  mounted() {
    // this.$alert({
    //   title: 'hhh',
    //   message: ['hhhhh', 'dafsdfa']
    // })
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
