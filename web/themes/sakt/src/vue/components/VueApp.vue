<template>
  <div>
    <label for="componentSelect">Select a type:</label>
    <select id="componentSelect" v-model="selectedComponent" @input="">
      <option v-for="(type, index) in decodedTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>

    <br>

    <label for="dataSelect">Select a dataset:</label>
    <select id="dataSelect" v-model="selectedData" @change="updateData" >
      <option v-for="(display, index) in decodedDisplays" :key="display" :value="display" >
        {{ display }}
      </option>
    </select>

    <div>
      <component :is="selectedComponent" :data="updatedD != '' ? this.updatedD : structuredData" :options="graphOptions" :key="title" :style="customStyles"/>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>

<script>
import { reactive } from 'vue';
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Pie, Bar, Doughnut, PolarArea } from 'vue-chartjs'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default {
  data() {
    return {
      selectedComponent: this.type,
      selectedData: this.title,
      updatedD: '',
    };
  },
  props: {
    data:{
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    types: {
      type: String,
      default: ''
    },
    displays: {
      type: String,
      default: ''
    }
  },
  components: {
    Pie,
    Line,
    Bar,
    Doughnut,
    PolarArea,
  },
  computed:{
    decodedTypes(){
      return JSON.parse(this.types);
    },
    decodedDisplays(){
      return JSON.parse(this.displays);
    },
    structuredData(){
      return this.structuredObj(this.data, 'yes');
    },
    graphOptions() {
      return {
        responsive: true,
        maintainAspectRatio: true
      }
    },
    customStyles () {
      return {
        height: `${500}px`,
        position: 'relative'
      }
    }
  },
  methods: {
    async updateData() {
      try {
        const domain = window.location.origin; //get url origin
        var updatedPath = Object.keys(this.decodedDisplays).find(key => this.decodedDisplays[key] === this.selectedData); //get key from value
        const fetchUrl = `${domain}/${updatedPath}`; //make url name
        const response = await fetch(fetchUrl); // fetching data from url
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.updatedD = this.structuredObj(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    },
    structuredObj(unstrucData, x){
      if (x == "yes") {
        var data = JSON.parse(unstrucData);
      } else {
        var data = unstrucData;
      }

      const result = reactive({
        labels: [],
        datasets: [],
      });

      // collect keys that arent "id"
      const dynamicKeys = Object.keys(data[0]).filter(key => key !== 'id');
      // generate random colours for each dataset item.
      const setColours = data.map((item) => "#" + Math.floor(Math.random() * 16777215).toString(16));

      data.forEach((item) => {
        const { id, ...values } = item;
        result.labels.push(id);

        // loops each datakey,
        dynamicKeys.forEach(key => {
          const existingDataset = result.datasets.find(dataset => dataset.label === key);
          if (!existingDataset) {
            // if it doesn't exist in the dataset, create a new dataset with the key as the label
            const newDataset = {
              label: key,
              backgroundColor: setColours,
              data: [parseInt(values[key])],
            };
            result.datasets.push(newDataset);
          } else {
            // if it does exist, push the value to the data array
            existingDataset.data.push(parseInt(values[key]));
          }
        });
      });
      // console.log(data, result);
      return result;
    },
  },
}
</script>
