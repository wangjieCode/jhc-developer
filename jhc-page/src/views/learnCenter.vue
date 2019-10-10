<template>
	<el-row class="learnCrenter">
		<el-col :span=18>
			<template v-for="item in article">
					<article-list :key="item.key" :article="item" />
			</template>
		</el-col>
		<el-col class="learnClass" :span=6>
			mmp
			<!-- <article-list /> -->
		</el-col>
	</el-row>
</template>
<script>
import ArticleList from '@/components/learn/ArticleList';

export default {
  components: {
    ArticleList,
	},
	mounted(){
	},
  data() {
    return {
      article: [
        {
          title: '1.5万字概括ES6全部特性(看图就能记下，值得收藏)',
          tag: ['前端', '面试'],
          id: '20181010',
        },
        {
          title: '面试官：今日头条启动很快，你觉得可能是做了哪些优化？',
          tag: ['前端', '文化'],
          id: '20181010',
        },
        {
          title: '1.5万字概括ES6全部特性(看图就能记下，值得收藏)',
          tag: ['前端', '面试'],
          id: '20181010',
        },
        {
          title: '面试官：今日头条启动很快，你觉得可能是做了哪些优化？',
          tag: ['前端', '文化'],
          id: '20181010',
        },
        {
          title: '想给头像加国旗?何须@微信官方,@我就可以啦',
          tag: ['前端', '文化'],
          id: '20181010',
        },
        {
          title: '想给头像加国旗?何须@微信官方,@我就可以啦',
          tag: ['前端', '文化'],
          id: '20181010',
        },
        {
          title: '想给头像加国旗?何须@微信官方,@我就可以啦',
          tag: ['前端', '文化'],
          id: '20181010',
        },
        {
          title: '1.5万字概括ES6全部特性(看图就能记下，值得收藏)',
          tag: ['前端', '面试'],
          id: '20181010',
        },
        {
          title: '面试官：今日头条启动很快，你觉得可能是做了哪些优化？',
          tag: ['前端', '文化'],
          id: '20181010',
        },
        {
          title: '想给头像加国旗?何须@微信官方,@我就可以啦',
          tag: ['前端', '文化'],
          id: '20181010',
        },
        {
          title: '想给头像加国旗?何须@微信官方,@我就可以啦',
          tag: ['前端', '文化'],
          id: '20181010',
        },
        {
          title: '想给头像加国旗?何须@微信官方,@我就可以啦',
          tag: ['前端', '文化'],
          id: '20181010',
        },

      ],
    };
  },
};
</script>
<style lang="scss">
	.learnCrenter{
		margin: 50px;
	}
	.learnClass{
		border: 1px solid #000;
		position: relative;
		height: 500px;
	}
</style>
