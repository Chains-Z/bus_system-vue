<template>
  <el-row>
    <el-col :span="24">
      <h1>两线路重复的站点名查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
        <el-form-item label="路线一">
          <el-input v-model="start" placeholder="请输入路线名称">
          </el-input>
        </el-form-item>
        <el-form-item label="路线二">
          <el-input v-model="end" placeholder="请输入路线名称">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <span v-if="data[0] === undefined"></span>
    <span v-else-if="data[0].stations.length === 0">{{`查询结果：${start}和${end}不存在重复的站点。`}}</span>
    <div v-else>
      {{`查询结果：${start}和${end}存在重复的站点，站点数量为${data[0].num}，重复的站点为：${data[0].stations}`}}
    </div>
  </el-row>
</template>

<script>
export default {
  name: "DuplicateStationStats",
  data(){
    return{
      start: '',
      end : '',
      data:[{"stations":["金河市政府(始发站)","孵化园","北门立交东"],"num":3}]
    }
  }
}
</script>

<style scoped>

</style>