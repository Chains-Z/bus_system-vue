<template>
  <el-row>
    <el-col :span="24">
      <h1>沿途站点查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
        <el-form-item label="起点站">
          <el-input v-model="start" placeholder="请输入站点名称">
            <template #append>站</template>
          </el-input>
        </el-form-item>
        <el-form-item label="终点站">
          <el-input v-model="end" placeholder="请输入站点名称">
            <template #append>站</template>
          </el-input>
        </el-form-item>
        <el-form-item label="公交线路">
          <el-input v-model="line" placeholder="请输入线路名称">
            <template #append>路</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="line" label="运行方向" width="80"/>
      <el-table-column prop="totalTime" label="运行时长" width="80"/>
      <el-table-column prop="stations" label="沿途站点"/>
    </el-table>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "AlongStationQuery",
  data() {
    return {
      start : '',
      end : '',
      line : '',
      data: undefined
    }
  },
  methods:{
    getData(){

      let url = `/station/get_info_between?origin=${this.start}&terminus=${this.end}&lineName=${this.line}`
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