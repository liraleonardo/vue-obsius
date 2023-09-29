<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'

const props = defineProps<{ item: MenuItem }>()
</script>

<template>
  <div class="menu-item-container">
    <div class="blank-menu-icon"></div>
    <span class="menu-item-label">{{ item.label }}</span>
  </div>
</template>

<style scoped>
.menu-item-container {
  display: flex;
  align-items: center;
  height: 32px;
}
.blank-menu-icon {
  width: 48px;
}

.menu-item-label {
  margin-left: 24px;
}
</style>
