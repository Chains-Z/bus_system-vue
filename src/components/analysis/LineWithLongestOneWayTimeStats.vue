<template>
  <el-row>
    <el-col :span="24">
      <h1>统计公交线路的运行时间
        <el-button type="primary" style="margin-left: 20px">查询</el-button>
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
export default {
  name: "LineWithLongestOneWayTimeStats",
  data() {
    return {
      data: [{"line": "736路下行", "runtime": 90}, {"line": "736路上行", "runtime": 90}, {
        "line": "735路下行",
        "runtime": 86
      }, {"line": "735路上行", "runtime": 86}, {"line": "727路下行", "runtime": 75}, {
        "line": "727路上行",
        "runtime": 72
      }, {"line": "17路上行", "runtime": 65}, {"line": "334路下行", "runtime": 65}, {
        "line": "17路下行",
        "runtime": 65
      }, {"line": "82路上行", "runtime": 64}, {"line": "334路上行", "runtime": 64}, {
        "line": "716路上行",
        "runtime": 64
      }, {"line": "716路下行", "runtime": 63}, {"line": "47路上行", "runtime": 62}, {"line": "82路下行", "runtime": 62}]
    }
  }
}
</script>

<style scoped>

</style>