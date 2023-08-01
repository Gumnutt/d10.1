<template>
  <div>
    <label for="componentSelect">Select a component:</label>
    <select id="componentSelect" v-model="selectedComponent">
      <option v-for="(type, index) in getTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>
    <div v-if="selectedComponent">
      <component :is="selectedComponent" :data="structuredObj" :options="graphOptions" :key="name" :style="customStyles"/>
    </div>
  </div>
</template>

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
    name: {
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
    getTypes(){
      return JSON.parse(this.types);
    },
    getIdIndex(){
      return this.getTypes.indexOf(this.type)
    },
    structuredObj(){
      var data = JSON.parse(this.data);
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

      return result;

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

  },
}
</script>
