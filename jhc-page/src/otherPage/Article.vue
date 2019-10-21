<template>
  <div id="article">
    <mavon-editor
      class="md"
      :value="value"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :ishljs="true"
    ></mavon-editor>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "app",
  data() {
    return {
      value: "# appdnkaeh"
    };
  },
  mounted() {
    const temId = window.location.search.slice(4);
    document.title = "";
    axios
      .get("/sys/getArticle", {
        params: {
          id: temId
        }
      })
      .then(res => {
        console.log(res.data);
        this.value = res.data[0].article;
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    mavonEditor
  }
};
</script>
<style lang="scss">
@media screen and (min-width:980px ) {
		#article {
		width: 1200px;
		margin: 0 auto;
		margin-top: 30px;
		padding-left: 30px;
	}
}
@media screen and (max-width:500px ){
	#article {
		width: 100%;
	}
}
</style>