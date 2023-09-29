<script setup lang="ts">
import { ref } from 'vue'
import LogoIpdec from '@/assets/ipdec/logo.svg'
import LogoNameIpdec from '@/assets/ipdec/logo-name.svg'
import SideBarMenuGroup from './SideBarMenuGroup.vue'
import type { MenuItem } from 'primevue/menuitem'

const expandedKeys = ref({})
const items = ref([
  {
    key: '0',
    label: 'Início',
    icon: 'pi pi-fw pi-home'
  },
  {
    key: '1',
    label: 'Bolsistas',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        key: '1_0',
        label: 'Lista de Bolsistas'
      }
    ]
  },
  {
    key: '2',
    label: 'Controle de Acesso',
    icon: 'pi pi-fw pi-lock',
    items: [
      {
        key: '2_0',
        label: 'Usuários e Permissões'
      },
      {
        key: '2_1',
        label: 'Delete'
      },
      {
        key: '2_2',
        label: 'Search'
      }
    ]
  }
])

const handleMenuItemExpand = (item: MenuItem) => {
  console.log('item clicked', item)
}
</script>

<template>
  <div class="sidebar-black-bg black-container-width"></div>
  <div class="sidebar-container">
    <div class="sidebar-content">
      <div class="sidebar-logo-container">
        <img :src="LogoIpdec" class="sidebar-logo-img" />
        <img :src="LogoNameIpdec" class="sidebar-logo-name-img" />
      </div>
      <div class="sidebar-menu">
        <SideBarMenuGroup
          v-for="item in items"
          @expandMenuItem="handleMenuItemExpand"
          :key="item.key"
          :item="item"
          :isFirstLevel="true"
        >
        </SideBarMenuGroup>
      </div>
      <!-- <PanelMenu
        v-model:expandedKeys="expandedKeys"
        :model="items"
        class="sidebar-panel-menu"
        unstyled
        :pt="{
          header: {
            class: 'debug-red'
          },
          panel: {
            class: 'debug-blue'
          }
        }"
      >
        <template #item="{ item }">
          <div class="sidebar-menu-item-container">
            <div v-if="item.icon" class="menu-item-icon-container">
              <span class="menu-item-icon" :class="item.icon"></span>
            </div>
            <span
              class="menu-item-label"
              :class="item.items && item.items.length > 0 ? '' : 'menu-item-nochild'"
            >
              {{ item.label }}</span
            >

            <div v-if="item.items && item.items.length > 0">
              <span v-if="true" class="menu-item-icon pi pi-angle-right"></span>
              <span v-else class="menu-item-icon pi pi-angle-down"></span>
            </div>
          </div>
        </template>
      </PanelMenu> -->
    </div>
  </div>
</template>

<style scoped>
.sidebar-container {
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 2px solid #1b1f2e;
}

.sidebar-black-bg {
  position: absolute;

  background-color: #1b1f2e;

  height: 100%;
}

.black-container-width {
  width: 48px;
}

.sidebar-content {
  /* display: flex; */
  position: relative;
  top: 0;
}

.sidebar-logo-container {
  display: flex;
  flex-direction: row;
  margin-left: 48px;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.sidebar-logo-img {
}
.sidebar-logo-name-img {
  margin-left: 12px;
}

.sidebar-panel-menu {
  background-color: transparent;
}

.sidebar-menu-item-container {
  display: flex;
  align-items: center;
  padding: 8px;
}

.menu-item-label {
  margin-left: 24px;
  color: var(--Cinza-principal, #1b1f2e);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.menu-item-nochild {
  font-weight: 400;
}
</style>
