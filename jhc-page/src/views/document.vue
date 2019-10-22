<template>
  <div class="jhc-document">
    <el-container>
      <el-aside width=200 class="module-nav">
        <inter-face />
      </el-aside>
    	<router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import interFace from '@/components/interface/interfaceNav';

export default {
  components: {
    interFace,
  },
};
</script>
<style>
@media screen and (max-width:500px ){
	.module-nav{
		display: none;
	}
}
</style>
