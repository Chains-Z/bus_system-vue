<template>
  <el-row>
    <el-col :span="24">
      <h1>统计两个站台之间线路的数量
        <el-button type="primary" style="margin-left: 20px">查询</el-button>
      </h1>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="beginName" label="起点站名称(ID)" />
      <el-table-column prop="endName" label="终点站名称(ID)" />
      <el-table-column prop="numberOfLines" label="停靠路线数量" width="120"/>
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: "LinesBetweenTwoStationsStats",
  data() {
    return {
      data: [{
        "beginName": "凤溪大道中(24672)",
        "endName": "凤溪大道和桥(24646)",
        "numberOfLines": 9
      }, {"beginName": "凤溪大道中(24674)", "endName": "凤溪大道和桥(24645)", "numberOfLines": 9}, {
        "beginName": "凤溪大道和桥(24646)",
        "endName": "凤溪大道中(24672)",
        "numberOfLines": 9
      }, {"beginName": "凤溪大道和桥(24645)", "endName": "凤溪大道中(24674)", "numberOfLines": 9}, {
        "beginName": "河野(24594)",
        "endName": "凤溪大道和桥(24646)",
        "numberOfLines": 8
      }, {"beginName": "科北路口(16433)", "endName": "北门立交南(16419)", "numberOfLines": 8}, {
        "beginName": "北门立交南(16419)",
        "endName": "科北路口(16433)",
        "numberOfLines": 8
      }, {"beginName": "凤溪大道和桥(24646)", "endName": "河野(24594)", "numberOfLines": 8}, {
        "beginName": "凤溪大道南(24564)",
        "endName": "河野(24595)",
        "numberOfLines": 8
      }, {"beginName": "凤溪大道和桥(24645)", "endName": "河野(24595)", "numberOfLines": 8}, {
        "beginName": "河野(24595)",
        "endName": "凤溪大道南(24564)",
        "numberOfLines": 8
      }, {"beginName": "河野(24595)", "endName": "凤溪大道和桥(24645)", "numberOfLines": 8}, {
        "beginName": "凤溪大道南(24563)",
        "endName": "河野(24594)",
        "numberOfLines": 8
      }, {"beginName": "河野(24594)", "endName": "凤溪大道南(24563)", "numberOfLines": 8}, {
        "beginName": "金河公园(803)",
        "endName": "平桥(98730)",
        "numberOfLines": 7
      }]
    }
  }
}
</script>

<style scoped>

</style>