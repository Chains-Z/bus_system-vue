<template>
  <el-row>
    <el-col :span="24">
      <h1>统计公交线路的运行时间
        <el-button type="primary" style="margin-left: 20px" @click="getData">查询</el-button>
      </h1>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="line" label="公交路线名称" width="120"/>
      <el-table-column prop="runtime" label="运行时间"/>
    </el-table>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "LineWithLongestOneWayTimeStats",
  data() {
    return {
      data: undefined
    }
  },
  methods:{
    getData(){
      let url = `/statistics/lines_sorted_by_onewaytime`
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