<template>
  <div>
    <el-container>
      <el-header>
        <HeadBar></HeadBar>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <SideBar></SideBar>
        </el-aside>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import {HeadBar, SideBar, AppMain} from './components'

export default {
  name: 'layout',
  components: {SideBar, HeadBar, AppMain}
}
</script>

<style scoped>

</style>
