<template>
  <div :article="article" class="Article">
    <el-row>
      <el-col class="article-left" :span="20">
        <div class="chooseclass">专栝</div>
        <el-link target="_blank" :href="hrefSrc + article.id" icon="el-icon-view">{{ article.title }}</el-link>
        <div class="fenxiang">
          <div>
            <span v-for="(item, index)  in article.tag" :key="index">{{ item }}，</span>
          </div>
          <el-button size="mini" type="primary" icon="el-icon-finished"></el-button>
        </div>
      </el-col>
      <el-col :span="4">
        <el-image :src="imgurl[Math.floor(Math.random() * 3)]" style="padding-left: 30px; width: 100px; height: 100px"></el-image>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ['article'],
  data() {
    return {
			hrefSrc: `/article.html?id=`,
			imgurl: [
				'https://vuejs.bootcss.com/images/logo.png',
				'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
				'http://static.nodejs.cn/_static/img/logo.svg'
			]
		};
  },
};
</script>
<style lang="scss">
.Article {
  position: relative;
  border-bottom: 0.5px solid #ccc;
  height: 130px;
  padding: 20px 50px;
	background-color: #fff;
  box-sizing: border-box;
  .fenxiang {
    display: flex;
    justify-content: space-between;
  }
  .article-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90px;
  }
  .title {
    padding-left: 30px;
  }
  .el-link {
    justify-content: flex-start;
    padding-left: 30px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }
  .el-link--inner {
    text-align: left;
  }
}
</style>
