<template>
  <el-row>
    <el-col :span="24">
      <h1>统计停靠路线最多的站点
        <el-button type="primary" style="margin-left: 20px">查询</el-button>
      </h1>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="name" label="站点名称" width="200"/>
      <el-table-column prop="numberofline" label="停靠路线数量" width="120"/>
      <el-table-column prop="lines" label="停靠路线名称"/>
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: "StationWithMostStopsStats",
  data() {
    return {
      data: [{
        "name": "金河客运站(下客点)",
        "stationId": "818",
        "numberofline": 13,
        "lines": ["N12路下行", "N11路下行", "G38路上行", "G37路下行", "G28路下行", "G22路下行", "759路上行", "716路下行", "358路下行", "218路上行", "72路上行", "8路下行", "1路下行"]
      }, {
        "name": "凤溪大道和桥",
        "stationId": "24645",
        "numberofline": 11,
        "lines": ["N31路上行", "G90路上行", "G41路", "736路下行", "735路下行", "727A路下行", "727路下行", "322路下行", "261路下行", "74路上行", "70路上行"]
      }, {
        "name": "凤溪大道和桥",
        "stationId": "24646",
        "numberofline": 11,
        "lines": ["N31路下行", "G90路下行", "G41路", "736路上行", "735路上行", "727A路上行", "727路上行", "322路上行", "261路上行", "74路下行", "70路下行"]
      }, {
        "name": "科北路口",
        "stationId": "16433",
        "numberofline": 10,
        "lines": ["N31路下行", "N11路下行", "G90路下行", "727A路上行", "727路上行", "243路下行", "101路", "74路下行", "53路下行", "15路下行"]
      }, {
        "name": "凤溪大道中",
        "stationId": "24674",
        "numberofline": 9,
        "lines": ["N31路上行", "G41路", "736路下行", "735路下行", "727路下行", "322路下行", "261路下行", "74路上行", "70路上行"]
      }, {
        "name": "金河公园",
        "stationId": "803",
        "numberofline": 9,
        "lines": ["N12路上行", "N11路上行", "G38路下行", "759路下行", "218路下行", "72路下行", "43路下行", "2路上行", "1路上行"]
      }, {
        "name": "金河南站公交站(下客点)",
        "stationId": "59162",
        "numberofline": 9,
        "lines": ["K6路下行", "K5路下行", "K2路上行", "N26路下行", "N4路上行", "G91路上行", "106路上行", "17路下行", "4路上行"]
      }, {
        "name": "孵化园",
        "stationId": "17823",
        "numberofline": 9,
        "lines": ["G62路", "G41路", "G37路上行", "735路下行", "102路", "101路", "83路上行", "30路上行", "15路下行"]
      }, {
        "name": "科北路口",
        "stationId": "16432",
        "numberofline": 9,
        "lines": ["N31路上行", "N11路上行", "G90路上行", "727A路下行", "243路上行", "102路", "74路上行", "53路上行", "15路上行"]
      }, {
        "name": "凤溪大道中",
        "stationId": "24672",
        "numberofline": 9,
        "lines": ["N31路下行", "G41路", "736路上行", "735路上行", "727路上行", "322路上行", "261路上行", "74路下行", "70路下行"]
      }, {
        "name": "凤溪大道南",
        "stationId": "24563",
        "numberofline": 8,
        "lines": ["N31路下行", "G41路", "736路上行", "735路上行", "727路上行", "322路上行", "74路下行", "70路下行"]
      }, {
        "name": "金河市政府(始发站)",
        "stationId": "17848",
        "numberofline": 8,
        "lines": ["G62路", "G37路下行", "735路上行", "102路", "101路", "83路下行", "30路下行", "15路上行"]
      }, {
        "name": "平桥",
        "stationId": "98730",
        "numberofline": 8,
        "lines": ["N12路上行", "N11路上行", "218路下行", "72路下行", "57路上行", "43路下行", "2路上行", "1路上行"]
      }, {
        "name": "凤溪大道南",
        "stationId": "24564",
        "numberofline": 8,
        "lines": ["N31路上行", "G41路", "736路下行", "735路下行", "727路下行", "322路下行", "74路上行", "70路上行"]
      }, {
        "name": "河野",
        "stationId": "24594",
        "numberofline": 8,
        "lines": ["N31路下行", "G41路", "736路上行", "735路上行", "727路上行", "322路上行", "74路下行", "70路下行"]
      }]
    }
  }
}
</script>

<style scoped>

</style>