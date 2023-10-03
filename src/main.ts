/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import PanelMenu from 'primevue/panelmenu'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('Breadcrumb', Breadcrumb)
app.component('Avatar', Avatar)
app.component('PanelMenu', PanelMenu)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Divider', Divider)
app.component('InputText', InputText)
app.component('Dropdown', Dropdown)
app.component('RadioButton', RadioButton)

app.mount('#app')
