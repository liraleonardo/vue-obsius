<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'
import router from '../router'

const props = defineProps<{ item: MenuItem }>()

const handleClick = () => {
  if (props.item.action) {
    router.push(props.item.action)
    return
  }
}
</script>

<template>
  <div class="menu-item-container" @click.stop="handleClick">
    <div class="blank-menu-icon"></div>
    <span class="menu-item-label">{{ item.label }}</span>
  </div>
</template>

<style scoped>
.menu-item-container {
  display: flex;
  align-items: center;
  height: 32px;

  &:hover {
    border-right: solid 6px #1b1f2e;
    background-color: #dadada;
  }
}
.blank-menu-icon {
  width: 48px;
}

.menu-item-label {
  margin-left: 24px;
}
</style>
