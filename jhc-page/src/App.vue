<template>
  <div id="app">
    <el-container>
      <el-header class="header">
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
	mounted(){
		window.addEventListener('hashchange',()=>{
        var currentPath = window.location.hash.slice(1); // 获取输入的路由
        if(this.$router.path !== currentPath){
            this.$router.push(currentPath); // 动态跳转
        }
    },false);
	},
	beforeCreate(){
		this.$notify({
			title: '提示',
			message: '当前平台还未开发完成敬请期待',
			type: 'warning',
			position:'bottom-right',
			offset:100
		});
	}
};
</script>

<style lang="scss">
#app {
  width: 1200px;
  margin: 0 auto;
}
</style>
