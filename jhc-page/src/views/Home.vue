<template>
  <div class="home">
    <el-row class="my2048">
      <el-col :span="10">
        <h1>2048小游戏(点击游戏界面开始游戏)</h1>
      </el-col>
      <el-col>
        <iframe
          class="iframe"
          src="https://developer.duyiedu.com/My2048/index.html"
          frameborder="0"
        ></iframe>
      </el-col>
      <el-col :span="10">
        <h1>连连看小游戏(点击游戏界面开始游戏)</h1>
      </el-col>
      <el-col>
        <iframe
          class="iframe"
          src="https://developer.duyiedu.com/PopStar/index.html"
          frameborder="0"
        ></iframe>
      </el-col>
    </el-row>
    <!-- <el-button @click="click">打开登陆</el-button> -->
  </div>
</template>

<script>
// import {map}
export default {
  name: "home",
  components: {},
  data() {
    return {
      start: true
    };
  },
  mounted() {
    // this.$alert("所有展示dome，后续补充分析，源码下载，typescript面向对象版", "公告", {
    //   confirmButtonText: "确定",
    // });
  },
  methods: {
    click() {
      this.$store.state.dialogFormVisible = true;
      // console.log(this.$store.state.dialogFormVisible);
    },
    mmpclick() {
      // this.start = false;
      // console.log(this.start);
    }
  }
};
</script>
<style lang="scss">
.my2048 {
}
.iframe {
  width: 100%;
  height: 500px;
  padding-top: 30px;
  border: 1px solid;
}
.el-loading-spinner {
  color: #fff !important;
}
</style>
