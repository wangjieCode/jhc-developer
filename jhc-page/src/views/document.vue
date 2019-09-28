<template>
  <div class="jhc-document">
    <el-container>
      <el-aside width="200px">
        <inter-face />
      </el-aside>
    	<router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import interFace from "@/components/interface/interfaceNav";

export default {
  components: {
    interFace
  }
};
</script>
<style>
</style>
