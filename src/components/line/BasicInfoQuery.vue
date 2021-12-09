<template>
  <el-row>
    <el-col :span="24">
      <h1>线路基本信息查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
        <el-form-item>
          <el-input
              v-model="searchParams"
              placeholder="请输入路线名称"
              @keyup.enter="getData">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  @click="getData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-table :data="lines" :border="true" :stripe="true">
        <el-table-column prop="name" label="线路名"/>
        <el-table-column prop="directional" label="是否有上下行"/>
        <el-table-column prop="interval" label="班次间隔"/>
        <el-table-column prop="kilometer" label="单向里程"/>
        <el-table-column prop="oneWayTime" label="运行时长"/>
        <el-table-column prop="route" label="线路走向" width="250"/>
        <el-table-column prop="runtime" label="运行时间"/>
        <el-table-column prop="type" label="线路类型"/>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>

import {ElMessage} from "element-plus";

export default {
  name: "BasicInfoQuery",
  data() {
    return {
      searchParams: '',
      lines: undefined
    }
  },
  methods:{
    getData(){
      this.axios.get('/line/info/' + this.searchParams).then(res=>{
        if(res.data.isok) {
          let data = res.data.data
          if (data instanceof Array)
            this.lines = data
          else
            this.lines = [data]
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