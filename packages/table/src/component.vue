<template>
  <table :class="{
    'be-table': true,
    'be-table-border': border,
    'be-table-small': small,
    'be-table-noline': noline,
    }">
    <tr>
      <th v-for="item in column" :key="item.prop" :width="item.width || false">{{item.label}}</th>
    </tr>
    <tr v-for="dataItem in data" :key="dataItem.id || false">
      <td v-for="columnItem in column" :key="columnItem.prop">{{dataItem[columnItem.prop] || ''}}</td>
    </tr>
  </table>
</template>
<script>
import BeButton from '../../button/src/main'
import path from 'path'
export default {
  name: 'be-table',
  props: {
    data: {
      type: Array,
      default: []
    },
    column: {
      type: Array,
      default: []
    },
    border: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    noline: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.be-table {
  margin: 0 20px;
  border-collapse: collapse;
  border-spacing: 0;
  th {
    border-bottom: 2px solid #22c4fc;
  }
  td, th {
    padding: 5px 10px;
  }
  td {
    border-bottom: 1px solid hsla(0,0%,100%,.1);
  }
}
.be-table-border {
  td, th {
    border: 1px solid #fff;
  }
}
.be-table-small {
  td, th {
    padding: 0;
    font-size: 0.9em;
  }
  td {
    border: none;
  }
}
.be-table-noline {
  td, th {
    border: none;
  }
}
</style>
