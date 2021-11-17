<template>
  <el-row>
    <el-col :span="24">
      <h1>统计常规公交、快速公交、高峰公交、夜班公交数量
        <el-button type="primary" style="margin-left: 20px">查询</el-button>
      </h1>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="type" label="公交路线类型" width="120"/>
      <el-table-column prop="number" label="路线数量" />
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: "BusTypeStats",
  data() {
    return {
      data: [{"type": "干线", "number": 36}, {"type": "高峰线", "number": 16}, {"type": "夜班线", "number": 11}, {
        "type": "城乡线",
        "number": 8
      }, {"type": "支线", "number": 8}, {"type": "快速公交", "number": 7}, {"type": "驳接线", "number": 5}, {
        "type": "社区线",
        "number": 2
      }]
    }
  }
}
</script>

<style scoped>

</style>