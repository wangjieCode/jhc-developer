<template>
  <div class="registered">
    <el-button type="text" @click="dialogFormVisible = true">注册</el-button>
    <el-dialog title="注册" :visible.sync="dialogFormVisible">
      <jhc-from :user="user" :fun="fun" target="注册" />
    </el-dialog>
  </div>
</template>

<script>
import jhcFrom from './jhcFrom';
export default {
  data() {
    return {
      age: 0,
      user: {
        userName: '',
        password: '',
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
    };
  },
  methods: {
    fun(){
			const { password, userName } = this.user;
			axios
        .post('/logon', {
          userName,
          password,
        })
        .then(e => console.log(e))
        .catch(err => console.log(err));
		}
	},
	components: {
		jhcFrom
  },
};
</script>
<style lang="scss">
</style>
