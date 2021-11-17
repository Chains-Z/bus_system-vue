<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="5">
        <el-radio-group v-model="tab">
          <el-radio-button label="BasicInfoQuery">线路基本信息查询</el-radio-button>
          <el-radio-button label="DuplicateStationStats">两线路重复的站点名查询</el-radio-button>
          <el-radio-button label="LineTransferStats">统计公交线路可换乘线路数量</el-radio-button>
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
import BasicInfoQuery from "@/components/line/BasicInfoQuery";
import DuplicateStationStats from "@/components/line/DuplicateStationStats";
import LineTransferStats from "@/components/line/LineTransferStats";
export default {
  name: "Line",
  components:{BasicInfoQuery,DuplicateStationStats,LineTransferStats},
  data() {
    return {
      tab: "BasicInfoQuery",
    }
  }
}
</script>

<style scoped>

</style>