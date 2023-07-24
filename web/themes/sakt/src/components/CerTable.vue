<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(value, key) in tableData[0]" :key="key">{{ normaliseTitle(key) }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in tableData" :key="i">
          <td v-for="(value, key) in row" :key="key">
            <p v-html="value"></p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      required: true,
    },
  },
  methods: {
    parseData() {
      return JSON.parse(this.data)
    },
    normaliseTitle(title) {
      console.log(title)
      return title.replace(/_/g, " ")
    },
  },
  computed: {
    tableData() {
      const requiredColumns = ["project_proponent", "project_name", "project_id", "project_location", "project_location_postcode"]
      const data = this.parseData()
      const filteredData = data.map((row) => {
        return Object.keys(row)
          .filter((key) => requiredColumns.includes(key))
          .reduce((obj, key) => {
            obj[key] = row[key]
            row.project_name = `<a href="/project?pid=${row.project_id}">${row.project_name}</a>`
            return obj
          }, {})
      })
      return filteredData
    },
    builtTitle() {
      this.tableData.forEach((row) => {
        row.project_name = `<a href="/project/${row.project_id}">${row.project_name}</a>`
      })
      return this.tableData
    },
  },
}
</script>
