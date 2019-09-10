<template>
  <div class="registered">
    <el-button type="text" @click="dialogFormVisible = true">注册</el-button>
    <el-dialog title="注册" :visible.sync="dialogFormVisible">
      <el-form :model="user" status-icon label-width="100px" ref="formName">
        <el-form-item label="用户名">
          <el-input type="text" v-model="user.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      rules: {
        // pass: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [{ validator: validatePass2, trigger: "blur" }],
        // age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const { password, userName } = this.user;
      axios
        .post("/logon", {
          userName,
          password
        })
        .then(e => console.log(e))
        .catch(err => console.log(err));
    },
    resetForm(formName) {
      this.user.userName = "";
      this.user.password = "";
    }
  }
};
</script>
<style lang="scss">
</style>
