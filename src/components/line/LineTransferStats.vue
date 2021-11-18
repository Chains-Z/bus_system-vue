<template>
  <el-row>
    <el-col :span="24">
      <h1>统计公交线路可换乘线路数量</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="searchParams" placeholder="请输入路线名称">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="getData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-table :data="data" :border="true" :stripe="true">
        <el-table-column prop="name" label="站点名称" width="180"/>
        <el-table-column prop="transferLines" label="可以换乘的线路"/>
      </el-table>
    </el-col>
  </el-row>
</template>
<script setup>
import {Search} from "@element-plus/icons";
</script>
<script>
import {ElMessage} from "element-plus";

export default {
  name: "LineTransferStats",
  data(){
    return{
      searchParams: '',
      data: '',
    }
  },
  methods:{
    getData(){
      this.axios.get('/line/transfer/' + this.searchParams).then(res=>{
        if(res.data.isok) {
          let data = res.data.data
          if (data instanceof Array)
            this.data = data
          else
            this.data = [data]
          ElMessage.success("查询成功！")
        }
        else
          throw new Error(res.data.message)
      }).catch(error=>ElMessage.error(error.toString()))
    }
  }
}
</script>

<style scoped>

</style>