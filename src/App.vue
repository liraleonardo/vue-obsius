<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSideBar from '@/components/AppSideBar.vue'
import AppTopBar from '@/components/AppTopBar.vue'
</script>

<template>
  <div class="app-container">
    <AppSideBar></AppSideBar>
    <div class="flex flex-column w-full main-container">
      <AppTopBar></AppTopBar>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  flex-direction: row;
}

.main-container {
  margin-left: calc(300px);
}
</style>
