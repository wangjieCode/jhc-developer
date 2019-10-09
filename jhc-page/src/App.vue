<template>
  <div id="app">
    <el-container>
			<h1 style="margin:20px auto 0px">jhc开发者平台</h1>
      <el-header style="height:80px">
        <router />
      </el-header>
      <router-view />
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
  beforeCreate() {
    this.$notify({
      title: '提示',
      message: '当前平台还未开发完成敬请期待',
      type: 'warning',
      position: 'bottom-right',
      offset: 100,
    });
    this.$router.push('home');
  },
};
</script>

<style lang="scss">
#app {
  width: 1200px;
  margin: 0 auto;
}
</style>
