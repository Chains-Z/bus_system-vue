<template>
<el-menu
    default-active="1"
    mode="horizontal"
    :router="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
  <el-menu-item index="1" route="/basicInfo">
    <el-icon :size="1"><office-building /></el-icon>金河市公交系统
  </el-menu-item>
  <el-menu-item index="2" route="/station">
    <el-icon><map-location /></el-icon>站点查询
  </el-menu-item>
  <el-menu-item index="3" route="/timetable">
    <el-icon><alarm-clock /></el-icon>班次查询
  </el-menu-item>
  <el-menu-item index="4" route="/analysis">
    <el-icon><histogram /></el-icon>分析查询
  </el-menu-item>

</el-menu>
</template>
<script setup>
import {AlarmClock,Histogram,MapLocation,OfficeBuilding} from "@element-plus/icons";
</script>
<script>
export default {
  name: "Header"

}
</script>

<style scoped>

</style>