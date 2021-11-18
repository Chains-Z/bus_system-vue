<template>
  <el-row>
    <el-col :span="24">
      <h1>站点停靠线路查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="searchParams" placeholder="请输入站点名称">
            <template #append>站</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="stations" stripe border>
      <el-table-column prop="stationId" label="站点ID" width="80"/>
      <el-table-column prop="stations" label="站点停靠线路"/>
    </el-table>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "StationStopLine",
  data() {
    return {
      searchParams : '',
      stations: undefined
    }
  },
  methods:{
    getData(){
      let url = `/station/getlineof/${this.searchParams}`
      this.axios.get(url).then(res=>{
        if(res.data.isok) {
          let data = res.data.data
          console.log(data)
          if (data instanceof Array)
            this.stations = data
          else
            this.stations = [data]
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