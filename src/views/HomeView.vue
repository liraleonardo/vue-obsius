<script setup lang="ts">
import { reactive, ref } from 'vue'
import FormInputContainer from '../components/FormInputContainer.vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

let userSchema = toTypedSchema(
  yup.object({
    name: yup.string().required('O Campo é requerido'),
    age: yup
      .number()
      .required()
      .when('email', {
        is: true,
        then: (schema) => schema.min(5),
        otherwise: (schema) => schema.moreThan(18)
      })
      .positive()

      .integer(),
    email: yup.string().required().email('E-mail inválido'),
    password: yup.string().min(6).required(),
    confirmedPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Senha Informada não é igual')
  })
)

const { errors, handleSubmit, defineInputBinds, meta } = useForm({
  validationSchema: userSchema
})

const name = defineInputBinds('name', {
  validateOnInput: true,
  validateOnBlur: false,
  validateOnChange: false
})
const email = defineInputBinds('email', {
  validateOnInput: true,
  validateOnBlur: false,
  validateOnChange: false
})
const age = defineInputBinds('age', {
  validateOnInput: true,
  validateOnBlur: false,
  validateOnChange: false
})
const password = defineInputBinds('password', {
  validateOnInput: true,
  validateOnBlur: false,
  validateOnChange: false
})
const confirmedPassword = defineInputBinds('confirmedPassword', {
  validateOnInput: true,
  validateOnBlur: false,
  validateOnChange: false
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})

const active = ref(0)

const form = reactive({
  fullName: '',
  rg: '',
  birthDate: null,
  cpf: '',
  gender: 'MASCULINO',
  schooling: 'GRADUACAO',
  maritalStatus: 'SOLTEIRO',
  curriculumUrl: ''
})

const error = ref<{ [key: string]: string }>({})

const isValid = (): boolean => {
  let localErrors: typeof error.value = {}

  if (!form.fullName) {
    localErrors.fullName = 'Campo obrigatório'
  }
  if (!form.rg) {
    localErrors.rg = 'Campo obrigatório'
  }

  error.value = localErrors
  console.log(error)
  return Object.keys(error).length === 0
}

const handleSave = () => {
  console.log(form, error)
  if (isValid()) {
    console.log('SUBMIT')
  }
}

