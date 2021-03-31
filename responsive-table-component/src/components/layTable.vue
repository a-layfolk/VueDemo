<template>
  <div class="lay-table">
    <table>
      <thead>
        <tr>
          <th v-for="(thData, index) in layTheadData" :key="thData + index">
            {{ thData }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trData, index) in layTbodyData" :key="trData + index">
          <td v-for="(tdData, index) in trData" :key="tdData + index" :data-label="layTheadData[index]">
            {{ tdData }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "LayTable",
  props: {
    layTheadData: Array,
    layTbodyData: Array,
  },
  data() {
    return {
      isPhone: false,
    };
  },
};
</script>

<style scoped>
  table {
    width: 100%;
    /* 合并边框 */
    border-collapse: collapse;
  }
  table tr {
    border: 1px solid #ccc;
  }
  table th,
  table td {
    text-align: center;
    padding: 10px;
  }
  table th {
    font-size: 14px;
    letter-spacing: 1px;
  }

  @media(max-width:768px) {
    table thead {
      display: none;
    }
    table tr {
      display: block;
      margin-bottom: 10px;
    }
    table td {
      display: block;
      text-align: right;
    }
    table td:before {
      float: left;
      content: attr(data-label);
      font-weight: bold;
    }
  }
</style>
