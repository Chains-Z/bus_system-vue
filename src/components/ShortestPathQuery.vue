<template>
  <el-row>
    <el-col :span="24">
      <h1>最短路径查询</h1>
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
    <el-table :data="paths" stripe border>
      <el-table-column prop="startId" label="起点站ID" width="80"/>
      <el-table-column prop="endId" label="终点站ID" width="80"/>
      <el-table-column prop="path" label="最短路径"/>
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: "ShortestPathQuery",
  data() {
    return {
      start: '',
      end: '',
      data: [{
        "stationId": ["16116", "59549", "5183", "5204", "5167", "5214"],
        "stationName": ["红瓦寺", "天九街", "万安路东", "万安路", "万安路西", "动物园"],
        "lineName": ["G27路上行", "70路下行", "N19路上行", "N19路上行", "N19路上行"]
      }, {
        "stationId": ["16116", "59549", "5183", "764", "749", "5181", "5197", "5168", "14768"],
        "stationName": ["红瓦寺", "天九街", "万安路东", "生态公园", "画展中心", "万安路东", "万安路", "万安路西", "动物园"],
        "lineName": ["G27路上行", "70路下行", "57路下行", "N12路下行", "N19路下行", "N19路下行", "N19路下行", "57路上行"]
      }, {
        "stationId": ["16115", "59548", "5181", "749", "764", "5183", "5204", "5167", "5214"],
        "stationName": ["红瓦寺", "天九街", "万安路东", "画展中心", "生态公园", "万安路东", "万安路", "万安路西", "动物园"],
        "lineName": ["G27路下行", "70路上行", "N19路下行", "N12路下行", "57路下行", "N19路上行", "N19路上行", "N19路上行"]
      }, {
        "stationId": ["16115", "59548", "5181", "5197", "5168", "14768"],
        "stationName": ["红瓦寺", "天九街", "万安路东", "万安路", "万安路西", "动物园"],
        "lineName": ["G27路下行", "70路上行", "N19路下行", "N19路下行", "57路上行"]
      }],
      paths: [{
        "startId": "16116",
        "endId": "5214",
        "path": "红瓦寺--G27路上行-->天九街--70路下行-->万安路东--N19路上行-->万安路--N19路上行-->万安路西--N19路上行-->动物园"
      }, {
        "startId": "16116",
        "endId": "14768",
        "path": "红瓦寺--G27路上行-->天九街--70路下行-->万安路东--57路下行-->生态公园--N12路下行-->画展中心--N19路下行-->万安路东--N19路下行-->万安路--N19路下行-->万安路西--57路上行-->动物园"
      }, {
        "startId": "16115",
        "endId": "5214",
        "path": "红瓦寺--G27路下行-->天九街--70路上行-->万安路东--N19路下行-->画展中心--N12路下行-->生态公园--57路下行-->万安路东--N19路上行-->万安路--N19路上行-->万安路西--N19路上行-->动物园"
      }, {
        "startId": "16115",
        "endId": "14768",
        "path": "红瓦寺--G27路下行-->天九街--70路上行-->万安路东--N19路下行-->万安路--N19路下行-->万安路西--57路上行-->动物园"
      }]
    }
  },
  created() {
    this.processData()
  },
  methods: {
    processData() {
      this.paths = this.data.map(path => {
        let res = {}
        res.startId = path.stationId[0]
        res.endId = path.stationId[path.stationId.length - 1]
        let p = ''
        for (let i = 0; i < path.lineName.length; i++) {
          p += `${path.stationName[i]}--${path.lineName[i]}-->`
        }
        p += path.stationName[path.stationName.length - 1]
        res.path = p
        return res
      })
      console.log(JSON.stringify(this.paths))
    }
  }

}
</script>

<style scoped>

</style>