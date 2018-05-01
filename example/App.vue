<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <be-button size="large" italic round disabled @click="handleClick" >哈哈hhhhhhh</be-button> -->

    <!-- <be-msg></be-msg> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  methods: {
    handleClick() {
      alert(1)
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
