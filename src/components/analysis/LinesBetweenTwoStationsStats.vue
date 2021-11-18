<template>
  <el-row>
    <el-col :span="24">
      <h1>统计两个站台之间线路的数量
        <el-button type="primary" style="margin-left: 20px" @click="getData">查询</el-button>
      </h1>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="beginName" label="起点站名称(ID)" />
      <el-table-column prop="endName" label="终点站名称(ID)" />
      <el-table-column prop="numberOfLines" label="停靠路线数量" width="120"/>
    </el-table>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "LinesBetweenTwoStationsStats",
  data() {
    return {
      data: undefined
    }
  },
  methods:{
    getData(){
      let url = `/statistics/stations_with_most_lines_connected`
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