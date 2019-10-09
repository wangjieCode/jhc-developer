<template>
  <el-col class="jhc-nav">
    <router-link to="/document/interface">信息管理系统</router-link>
    <br />
    <br />
    <br />
    <a @click="click">在线聊天接口</a>
  </el-col>
</template>


<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    click() {
      this.$message({
        message: '当前接口还未开发完成敬请期待',
      });
    },
  },
};
</script>

<style lang="scss">
.jhc-nav {
  width: 200px;
  text-align: center;
  padding: 20px 0px;
  font-weight: bold;
}
</style>
