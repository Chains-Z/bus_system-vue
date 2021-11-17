<template>
  <div>
    <el-row>
      <el-col :span="14" :offset="5" style="background-color: aqua">

        <el-form inline>
          <el-form-item>
              <el-select v-model="tab" placeholder="请选择需要统计的数据" style="width: 400px">
                <el-option value="StationWithMostStopsStats" label="统计停靠路线最多的站点"></el-option>
                <el-option value="SpecialStationStats" label="统计地铁站、起点站、终点站、单行站数量"></el-option>
                <el-option value="BusTypeStats" label="统计常规公交、快速公交、高峰公交、夜班公交数量"></el-option>
                <el-option value="DuplicateStationStats" label="统计俩公交线路重复站点数量"></el-option>
                <el-option value="LineTransferStats" label="统计公交线路可换乘线路数量"></el-option>
                <el-option value="StationWithMostLinesStats" label="统计两个站台之间线路的数量"></el-option>
                <el-option value="LineWithMostStationsStats" label="统计公交线路的站点数量"></el-option>
                <el-option value="LineWithLongestOneWayTimeStats" label="统计公交线路的运行时间"></el-option>
              </el-select>
          </el-form-item>
        </el-form>
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