<template>
  <table class="mini">
    <tbody>
      <tr v-for="(row, i) in parseData" :key="i">
        <td>{{ this.normaliseTitle(i) }}</td>
        <td>{{ row }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default{
    props: {
      data: {
        type: String,
        required: true,
      },
    },
    computed: {
      parseData() {
        console.log(this.data);
        return JSON.parse(this.data)
      },
    },
    methods: {
      normaliseTitle(title) {
        // console.log(title)
        return title.replace(/_/g, " ")
      },
    },
  }
</script>
