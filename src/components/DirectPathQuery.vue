<template>
  <el-row>
    <el-col :span="24">
      <h1>直达站点查询</h1>
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
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <span v-if="lines === undefined"></span>
    <span v-else-if="lines.length === 0">{{`查询结果：从${start}到${end}不存在直达线路。`}}</span>
    <span v-else>{{`查询结果：从${start}到${end}存在直达线路，线路方向为：${lines}`}}</span>
  </el-row>
</template>

<script>
export default {
  name: "DirectPathQuery",
  data(){
    return{
      start : '',
      end : '',
      "lines":["70路下行",'70路上行']
    }
  }
}
</script>

<style scoped>

</style>