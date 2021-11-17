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
          <el-button type="primary">搜索</el-button>
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
export default {
  name: "StationStopLine",
  data() {
    return {
      searchParams : '',
      stations: [{"stationId": "64355", "stations": ["N26路下行", "G33路上行", "17路下行"]},
        {"stationId": "64356", "stations": ["N26路上行", "G33路下行", "17路上行"]},
        {"stationId": "58289", "stations": ["K5路下行"]},
        {"stationId": "58290", "stations": ["K5路上行"]}]

    }
  }
}
</script>

<style scoped>

</style>