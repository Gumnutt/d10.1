import { createApp } from "vue";
import CerTable from './components/CerTable.vue';
import CerProject from './components/CerProject.vue';

// Find all elements with the "#app" selector
const appElements = document.querySelectorAll('[id^="app"]');

// Create and mount the Vue app for each element with the "#app" selector
appElements.forEach((element, index) => {
  element.id = "app-" + index;
  createApp({
    components: {
      CerTable,
      CerProject
    }
  }).mount(element);
});
