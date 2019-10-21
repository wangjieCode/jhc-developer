<template>
  <el-row class="router">
    <el-col :span="20" type="flex">
      <el-menu mode="horizontal" :default-active="$route.path" text-color="#000" router>
        <el-menu-item index="/home">经典案例</el-menu-item>
        <el-menu-item index="/document/interface">测试接口</el-menu-item>
        <el-menu-item index="/learnCenter">学习论坛</el-menu-item>
        <el-menu-item index="/About">发布文章</el-menu-item>
      </el-menu>
    </el-col>
    <el-col class="loginFlag" :span="4">
      <div class="login-nav" v-if="that.$store.state.loginFlag == true">
        <login />
        <resistered />
      </div>
      <div class="userInfo" v-else>
        <el-avatar
          size="small"
          icon
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <span class="span">{{ userName }}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import resistered from "./user/registered";
import login from "./user/login";

export default {
  data() {
    return {
			that:this,
      userName: "我在，你说"
    };
  },
  beforeMount() {
    if (document.cookie.split("=")[0]) {
      this.loginFlag = false;
    }
    this.userName = document.cookie.split("=")[1];
  },
  components: {
    resistered,
    login
  },
  created() {
    // console.log(this.$router);
  }
};
</script>
<style less="scss">
.el-header{
	padding: 0;
}
.loginFlag {
  display: flex;
  background-color: #fff;
  height: 60px;
}
.login-nav {
	display: flex;
	justify-content: space-around;
	text-align: center;
	width: 100%;
	align-items: center;
}
.router {
	padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.router-link-exact-active {
  color: #f40 !important;
  font-weight: bold;
}
.userInfo {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: start;
}
.span {
  padding-left: 20px;
}
</style>
