<template>
  <el-row class="router">
    <el-col :span="20">
      <el-menu class="el-menu-demo" mode="horizontal" 
				:default-active="$route.path"
				text-color="#000" router>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/document/interface">测试接口</el-menu-item>
        <el-menu-item disabled>学习论坛</el-menu-item>
        <el-menu-item index="/About">开发者</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item>
          <login />
        </el-menu-item>
        <el-menu-item>
          <resistered />
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import resistered from "./user/registered";
import login from "./user/login";

export default {
  components: {
    resistered,
    login
  },
  created() {
    console.log(this.$router);
  }
};
</script>
<style>
.router-link-exact-active {
  color: #f40 !important;
  font-weight: bold;
}
</style>
