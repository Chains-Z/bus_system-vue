<template>
  <el-row>
    <el-col :span="24">
      <h1>统计停靠路线最多的站点
        <el-button type="primary" style="margin-left: 20px" @click="getData">查询</el-button>
      </h1>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="name" label="站点名称" width="200"/>
      <el-table-column prop="numberofline" label="停靠路线数量" width="120"/>
      <el-table-column prop="lines" label="停靠路线名称"/>
    </el-table>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "StationWithMostStopsStats",
  data() {
    return {
      data: undefined
    }
  },
  methods:{
    getData(){
      let url = `/statistics/stations_with_most_stops`
      this.axios.get(url).then(res=>{
        if(res.data.isok) {
          let data = res.data.data
          console.log(data)
          if (data instanceof Array)
            this.data = data
          else
            this.data = [data]
          ElMessage.success("查询成功！")
        }
        else
          throw new Error(res.data.message)
      }).catch(error=>ElMessage.error(error.toString()))
    }
  }
}
</script>

<style scoped>

</style>