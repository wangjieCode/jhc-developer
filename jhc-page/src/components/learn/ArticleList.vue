<template>
  <div :article="article" class="Article">
    <el-row>
      <el-col class="article-left" :span="20">
        <div class="chooseclass">专栝</div>
        <el-link icon="el-icon-view">{{ article.title }}</el-link>
        <div class="fenxiang">
          <div>
            <span v-for="(item, index)  in article.tag" :key="index">{{ item }}，</span>
          </div>
          <el-button size="mini" type="primary" icon="el-icon-finished"></el-button>
        </div>
      </el-col>
      <el-col :span="4">
        <el-image style="padding-left: 30px; width: 100px; height: 100px"></el-image>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ['article'],
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.Article {
  position: relative;
  border-bottom: 0.5px solid #ccc;
  height: 130px;
  padding: 20px 50px;
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
