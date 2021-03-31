<template>
  <div>
    <lay-table :layTheadData="layTheadData" :layTbodyData="layTbodyData"></lay-table>
  </div>
</template>

<script>
import LayTable from './components/layTable.vue'

export default {
  name: 'App',
  components: {
    LayTable
  },
  data() {
    return {
      layTheadData: ["表头 1", "表头 2", "表头 3", "表头 4"],
      layTbodyData: [
        ["表格 1-1", "表格 1-2", "表格 1-3", "表格 1-4"],
        ["表格 2-1", "表格 2-2", "表格 2-3", "表格 2-4"],
      ],
    }
  }
};
</script>

<style></style>
