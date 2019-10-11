<template>
  <div class="login">
    <el-button type="text" @click="showLogin">登陆</el-button>
    <el-dialog title="登陆" :visible.sync="mmpthis.$store.state.dialogFormVisible">
      <jhc-from :user="user" :fun="login" target="登陆" />
    </el-dialog>
  </div>
</template>

<script>
import jhcFrom from "./jhcFrom";

export default {
  data() {
    return {
      mmpthis: this,
      dialogFormVisible: this.$store.state.dialogFormVisible,
      user: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    showLogin() {
      this.$store.state.dialogFormVisible = true;
    },
    hideLogin() {
      this.$store.state.dialogFormVisible = false;
    },
    login() {
      const { password, userName } = this.user;
      axios
        .post("/login", {
          userName,
          password
        })
        .then(e => {
          this.$message({
            message: "登陆成功",
            type: "success"
          });
          this.setCookie(userName);
          this.hideLogin();
          this.$store.state.loginFlag = false;
        })
        .catch(err => {
					console.log("密码或用户名错误");
					this.$message.error('用户名或密码错误');
        });
    },
    setCookie(user) {
      document.cookie = `login=${user};expires=Sun Apr 29 2020 14:27:56 GMT+0800 (中国标准时间)`;
    }
  },
  components: {
    jhcFrom
  }
};
</script>
<style>
</style>