const genderOptions = ['MASCULINO', 'FEMININO']
const schoolingOptions = [
  'ENSINO MÉDIO',
  'GRADUAÇÃO',
  'PÓS-GRADUAÇÃO',
  'MESTRADO',
  'DOUTORADO',
  'PÓS-DOUTORADO'
]
const matiralOptions = ['SOLTEIRO', 'CASADO']
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
        <div class="flex justify-content-end mb-2">
          <Button class="p-button-sm p-button-secondary" @click="handleSave">Salvar</Button>
        </div>
        <Divider align="left" class="p-0"> <h2 class="section-title">Dados pessoais</h2></Divider>
        <div class="form-section-container formgrid grid row-gap-3">
          <FormInputContainer
            inputId="fullName"
            :error="error.fullName"
            hint="Exemplo de dica para o nome Completo"
            label="Nome Completo"
            required
            v-slot="{ errorClass, id }"
          >
            <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-model="form.fullName"
            ></InputText>
          </FormInputContainer>
          <FormInputContainer
            inputId="rg"
            :error="error.rg"
            label="RG"
            required
            v-slot="{ errorClass, id }"
          >
            <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-model="form.rg"
            ></InputText>
          </FormInputContainer>
          <FormInputContainer
            inputId="birthDate"
            :error="error.birthDate"
            label="Nascimento"
            classContent="field col-4"
            required
            v-slot="{ errorClass, id }"
          >
            <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-model="form.birthDate"
            ></InputText>
          </FormInputContainer>
          <FormInputContainer
            inputId="cpf"
            :error="error.cpf"
            label="CPF"
            required
            v-slot="{ errorClass, id }"
          >
            <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-model="form.cpf"
            ></InputText>
          </FormInputContainer>
          <FormInputContainer
            inputId="gender"
            :error="error.gender"
            label="Sexo"
            required
            v-slot="{ errorClass, id }"
          >
            <div class="flex align-items-center">
              <RadioButton v-model="form.gender" :id="id" :class="errorClass" value="MASCULINO" />
              <label :for="id" class="mx-2">Masculino</label>

              <RadioButton
                v-model="form.gender"
                :id="id"
                class="ml-2"
                :class="errorClass"
                value="FEMININO"
              />
              <label :for="id" class="ml-2">Feminino</label>
            </div>
            <!-- <Dropdown
              :id="id"
              size="small"
              :class="errorClass"
              :options="genderOptions"
              v-model="form.gender"
              class="show-component-small"
            ></Dropdown> -->
          </FormInputContainer>
          <FormInputContainer
            inputId="schooling"
            :error="error.schooling"
            label="Escolaridade"
            required
            v-slot="{ errorClass, id }"
          >
            <!-- <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-model="form.schooling"
            ></InputText> -->

            <Dropdown
              :id="id"
              size="small"
              :class="errorClass"
              :options="schoolingOptions"
              v-model="form.schooling"
              class="show-component-small"
            ></Dropdown>
          </FormInputContainer>
          <FormInputContainer
            inputId="maritalStatus"
            :error="error.maritalStatus"
            label="Estado civil"
            required
            v-slot="{ errorClass, id }"
          >
            <Dropdown
              :id="id"
              size="small"
              :class="errorClass"
              v-model="form.maritalStatus"
              class="show-component-small"
              :options="matiralOptions"
            ></Dropdown>
            <!-- <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-model="form.maritalStatus"
            ></InputText> -->
          </FormInputContainer>
          <FormInputContainer
            inputId="curriculumUrl"
            :error="error.curriculumUrl"
            label="Currículo Lattes"
            required
            v-slot="{ errorClass, id }"
          >
            <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-model="form.curriculumUrl"
            ></InputText>
          </FormInputContainer>
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
        <form class="flex flex-column formgrid grid col-12 row-gap-3" @submit="onSubmit">
          <FormInputContainer
            inputId="name"
            :error="errors.name"
            label="Nome"
            required
            v-slot="{ errorClass, id }"
          >
            <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-bind="name"
            ></InputText>
          </FormInputContainer>

          <FormInputContainer
            inputId="email"
            :error="errors.email"
            label="E-mail"
            required
            v-slot="{ errorClass, id }"
          >
            <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-bind="email"
            ></InputText>
          </FormInputContainer>

          <FormInputContainer
            inputId="age"
            :error="errors.age"
            label="Idade"
            required
            v-slot="{ errorClass, id }"
          >
            <InputText
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-bind="age"
            ></InputText>
          </FormInputContainer>

          <FormInputContainer
            inputId="password"
            :error="errors.password"
            label="Senha"
            required
            v-slot="{ errorClass, id }"
          >
            <Password
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-bind="password"
              type="password"
              :feedback="false"
              toggleMask
              inputClass="w-full"
            ></Password>
          </FormInputContainer>

          <FormInputContainer
            inputId="confirmedPassword"
            :error="errors.confirmedPassword"
            label="Confirmar Senha"
            required
            v-slot="{ errorClass, id }"
          >
            <Password
              :id="id"
              placeholder=""
              size="small"
              :class="errorClass"
              v-bind="confirmedPassword"
              v-model="confirmedPassword.value"
              :feedback="false"
              toggleMask
              type="password"
              inputClass="w-full"
            ></Password>
          </FormInputContainer>

          <Button class="mt-3 ml-3" style="width: fit-content" type="submit">Enviar</Button>
        </form>
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

.p-input-icon-left > i,
.p-input-icon-left > svg,
.p-input-icon-right > i,
.p-input-icon-right > svg {
  margin-top: -0.5rem !important;
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
