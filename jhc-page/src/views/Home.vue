<template>
  <div class="home">
    <el-row :gutter="30" style="padding: 0 30px;">
			<el-col :span="12">
				<el-card class="dome-list" :body-style="{ padding: '0px' }">
					<div>
						<img src="@/assets/img/照片展示.png" alt="">
					</div>
					<div class="info">
						<el-link target="_blank" href="https://developer.duyiedu.com/PhotographsShow/index.html">在线试玩</el-link>
					</div>
				</el-card>		
			</el-col>
			<!-- <dome-List :imgUrl="img"/> -->
			<el-col :span="12">
				<el-card class="dome-list" :body-style="{ padding: '0px' }">
					<div>
						<img src="@/assets/img/翻书.png" alt="">
					</div>
					<div class="info">
						<el-link target="_blank" href="https://developer.duyiedu.com/PageTurning/index.html">在线试玩</el-link>
					</div>
				</el-card>		
			</el-col>
		</el-row>
		 <el-row :gutter="30" style="padding: 0 30px;">
			<el-col :span="12">
				<el-card class="dome-list" :body-style="{ padding: '0px' }">
					<div>
						<img src="@/assets/img/文字时钟.png" alt="">
					</div>
					<div class="info">
						<el-link target="_blank" href="https://developer.duyiedu.com/clock/index.html">在线试玩</el-link>
					</div>
				</el-card>		
			</el-col>
			<!-- <dome-List :imgUrl="img"/> -->
			<el-col :span="12">
				<el-card class="dome-list" :body-style="{ padding: '0px' }">
					<div>
						<img src="@/assets/img/2048.png" alt="">
					</div>
					<div class="info">
						<el-link target="_blank" href="https://developer.duyiedu.com/My2048/index.html">在线试玩</el-link>
					</div>
				</el-card>		
			</el-col>
		</el-row>
		 <el-row :gutter="30" style="padding: 0 30px;">
			<el-col :span="12">
				<el-card class="dome-list" :body-style="{ padding: '0px' }">
					<div>
						<img src="@/assets/img/消灭星星.png" alt="">
					</div>
					<div class="info">
						<el-link target="_blank" href="https://developer.duyiedu.com/PopStar/index.html">在线试玩</el-link>
					</div>
				</el-card>		
			</el-col>
		</el-row>
  </div>
</template>

<script>
import domeList from '@/components/showlist/domelist'
export default {
  name: "home",
  components: {
		domeList
	},
  data() {
    return {
			start: true,
			img:'@/assets/img/2048.png',
			domelist:{
				imgUrl: '@/assets/img/2048.png',
				url: ''
			}
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
.el-row{
	margin-bottom: 30px;
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
