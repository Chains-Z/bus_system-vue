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
          <el-button type="primary" @click="getData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <span v-if="lines === undefined"></span>
    <span v-else>{{message}}</span>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "DirectPathQuery",
  data(){
    return{
      start : '',
      end : '',
      lines: undefined,
      message : ''
    }
  },
  methods:{
    getData(){

      let url = `/line/get_direct_line_between?from=${this.start}&to=${this.end}`
      this.axios.get(url).then(res=>{
        if(res.data.isok) {
          let data = res.data.data
          console.log(data)
          this.lines = data.lines
          this.message = this.lines.length ? `查询结果：从${this.start}到${this.end}存在直达线路，线路方向为：${this.lines}`
              : `查询结果：从${this.start}到${this.end}不存在直达线路。`
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