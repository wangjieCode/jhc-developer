<template>
  <div class="interface" style="width: 100%;">
    <mavon-editor
      class="md"
      :value="value"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    ></mavon-editor>
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
      value: ``, // markdown语法
    };
  },
  mounted(){
		axios.get("doc/query")
		.then(res => {
			this.value = res.data[0].art
		}).catch( rej => {
			console.log(rej);
		})
	}
};
</script>

<style lang="scss">
.md {
  border: 1px solid;
}
</style>
