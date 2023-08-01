import { createApp } from "vue";
import App from "./components/App.vue";
import HighchartsVue from 'highcharts-vue'

createApp({
  components: {
    App
  }
}).use(HighchartsVue).mount('#app');
