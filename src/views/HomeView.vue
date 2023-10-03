<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <main>
    <div class="profile-header">
      <div class="user-info-container">
        <Avatar class="user-info-avatar" icon="pi pi-user" shape="circle" size="large"></Avatar>
        <h1 class="user-info-full-name">Fulana Beltrana Cicrana de Tal</h1>
      </div>
      <span class="profile-last-update-date">Última atualização: 14/12/2019</span>
    </div>
    <!-- <span>Home Page</span> -->
    <TabView v-model:activeIndex="active">
      <TabPanel header="Dados Cadastrais">
        <Divider align="left" class="p-0"> <h2 class="section-title">Dados pessoais</h2></Divider>
        <div class="form-section-container formgrid grid">
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="fullName">Nome completo</label>
              <input
                id="fullName"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="rg">RG</label>
              <input
                id="rg"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-4">
              <label class="form-input-label" for="birthDate">Nascimento</label>
              <input
                id="birthDate"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="gender">Sexo</label>
              <input
                id="gender"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="schooling">Escolaridade</label>
              <input
                id="schooling"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="maritalStatus">Estado civil</label>
              <input
                id="maritalStatus"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="maritalStatus">Currículo Lattes</label>
              <input
                id="maritalStatus"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
        </div>
        <Divider align="left" class="p-0"> <h2 class="section-title">Endereço</h2></Divider>
        <div class="form-section-container formgrid grid">
          <div class="field col-12 md:col-6">
            <div class="field col-4">
              <label class="form-input-label" for="cep">CEP</label>
              <input
                id="cep"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="addressComplement">Complemento</label>
              <input
                id="addressComplement"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="neighborhood">Bairro</label>
              <input
                id="neighborhood"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="city">Cidade</label>
              <input
                id="city"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="street">Logradouro</label>
              <input
                id="street"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
          <div class="field col-12 md:col-6">
            <div class="field col-9">
              <label class="form-input-label" for="city">Estado</label>
              <input
                id="city"
                type="text"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Documentação">
        <span>Documentação</span>
      </TabPanel>
      <TabPanel header="Projetos">
        <span>Projetos</span>
      </TabPanel>
      <TabPanel header="Histórico Fianceiro">
        <span class="">Histórico Fianceiro</span>
      </TabPanel>
    </TabView>
  </main>
</template>

<style lang="css">
.grid {
  margin: 0px;
}
.p-divider.p-divider-horizontal:before {
  border-top: 1px #1b1f2e solid;
}
.p-divider.p-divider-horizontal .p-divider-content {
  padding: 0 14px 0 0;
}

.p-tabview .p-tabview-panels {
  padding: 27px 0 27px 27px;
}

.p-tabview .p-tabview-nav {
  border-bottom: 2px solid #59b0fc80;
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link {
  border: 0;
  color: #3a3a3a;
}

.p-tabview-title {
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  border: solid 3px #59b0fc;
  border-width: 0 0 3px 0;
  color: #59b0fc;
}

.section-title {
  color: var(--Cinza-principal, #1b1f2e);

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.form-section-container {
  padding: 16px;
}

.profile-header {
  background-color: #1b1f2e;
  height: 104px;
  display: flex;
  justify-content: space-between;
  padding: 8px 24px;
}

.user-info-container {
  display: flex;
  width: fit-content;
  align-self: center;
  align-items: center;
}

.user-info-avatar {
  width: 72px;
  height: 72px;
}

.user-info-full-name {
  margin-left: 28px;
  color: var(--Branco-puro, #fff);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.profile-last-update-date {
  align-self: end;

  color: var(--Branco-puro, #fff);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.form-input-label {
  color: var(--Cinza-escuro, #3a3a3a);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
