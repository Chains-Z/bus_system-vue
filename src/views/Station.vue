<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="5">
        <el-radio-group v-model="tab">
          <el-radio-button label="AllStationQuery">全部站点查询</el-radio-button>
          <el-radio-button label="StationStopLine">站点停靠线路查询</el-radio-button>
          <el-radio-button label="AlongStationQuery">沿途站点查询</el-radio-button>
          <el-radio-button label="ShortestPathQuery">最短路径查询</el-radio-button>
          <el-radio-button label="DirectPathQuery">直达站点查询</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14" :offset="5">
        <component :is="tab"></component>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AllStationQuery from "@/components/AllStationQuery";
import AlongStationQuery from "@/components/AlongStationQuery";
import StationStopLine from "@/components/StationStopLine";
import ShortestPathQuery from "@/components/ShortestPathQuery";
import DirectPathQuery from "@/components/DirectPathQuery";

export default {
  name: "Station",
  components: {AllStationQuery, AlongStationQuery, StationStopLine, ShortestPathQuery, DirectPathQuery},
  data() {
    return {
      tab: "AllStationQuery",
    }
  }
}
</script>

<style scoped>

</style>