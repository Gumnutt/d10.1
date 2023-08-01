<template>
  <div id="container">
    <div id="mapContainer"></div>
    <!-- <div id="mapData">
      <pre>{{ mapData }}</pre>
    </div> -->
  </div>
</template>

<script>
import * as tj from "@mapbox/togeojson"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
export default {
  props: {
    kmldata: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      map: null,
      center: { lon: -141, lat: 38 },
    }
  },
  methods: {
    setupLeafletMap() {
      this.map = L.map("mapContainer").setView(this.center, 10)
      L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution:
          'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        accessToken: "pk.eyJ1IjoiZ3VtbnV0IiwiYSI6ImNsa3FieHVhbTIyOGkzc29hYWU3Y2YxaGQifQ.JumO6z639QRIQLsVaGZvJw",
      }).addTo(this.map)

      // add the geojson layer
      let layer = L.geoJSON(this.mapData, {
        onEachFeature: this.onEachFeature,
        style: this.styleMap,
      }).addTo(this.map)

      // fit the map to the geojson layer
      this.map.fitBounds(layer.getBounds())
      this.map.setZoom(10)
    },
  },
  computed: {
    mapData() {
      const dom = new DOMParser().parseFromString(this.kmldata, "text/xml")
      const geojson = tj.kml(dom)
      return geojson
    },
  },
  mounted() {
    this.setupLeafletMap()
  },
}
</script>

<style scoped>
#mapContainer {
  width: 100%;
  aspect-ratio: 16/9;
}
</style>
