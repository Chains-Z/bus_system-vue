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
          <el-input v-model="searchParams" placeholder="请输入路线名称">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-table :data="lines" :border="true" :stripe="true">
        <el-table-column prop="name" label="name"/>
        <el-table-column prop="directional" label="directional"/>
        <el-table-column prop="interval" label="interval"/>
        <el-table-column prop="kilometer" label="kilometer"/>
        <el-table-column prop="oneWayTime" label="onewayTime"/>
        <el-table-column prop="route" label="route" width="250"/>
        <el-table-column prop="runtime" label="runtime"/>
        <el-table-column prop="type" label="type"/>
      </el-table>
    </el-col>
  </el-row>
</template>
<script setup>
import {Search} from "@element-plus/icons";
</script>
<script>
export default {
  name: "BasicInfoQuery",
  data() {
    return {
      searchParams: '',
      lines: [{ //TODO:拿数据记得把对象放进数组
        "name": "1",
        "directional": true,
        "interval": 5,
        "kilometer": 15.0,
        "oneWayTime": 52,
        "route": "金河客运站-花明公交站",
        "runtime": ["6:00-23:59"],
        "type": "干线"
      }]
    }
  }
}
</script>

<style scoped>

</style>