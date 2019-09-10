<template>
  <el-row class="router">
    <el-col :span="20">
      <el-menu class="el-menu-demo" mode="horizontal" active-text-color="#f40" text-color="#000">
        <el-menu-item>
          <router-link :to="{path:'/home'}">首页</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{path:'/document'}">测试接口</router-link>
        </el-menu-item>
        <el-menu-item disabled>
          <router-link to="{path:'/'}">学习论坛</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{path:'/about'}">开发者</router-link>
        </el-menu-item>
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
import resistered from './user/registered';
import login from './user/login';

export default {
	components:{
		resistered,
		login
	}
};
</script>
<style lang="scss">
</style>
