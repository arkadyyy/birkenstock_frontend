import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.css";
import { createPinia } from 'pinia'


const pinia = createPinia()


const customDarkTheme = {
  dark:false,
  colors: {
    background: "#fff",
    surface: "#fff",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  
  },
};


 const vuetify =  createVuetify({

  theme: {
  
    defaultTheme: "customDarkTheme",
    themes: {
      customDarkTheme,
      
    },
  },
  components,
  directives,
});


// const vuetify = createVuetify({

//   // blueprint : md1
// })




createApp(App)
.use(pinia)
.use(vuetify)
  .use(router)
  
  .mount('#app')
