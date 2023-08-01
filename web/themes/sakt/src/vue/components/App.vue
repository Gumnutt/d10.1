<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
import { reactive } from 'vue';
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'

exportingInit(Highcharts);

export default {
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
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: this.type, // Replace 'chartType' with the desired chart type (e.g., 'line', 'bar', 'pie', etc.)
          // Additional chart-wide options can be added here
        },
        title: {
          text: this.name,
          align: 'center',
          // Additional title options can be added here
        },
        subtitle: {
          text: 'Chart Subtitle',
          align: 'center',
          // Additional subtitle options can be added here
        },
        xAxis: {
          title: {
            text: 'XC-axis Title',
          },
          categories: this.getId(), // Replace with your X-axis categories
          // Additional X-axis options can be added here
        },
        yAxis: {
          title: {
            text: 'Y-axis Title',
          },
          // Additional Y-axis options can be added here
        },
        legend: {
          enabled: true,
          // Additional legend options can be added here
        },
        tooltip: {
          enabled: true,
          // Additional tooltip options can be added here
        },
        plotOptions: {
          // Additional plot options can be added here
        },
        series: this.getSeries()
        // Additional chart-wide options can be added here
      },
    };
  },
  computed:{
    structuredObj(){
      var data = JSON.parse(this.data)
      const result = reactive({
        labels: [],
        datasets: [],
      });
      const dynamicKeys = Object.keys(data[0]).filter(key => key !== 'id');
      const setColours = data.map((item) => "#" + Math.floor(Math.random() * 16777215).toString(16));
      data.forEach((item) => {
        const { id, ...values } = item;
        result.labels.push(id);
        // Create a function to generate a random hex color
        const getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
        dynamicKeys.forEach(key => {
          const existingDataset = result.datasets.find(dataset => dataset.label === key);
          if (!existingDataset) {
            const newDataset = {
              label: key,
              backgroundColor: setColours, // Start with a single random color
              data: [parseInt(values[key])],
            };
            result.datasets.push(newDataset);
          } else {
            existingDataset.data.push(parseInt(values[key]));
            existingDataset.backgroundColor.push(getRandomColor());
          }
        });
      });
      return result;
    },
  },
  methods: {
    getId(){
      var data = JSON.parse(this.data)
      return data.map(item => item.id)
    },
    getSeries() {
      var data = JSON.parse(this.data);
      var idKey = "id";
      var series = [];

      for (var key in data[0]) {
        if (key !== idKey) {
          var seriesObj = {
            name: key,
            data: data.map(item => parseFloat(item[key].replace(/,/g, ''))),
          };
          series.push(seriesObj);
        }
      }

      return series.map(seriesObj => ({ ...seriesObj }));
    }
  }
}
</script>
