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
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  components: {
    mavonEditor
  },
  data() {
    return {
      value: "# 使用md语法分享文章"
    };
	},
	methods:{
		change(value ,render){
			console.log(value)
		}
	}
};
</script>

<style lang="scss">
.md {
  box-sizing: border-box;
	padding: 30px;
	height: 600px;
}
</style>