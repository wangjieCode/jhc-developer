<template>
  <el-form
    :model="user"
    ref="user"
    label-width="100px"
		status-icon
  >
    <el-form-item
      label="用户名"
      prop="userName"
      :rules="[
      { required: true, message: '用户名不能为空'},
      { min: 6, message: '长度最短6位'},
      { max: 16, message: '长度最长16位'}
    ]"
    >
      <el-input placeholder="用户名为6到16位的字符串" type="userName" v-model="user.userName" autocomplete="off"></el-input>
    </el-form-item>
		<el-form-item
      label="密码"
      prop="password"
      :rules="[
      { required: true, message: '密码不能为空'},
			{ min: 6, message: '长度最短6位'},
      { max: 16, message: '长度最长16位'}
    ]"
    >
      <el-input type="age" placeholder="密码最少6个字符" v-model="user.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('user')">{{ target }}</el-button>
      <el-button @click="resetForm('user')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: ['user', 'fun', 'target'],
  data() {
    return {

    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate()
        .then((res) => {
          this.fun();
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
