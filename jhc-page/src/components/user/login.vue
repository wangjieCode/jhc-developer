<template>
  <div class="login">
    <el-button type="text" @click="dialogFormVisible = true">登陆</el-button>
    <el-dialog title="登陆" :visible.sync="dialogFormVisible">
      <jhc-from :user="user" :fun="login" target="登陆" />
    </el-dialog>
  </div>
</template>

<script>
import jhcFrom from './jhcFrom';

export default {
  data() {
    return {
			 dialogFormVisible: false,
			 user: {
        userName: '',
        password: '',
      },
    };
	},
	methods: {
		login(){
      const { password, userName } = this.user;

			this.setCookie(userName)
			axios
        .post('/login', {
          userName,
          password,
        })
        .then(e => console.log(e))
        .catch(err => console.log(err));
		},
		setCookie(user){
			document.cookie = `login=${user};expires=Sun Apr 29 2020 14:27:56 GMT+0800 (中国标准时间)`;
		}

	},
  components: {
		jhcFrom
  },
};
</script>
<style>
</style>
