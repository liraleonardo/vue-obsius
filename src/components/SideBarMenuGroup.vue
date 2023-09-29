<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'
import { computed, ref } from 'vue'
import SideBarMenuItem from './SideBarMenuItem.vue'
import router from '../router'

const props = defineProps<{ item: MenuItem }>()

const emit = defineEmits(['expandMenuItem'])

const expanded = ref(false)

const hasChildren = computed(() => props.item.items && props.item.items.length > 0)

const handleClick = () => {
  if (props.item.action) {
    router.push(props.item.action)
    return
  }
  if (hasChildren.value) {
    handleExpand()
  }
}

const handleExpand = () => {
  emit('expandMenuItem', props.item)
  expanded.value = !expanded.value
}
</script>
<template>
  <div class="sidebar-menu-group-container" @click="handleClick">
    <div class="sidebar-menu-group">
      <div class="menu-group-icon-container">
        <span class="menu-group-icon" :class="item.icon"></span>
      </div>

      <span class="menu-group-label" :class="hasChildren ? '' : 'menu-group-nochild'">{{
        item.label
      }}</span>
      <div v-if="hasChildren" class="menu-expand-icon-container">
        <span
          class="menu-expand-icon"
          :class="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"
        ></span>
      </div>
    </div>
    <div v-if="expanded">
      <SideBarMenuItem v-for="child in item.items" :key="child.key" :item="child"></SideBarMenuItem>
    </div>
  </div>
</template>

<style scoped>
.sidebar-menu-group-container {
  cursor: pointer;
  &:hover {
    background-color: #eaeaea80;
  }
  user-select: none; /* Standard syntax */
}
.sidebar-menu-group {
  display: flex;
  align-items: center;
  padding: 8px;
  height: 32px;
  border-right: solid 6px transparent;

  &:hover {
    border-right: solid 6px #1b1f2e;
    background-color: #dadada80;
  }
}
.menu-group-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(48px - 16px);
}

.menu-group-icon {
  color: #fff;
}

.menu-group-label {
  margin-left: 32px;
  color: var(--Cinza-principal, #1b1f2e);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.menu-group-nochild {
  font-weight: 400;
}

.menu-expand-icon {
  color: #1b1f2e;
}

.menu-expand-icon-container {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 12px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: #cbcfde50;
  }
}
</style>
