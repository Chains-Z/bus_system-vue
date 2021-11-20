<template>
  <el-row>
    <el-col :span="24">
      <h1>统计地铁站、起点站、终点站数量
        <el-button type="primary" style="margin-left: 20px" @click="getData">查询</el-button>
      </h1>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="type" label="站点类型" width="80"/>
      <el-table-column prop="amount" label="站点数量" width="80"/>
      <el-table-column prop="names" label="站点名称"/>
    </el-table>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "SpecialStationStats",
  data() {
    return {
      data: undefined
    }
  },
  methods: {
    getData() {
      let url1 = `/statistics/count_different_type_of_stations`
      this.axios.get(url1)
          .then(res => {
            let data1 = res.data.data
            this.data = data1
            ElMessage.success("查询成功！")
          }).catch(error => ElMessage.error(error.toString()))
    }
  }
}
</script>

<style scoped>

</style>