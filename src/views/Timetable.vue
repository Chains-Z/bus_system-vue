<template>
  <el-row>
    <el-col :span="14" :offset="5">
      <h1>班次信息查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="14" :offset="5">
      <el-form :inline="true">
        <el-form-item>
          <el-input
              v-model="searchParams"
              placeholder="请输入线路名称(包括上下行)"
              @keyup.enter="getData">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="14" :offset="5">
      <el-table :data="data" border :stripe="true" max-height="600">
        <el-table-column fixed type="index" :index="1" label="第几班" width="100"/>
        <el-table-column v-for="station in stations" :prop="station.name" :label="station.name"/>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>

import {ElMessage} from "element-plus";

export default {
  name: "Timetable",
  data() {
    return {
      searchParams: '',
      data: undefined,
      stations : [{name:'时间表'}],
    }
  },
  methods: {
    getData() {
      let url1 = `/line/get_timetable_of/${this.searchParams}`
      let url2 = `/line/stations/${this.searchParams}`
      Promise.all([this.axios.get(url1),this.axios.get(url2)]).then(res =>{
        if (res[0].data.isok && res[1].data.isok) {
          let timetable = res[0].data.data
          let stations = res[1].data.data
          this.stations = stations
          let data = []
          // for (const station of stations) {
          //   o[station.name] = []
          // }
          for (let i = 0; i < timetable.length; i++) {
            data[i] = {}
            for (let j = 0; j < timetable[0].length; j++) {
              data[i][stations[j].name] = timetable[i][j]
            }
          }
          console.log(data)
          this.data = data
          ElMessage.success("查询成功！")
        } else
          throw new Error(res.data.message)
      }).catch(error => ElMessage.error(error.toString()))
    }
  }
}
</script>

<style scoped>

</style>