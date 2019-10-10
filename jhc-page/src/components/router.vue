<template>
  <el-row class="router">
    <el-col :span="20">
      <el-menu mode="horizontal" :default-active="$route.path" text-color="#000" router>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/document/interface">测试接口</el-menu-item>
        <el-menu-item index="/learnCenter">学习论坛</el-menu-item>
        <el-menu-item index="/About">开发者</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4">
      <el-menu v-if="!loginFlag" mode="horizontal">
        <el-menu-item>
          <login />
        </el-menu-item>
        <el-menu-item>
          <resistered />
        </el-menu-item>
      </el-menu>
      <div v-else class="userInfo">
        <el-avatar size="small" icon="" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
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
      loginFlag: false,
      userName: "我在，你说"
    };
  },
  beforeMount() {
    this.loginFlag = this.$store.state.loginFlag;
    if (document.cookie.split("=")[0]) {
      this.loginFlag = true;
    }
    this.userName = document.cookie.split("=")[0];
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
.router-link-exact-active {
  color: #f40 !important;
  font-weight: bold;
}
.userInfo {
  display: flex;
  align-items: center;
  transform: translateY(20px);
  justify-content: start;
}
.span {
  padding-left: 20px;
}
</style>
