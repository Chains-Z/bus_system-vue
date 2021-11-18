<template>
  <el-row>
    <el-col :span="24">
      <h1>统计常规公交、快速公交、高峰公交、夜班公交数量
        <el-button type="primary" style="margin-left: 20px" @click="getData">查询</el-button>
      </h1>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="type" label="公交路线类型" width="120"/>
      <el-table-column prop="number" label="路线数量" />
    </el-table>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "BusTypeStats",
  data() {
    return {
      data: undefined
    }
  },
  methods:{
    getData(){
      let url = `/statistics/count_different_type_of_line`
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