<template>
  <div>
    <label for="componentSelect">Select a component:</label>
    <select id="componentSelect" v-model="selectedComponent" @input="">
      <option v-for="(type, index) in getTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>

    <br>

    <label for="dataSelect">Select a dataset:</label>
    <select id="dataSelect" v-model="selectedData" @input="updateComponent">
      <option v-for="(display, index) in getDisplays" :key="display" :value="display" >
        {{ display }}
      </option>
    </select>

    <!-- <Transition name="fade" mode="out-in">
      <h1  v-if="selectedComponent" :key="selectedComponent"> fade </h1>
    </Transition> -->
    <Transition name="fade">
      <div v-if="chosenComponent" :key="chosenComponent">
        <h1>{{ chosenComponent }}</h1>
        <div>
          <component :is="chosenComponent" :data="structuredObj" :options="graphOptions" :key="name" :style="customStyles"/>
        </div>
      </div>
    </Transition>
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
      selectedData: this.name,
      chosenComponent: this.type,
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
    getTypes(){
      return JSON.parse(this.types);
    },
    getDisplays(){
      return JSON.parse(this.displays);
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
    updateComponent() {
      setTimeout(() => {
        this.chosenComponent = this.getTypes[this.getIdIndex];
      }, 1000);
      console.log(this.chosenComponent );
    }
  },
}
</script>
