<template>
  <el-row>
    <el-col :span="24">
      <h1>两线路重复的站点名查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
        <el-form-item label="路线一">
          <el-input v-model="start" placeholder="请输入路线名称">
          </el-input>
        </el-form-item>
        <el-form-item label="路线二">
          <el-input v-model="end" placeholder="请输入路线名称">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getData" :icon="Search">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <span v-if="data === undefined"></span>
    <span v-else>{{message}}</span>
  </el-row>
</template>
<script setup>
import {Search} from "@element-plus/icons";
</script>
<script>
import {ElMessage} from "element-plus";

export default {
  name: "DuplicateStationStats",
  data(){
    return{
      start: '',
      end : '',
      message : '',
      data: undefined
    }
  },
  methods:{
    getData(){
      let url = `/station/getSameStation?stationNameA=${this.start}&stationNameB=${this.end}`
      this.axios.get(url).then(res=>{
        if(res.data.isok) {
          let data = res.data.data
          console.log(data)
          if (data instanceof Array)
            this.data = data
          else
            this.data = [data]
          if(data[0].stations.length === 0)
            this.message = `查询结果：${this.start}和${this.end}不存在重复的站点。`
          else
            this.message = `查询结果：${this.start}和${this.end}存在重复的站点，站点数量为${data[0].num}，重复的站点为：${data[0].stations}`
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