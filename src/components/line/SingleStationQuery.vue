<template>
  <el-row>
    <el-col :span="24">
      <h1>线路单行站查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="searchParams" placeholder="请输入路线名称" @keyup.enter="getData">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <span v-if="message === undefined"></span>
    <span v-else>{{message}}</span>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "SingleStationQuery",
  data() {
    return {
      searchParams:'',
      message:undefined,
    }
  },
  methods:{
    getData(){
      this.axios.get('/line/get_single_station_of/' + this.searchParams).then(res=>{
        if(res.data['isok']) {
          let data = res.data.data
          if(data['singleStation'].length === 0)
            this.message = `查询结果：${this.searchParams}路不存在单行站。`
          else
            this.message = `查询结果：${this.searchParams}路存在单行站，站点数量为${
            data['singleStation'].length}，单行站为：${data['singleStation']}`
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