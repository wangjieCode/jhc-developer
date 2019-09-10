<template>
  <div class="login">
    <el-button type="text" @click="dialogFormVisible = true">注册</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="user" status-icon label-width="100px" ref="formName">
        <el-form-item label="用户名">
          <el-input type="text" v-model="user.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <resistered />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import resistered from "./registered";
export default {
	data(){
		return{
			 dialogFormVisible: false,
			 user: {
        userName: "",
        password: ""
      },
		}
	},
  components: {
    resistered
  }
};
</script>
<style>
</style>