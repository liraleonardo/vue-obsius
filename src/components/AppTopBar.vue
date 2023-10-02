<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { icon: 'pi pi-home', class: 'default-breadcrumb green-breadcrumb' },
  { label: 'Bolsistas', class: 'default-breadcrumb green-breadcrumb' },
  { label: 'Lista de bolsistas', class: 'default-breadcrumb blue-breadcrumb' },
  { label: 'Dados do Bolsista', class: 'default-breadcrumb last-breadcrumb' }
])
</script>

<template>
  <div class="topbar-container flex justify-content-between">
    <div class="topbar-left-content">
      <h1 class="page-name-header">Dados do Bolsista</h1>
      <Breadcrumb :model="items" class="page-breadcrumb">
        <template #item="{ item }">
          <a :class="item.class" class="p-link">
            <span v-if="item.icon" :class="`${item.icon} ${item.class}`"></span>
            <span v-if="item.label" class="link-text" :class="`${item.class}`">{{
              item.label
            }}</span>
          </a>
        </template>
      </Breadcrumb>
    </div>
    <div class="topbar-right-content">
      <div class="user-info-container">
        <div class="user-data-container">
          <span class="user-data-name">Fulano</span>
          <span class="user-data-email">fulanodetal@gmail.com</span>
        </div>
        <Avatar class="user-avatar" icon="pi pi-user" shape="circle"></Avatar>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar-container {
  height: 80px;
  width: calc(100% - 300px);
  padding: 12px 24px;
  background: var(--Cinza-claro, #f1f5f9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 1000;
}

.topbar-left-content {
}

.topbar-right-content {
  height: fit-content;
}

.page-breadcrumb {
  margin-top: 10px;
  background: var(--Cinza-claro, #f1f5f9);
}

.link-text {
  cursor: pointer;

  text-decoration-line: underline !important;
  font-weight: 700 !important;
}

.last-breadcrumb {
  cursor: auto;

  text-decoration-line: none !important;
  font-weight: 400 !important;
}

.default-breadcrumb {
  color: var(--Cinza-escuro, #3a3a3a);
  /* Texto corrido */
  /* font-family: Montserrat; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.green-breadcrumb {
  color: var(--Azul-ao, #00cd2f);
}

.blue-breadcrumb {
  color: var(--Azul-ao, #59b0fc);
}

.p-breadcrumb {
  padding: 0;
  border: 0;
}

.p-menuitem-text {
  font-size: 12px !important;
}

.page-name-header {
  color: var(--Cinza-escuro, #3a3a3a);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.user-info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user-data-container {
  display: flex;
  flex-direction: column;
  margin-right: 12px;
}

.user-data-name {
  color: var(--Cinza-principal, #1b1f2e);
  text-align: right;
  /* Título */
  /* font-family: 'Montserrat'; */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.user-data-email {
  margin-top: 12px;

  color: var(--Cinza-principal, #1b1f2e);
  text-align: right;
  /* Texto corrido */
  /* font-family: Montserrat; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.user-avatar {
  width: 48px;
  height: 48px;
}
</style>
