<template>
  <el-card class="dome-list" :body-style="{ padding: '0px' }">
    <div style="width: 177px; height: 177px" :style="{background:'url('+imgUrl+')'}"></div>
    <div class="info">
      <el-button @click="toDome" >在线试玩</el-button>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "dome-list",
	props: ["imgUrl", "url"],
	mounted(){
		console.log(this.imgUrl)
	},
  methods: {
    toDome() {
      window.open(this.url);
    }
  }
};
</script>
<style lang="scss">
.dome-list > .el-card__body {
  display: flex;
  flex-direction: row;
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>