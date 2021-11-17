<template>
  <el-row>
    <el-col :span="24">
      <h1>统计公交线路的站点数量
        <el-button type="primary" style="margin-left: 20px">查询</el-button>
      </h1>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="name" label="公交路线名称" width="120"/>
      <el-table-column prop="stationnum" label="站点数量" />
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: "LineWithMostStationsStats",
  data() {
    return {
      data: [{"name": "736路上行", "stationnum": 47}, {"name": "736路下行", "stationnum": 46}, {
        "name": "735路上行",
        "stationnum": 44
      }, {"name": "735路下行", "stationnum": 44}, {"name": "727路下行", "stationnum": 39}, {
        "name": "727路上行",
        "stationnum": 37
      }, {"name": "82路上行", "stationnum": 35}, {"name": "322路下行", "stationnum": 35}, {
        "name": "322路上行",
        "stationnum": 34
      }, {"name": "17路上行", "stationnum": 34}, {"name": "334路下行", "stationnum": 34}, {
        "name": "17路下行",
        "stationnum": 34
      }, {"name": "716路上行", "stationnum": 33}, {"name": "47路上行", "stationnum": 33}, {
        "name": "716路下行",
        "stationnum": 33
      }]

    }
  }
}
</script>

<style scoped>

</style>