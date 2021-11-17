<template>
  <div>
    <el-row>
      <el-col :span="14" :offset="5">
        <el-radio-group v-model="tab">
          <el-radio-button label="StationWithMostStopsStats">统计站点停靠路线数量</el-radio-button>
          <el-radio-button label="SpecialStationStats">统计特殊站点数量</el-radio-button>
          <el-radio-button label="BusTypeStats">统计线路类型</el-radio-button>
          <el-radio-button label="LinesBetweenTwoStationsStats">统计站台之间线路的数量</el-radio-button>
          <el-radio-button label="LineWithMostStationsStats">统计线路的站点数量</el-radio-button>
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
import LinesBetweenTwoStationsStats from "@/components/analysis/LinesBetweenTwoStationsStats";
import SpecialStationStats from "@/components/analysis/SpecialStationStats";
import BusTypeStats from "@/components/analysis/BusTypeStats";
import LineWithMostStationsStats from "@/components/analysis/LineWithMostStationsStats";
import LineWithLongestOneWayTimeStats from "@/components/analysis/LineWithLongestOneWayTimeStats";

export default {
  name: "Analysis",
  components: {
    StationWithMostStopsStats,
    LinesBetweenTwoStationsStats,
    SpecialStationStats,
    BusTypeStats,
    LineWithLongestOneWayTimeStats,
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