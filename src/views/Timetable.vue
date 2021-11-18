<template>
  <el-row>
    <el-col :span="14" :offset="5">
      <h1>班次信息查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="14" :offset="5">
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="searchParams" placeholder="请输入线路名称" @keyup.enter="getData">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="getData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="14" :offset="5">
      <el-table :data="data" border :stripe="true">
        <el-table-column type="index" :index="1" label="第几班" width="100"/>
        <el-table-column prop="timetable" label="时间表"/>
      </el-table>
    </el-col>
  </el-row>
</template>
<script setup>
import {Search} from "@element-plus/icons";
</script>

<script>

import {ElMessage} from "element-plus";

export default {
  name: "Timetable",
  data() {
    return {
      searchParams : '',
      data : undefined
    }
  },
  methods:{
    processData(){
      this.data = this.data.map(timetable=>{
        timetable = timetable.map(time => ' '+time.slice(0,-3))
        let o = {}
        o.timetable = timetable
        return o
      })
    },
    getData(){
      let url = `/line/get_timetable_of/${this.searchParams}`
      this.axios.get(url).then(res=>{
        if(res.data.isok) {
          let data = res.data.data
          console.log(data)
          if (data instanceof Array)
            this.data = data
          else
            this.data = [data]
          this.processData()
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