<template>
  <el-row>
    <el-col :span="16" :offset="5">
      <h1 style="text-align: start">全部站点查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="14" :offset="5" >
      <el-form :inline="true">
        <el-form-item>
          <el-radio v-model="choice" :label="1" border>所有线路</el-radio>
          <el-radio v-model="choice" :label="2" border>单条线路</el-radio>
        </el-form-item>
        <el-form-item v-if="choice == 2">
          <el-input v-model="searchParams" placeholder="请输入线路名称" >
            <template #append>路</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "AllStationQuery",
  data(){
    return {
      choice : 1,
      searchParams:'',
    }
  }
}
</script>

<style scoped>

</style>