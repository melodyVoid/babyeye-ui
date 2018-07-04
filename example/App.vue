<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <be-button size="large" italic round disabled @click="handleClick" >哈哈hhhhhhh</be-button> -->
    <be-button italic  @click="isDialogVisible=!isDialogVisible" >显示dialog</be-button>

    <!-- <be-msg></be-msg> -->
    <be-dialog title="表格测试" :isVisible.sync="isDialogVisible">
      <be-table
        :data="tableData"
        :column="[
          {label: '日期', prop: 'date', width: '150px'},
          {label: '姓名', prop: 'name', width: '150px'},
          {label: '省份', prop: 'province', width: '75px'},
          {label: '邮编', prop: 'zip'},
        ]"
        noline
      />
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
    'be-table': BabyeyeUI.Table
  },
  methods: {
    handleClick() {
      alert(1)
    }
  },
  data() {
    return {
      isDialogVisible: true,
      tableData: [{
        id: 1,
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        zip: 200333,
        tel: '13800138000'
      }, {
        id: 2,
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        zip: 200333
      }, {
        id: 3,
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        zip: 200333
      }, {
        id: 4,
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        zip: 200333
      }]
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
