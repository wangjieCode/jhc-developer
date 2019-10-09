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
			<el-button type="success">发布</el-button>
		</div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  components: {
    mavonEditor,
  },
  data() {
    return {
      value: '# 使用md语法分享文章',
      tempValue: '',
    };
  },
  methods: {
    change(value, render) {
      console.log(value);
      this.tempValue = value;
    },
    setArticleStorage() {
      console.log(this.tempValue);
      localStorage.setItem('article', this.tempValue);
    },
  },
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
	.el-button{
		flex: 1;
	}
}
</style>
