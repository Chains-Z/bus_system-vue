<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>
<script setup>
import Header from "@/components/Header";
</script>
<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
