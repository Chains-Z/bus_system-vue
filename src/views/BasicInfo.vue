<template>
  <div>
    <el-row>
      <el-col :span="19" :offset="5">
        <h1>线路基本信息查询</h1>
      </el-col>
    </el-row>
    <el-row class="space">
      <el-col :span="12" :offset="5">
        <el-input v-model="searchParams" placeholder="请输入线路名称" >
          <template #append>路</template>
        </el-input>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" :icon="Search" @click="this.console.log(line.name)">Search</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14" :offset="5">
        <el-table :data="lines" :border="true" :stripe="true">
          <el-table-column prop="name" label="name"/>
          <el-table-column prop="directional" label="directional"/>
          <el-table-column prop="interval" label="interval"/>
          <el-table-column prop="kilometer" label="kilometer"/>
          <el-table-column prop="onewayTime" label="onewayTime"/>
          <el-table-column prop="route" label="route"/>
          <el-table-column prop="runtime" label="runtime"/>
          <el-table-column prop="type" label="type"/>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {Search} from "@element-plus/icons";
</script>
<script>
export default {
  name: "BasicInfo",
  data() {
    return {
      searchParams: '',
      lines : [{
        "directional": true,
        "interval": 3,
        "kilometer": 8.0,
        "name": "K4",
        "onewayTime": "约18分",
        "route": "钟楼-环球中心",
        "runtime": "6:15-21:50",
        "type": "快速公交"
      }]
    }
  },
  methods : {
    log(message){
      console.log(message)
    }
  }
}
</script>

<style scoped>
.space{
  margin-bottom: 20px;
}
</style>