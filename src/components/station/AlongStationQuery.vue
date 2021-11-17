<template>
  <el-row>
    <el-col :span="24">
      <h1>沿途站点查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
        <el-form-item label="起点站">
          <el-input v-model="start" placeholder="请输入站点名称">
            <template #append>站</template>
          </el-input>
        </el-form-item>
        <el-form-item label="终点站">
          <el-input v-model="end" placeholder="请输入站点名称">
            <template #append>站</template>
          </el-input>
        </el-form-item>
        <el-form-item label="公交线路">
          <el-input v-model="line" placeholder="请输入线路名称">
            <template #append>路</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="data" stripe border>
      <el-table-column prop="line" label="运行方向" width="80"/>
      <el-table-column prop="totalTime" label="运行时长" width="80"/>
      <el-table-column prop="stations" label="沿途站点"/>
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: "AlongStationQuery",
  data() {
    return {
      start : '',
      end : '',
      line : '',
      data: [{
        "line": "10路上行",//TODO:拿数据时将上下行以外的东西去掉
        "stations": ["大悦城", "肖家沟", "华通商场", "东林南路", "东林小区(始发站)", "东林路", "小吃街"],
        "totalTime": 13,
        "directional": true
      }]
    }
  }
}
</script>

<style scoped>

</style>