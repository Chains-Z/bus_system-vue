<template>
  <el-row>
    <el-col :span="24">
      <h1>全部站点查询</h1>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-form :inline="true">
          <el-form-item>
            <el-input v-model="searchParams" placeholder="请输入线路名称">
            </el-input>
          </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row>
    <el-table :data="stations" stripe border>
      <el-table-column prop="name" label="站点名称"/>
      <el-table-column prop="english" label="站点英文名称"/>
      <el-table-column prop="stationId" label="站点ID" />
    </el-table>
  </el-row>
</template>

<script>
export default {
  name: "AllStationQuery",
  data() {
    return {
      searchParams: '',
      stations: [{"stationId": "27675", "english": "HuaMing GJZ", "name": "花明公交站(始发站)"},
        {"stationId": "27699", "english": "HuaMing", "name": "花明"},
        {"stationId": "27733", "english": "HuaMingLiJiao S", "name": "花明立交南"},
        {"stationId": "27712", "english": "HuaMingLiJiao N", "name": "花明立交北"},
        {"stationId": "27790", "english": "WanHeLuKou", "name": "万和路口"},
        {"stationId": "27809", "english": "Sports Center", "name": "体育中心"},
        {"stationId": "27761", "english": "LiuLiLiJiao S", "name": "琉璃立交南"},
        {"stationId": "23134", "english": "LiuLiLiJiao N", "name": "琉璃立交北"},
        {"stationId": "27328", "english": "KeLinLu", "name": "科林路"},
        {"stationId": "23115", "english": "WuQingQiao", "name": "武青桥"},
        {"stationId": "23085", "english": "GuoYan", "name": "果堰"},
        {"stationId": "23059", "english": "MeiZhouHuaYuan", "name": "美洲花园"},
        {"stationId": "23046", "english": "ShuangHuiLiJiao S", "name": "双辉立交南"},
        {"stationId": "22013", "english": "ShuangHuiLiJiao N", "name": "双辉立交北"},
        {"stationId": "22008", "english": "JinHeDaDao S", "name": "金河大道南"}, {
          "stationId": "3539",
          "english": "Global Center",
          "name": "环球中心(始发站)"
        }, {"stationId": "1129", "english": "Avenue One", "name": "金河大道一段"}, {
          "stationId": "1154",
          "english": "Guang Min",
          "name": "光民"
        }, {"stationId": "1105", "english": "Hotel", "name": "昆仑酒店"}, {
          "stationId": "98784",
          "english": "JinHeDaDaoE",
          "name": "地铁金河大道东"
        }, {"stationId": "719", "english": "Hangtianlijiao W", "name": "航天立交西"}, {
          "stationId": "736",
          "english": "Hangtianlijiao E",
          "name": "航天立交东"
        }, {"stationId": "749", "english": "Art Center", "name": "画展中心"}, {
          "stationId": "764",
          "english": "Ecological Park",
          "name": "生态公园"
        }, {"stationId": "779", "english": "Food City", "name": "食品城"}, {
          "stationId": "787",
          "english": "Peace Bridge",
          "name": "平桥"
        }, {"stationId": "811", "english": "Jin He Park", "name": "金河公园"}, {
          "stationId": "818",
          "english": "JinHeKeYun",
          "name": "金河客运站(下客点)"
        }, {"stationId": "821", "english": "JinHeKeYun", "name": "金河客运站(终点站)"}]
    }
  }
}
</script>

<style scoped>

</style>