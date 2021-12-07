<template>
  <el-row>
    <el-col :span="24">
      <h1>最短路径查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
        <el-form-item label="使用ID查询">
          <el-switch v-model="idQuery"/>
        </el-form-item>
        <span v-if="idQuery">
          <el-form-item label="起点站ID">
            <el-input v-model="startId" placeholder="请输入站点ID" @keyup.enter="getData"/>
          </el-form-item>
          <el-form-item label="终点站ID">
            <el-input v-model="endId" placeholder="请输入站点ID" @keyup.enter="getData"/>
          </el-form-item>
        </span>
        <span v-else>
          <el-form-item label="起点站名称">
            <el-input v-model="startName" placeholder="请输入站点名称" @keyup.enter="getData">
              <template #append>站</template>
            </el-input>
          </el-form-item>
          <el-form-item label="终点站名称">
            <el-input v-model="endName" placeholder="请输入站点名称" @keyup.enter="getData">
              <template #append>站</template>
            </el-input>
          </el-form-item>
        </span>
        <el-form-item>
          <el-button type="primary" @click="getData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="paths" stripe border>
      <el-table-column prop="startId" label="起点站ID" width="80"/>
      <el-table-column prop="endId" label="终点站ID" width="80"/>
      <el-table-column prop="path" label="最短路径"/>
    </el-table>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "ShortestPathQuery",
  data() {
    return {
      idQuery : false,
      startName: '',
      endName: '',
      startId: '',
      endId: '',
      data: undefined,
      paths: undefined
    }
  },
  methods: {
    processData() {
      this.paths = this.data.map(path => {
        let res = {}
        res.startId = path['stationId'][0]
        res.endId = path['stationId'][path['stationId'].length - 1]
        let p = ''
        for (let i = 0; i < path.lineName.length; i++) {
          p += `${path['stationName'][i]}--${path['lineName'][i]}-->`
        }
        p += path.stationName[path.stationName.length - 1]
        res.path = p
        return res
      })
      console.log(JSON.stringify(this.paths))
    },
    getData(){
      let url = this.idQuery ? `/station/get_shortest_path_with_id?from=${this.startId}&to=${this.endId}`
          : `/station/get_shortest_path_with_name?from=${this.startName}&to=${this.endName}`
      this.axios.get(url).then(res=>{
        if(res.data.isok) {
          let data = res.data.data
          console.log(data)
          if(!this.idQuery)
            data.sort((a,b)=>a['stationId'].length - b['stationId'].length)
          this.data = data
          this.processData()
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