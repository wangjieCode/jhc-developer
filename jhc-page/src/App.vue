<template>
  <div id="app">
    <el-container >
			<h2 style="margin: 20px auto 20px">jhc开发者中心</h2>
      <el-header  style="height:80px">
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
    // this.$router.push('home');
	},
	// mounted(){
	// 	axios.post('http://127.0.0.1:90/stu/changeStu',{
	// 		id: 212,
	// 		name: '陈啸掭',
	// 		email:'128837218@qq.com',
	// 		address:'玩的',
	// 		edu: '博士',
	// 		sex:0
	// 	})
	// 	// axios.get('http://127.0.0.1:90/stu/editStu?id=211312892')
	// 	.then( res => {
	// 		console.log(res);
	// 	}).catch(rej=> console.log(rej))
	// }
};
</script>

<style lang="scss">
#app {
  width: 1200px;
  margin: 0 auto;
}
@media screen and (min-width:980px ) {
	#app {
		width: 1200px;
		margin: 0 auto;
	}
}
@media screen and (max-width:500px ){
	#app {
		width: 500px;
	}
}
</style>
