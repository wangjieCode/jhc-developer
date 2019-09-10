<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <router />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import router from './components/router.vue';

export default {
  name: 'app',
  components: {
    router,
  },
};
</script>

<style lang="scss">
#app {
  width: 1200px;
  margin: 0 auto;
}
</style>
