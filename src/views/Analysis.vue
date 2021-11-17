<template>
  <div>
    <el-row>
      <el-col :span="14" :offset="5">
        <el-radio-group v-model="tab">
          <el-radio-button label="StationWithMostStopsStats">统计停靠路线最多的站点</el-radio-button>
          <el-radio-button label="SpecialStationStats">统计地铁站、起点站、终点站、单行站数量</el-radio-button>
          <el-radio-button label="BusTypeStats">统计常规公交、快速公交、高峰公交、夜班公交数量</el-radio-button>
          <el-radio-button label="DuplicateStationStats">统计俩公交线路重复站点数量</el-radio-button>
          <el-radio-button label="LineTransferStats">统计公交线路可换乘线路数量</el-radio-button>
          <el-radio-button label="StationWithMostLinesStats">统计两个站台之间线路的数量</el-radio-button>
          <el-radio-button label="LineWithMostStationsStats">统计公交线路的站点数量</el-radio-button>
          <el-radio-button label="LineWithLongestOneWayTimeStats">统计公交线路的运行时间</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14" :offset="5">
        <keep-alive>
          <component :is="tab"></component>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import StationWithMostStopsStats from "@/components/analysis/StationWithMostStopsStats";
import StationWithMostLinesStats from "@/components/analysis/StationWithMostLinesStats";
import SpecialStationStats from "@/components/analysis/SpecialStationStats";
import BusTypeStats from "@/components/analysis/BusTypeStats";
import DuplicateStationStats from "@/components/analysis/DuplicateStationStats";
import LineTransferStats from "@/components/analysis/LineTransferStats";
import LineWithMostStationsStats from "@/components/analysis/LineWithMostStationsStats";
import LineWithLongestOneWayTimeStats from "@/components/analysis/LineWithLongestOneWayTimeStats";

export default {
  name: "Analysis",
  components: {
    StationWithMostStopsStats,
    DuplicateStationStats,
    StationWithMostLinesStats,
    SpecialStationStats,
    BusTypeStats,
    LineWithLongestOneWayTimeStats,
    LineTransferStats,
    LineWithMostStationsStats
  },
  data() {
    return {
      tab: "StationWithMostStopsStats",
    }
  },

}
</script>

<style scoped>

</style>