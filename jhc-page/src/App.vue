<template>
  <div id="app">
    <router />
		<router-view />
  </div>
</template>

<script>
import router from './components/router.vue';

export default {
  name: 'app',
  components: {
    router,
  },
};
</script>

<style>
</style>
