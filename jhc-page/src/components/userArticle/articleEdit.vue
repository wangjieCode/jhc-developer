<template>
  <div class="edit">
    <mavon-editor
      class="md"
      :value="value"
      :defaultOpen="'preview'"
      :ishljs="true"
      @change="change"
      fontSize="20px"
    ></mavon-editor>
    <div class="art">
      <el-button @click="setArticleStorage" type="primary">保存</el-button>
     	 <el-select v-model="typeEmen" placeholder="请选择文章类型">
        <el-option v-for="item in typeEmenList" :key="item" :label="item" :value="item">
          <span style="text-alin: center">{{ item }}</span>
        </el-option>
      </el-select>
      <el-button @click="submit" type="success">发布</el-button>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  components: {
    mavonEditor
  },
  data() {
    return {
      value: "# 使用md语法分享文章",
			tempValue: "",
			typeEmen: '前端',
			typeEmenList: [
				'前端',
				'后端',
				'人工智能',
				'安卓'
			]
    };
	},
  methods: {
    change(value, render) {
      // console.log(value);
      this.tempValue = value;
    },
    setArticleStorage() {
      // console.log(this.tempValue);
      localStorage.setItem("article", this.tempValue);
    },
    submit() {
			if(this.value == '# 使用md语法分享文章'){
				this.$message('请编辑文章内容后发布');
				return;
			}
      axios
        .post("/sys/editArticle", {
          article: this.tempValue,
          user: document.cookie.split("=")[1],
					time: this.getTime(),
					typeEmen: this.typeEmen,
					title: this.title
        })
        .then(res => {
          console.log(res);
        })
        .catch(rej => {
          console.log(rej);
        });
    },
    getTime() {
      const oDate = new Date(); //实例一个时间对象；
      return (
        "" +
        oDate.getFullYear() +
        (oDate.getMonth() + 1) +
        oDate.getDate() +
        oDate.getHours()
      );
    }
  }
};
</script>

<style lang="scss" scope>
.md {
  box-sizing: border-box;
  padding: 30px;
  height: 500px;
}
.art {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  div,.el-button{
		flex: 1;
		margin:0px 30px;
	}
}
</style>
