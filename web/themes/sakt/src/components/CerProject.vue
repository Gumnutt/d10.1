<template>
  <div>
    <div v-for="(row, i) in currentProject" :key="i">
      <h3>{{ i }}</h3>
      <p>{{ row }}</p>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      projects: {
        type: String,
        required: true
      }
    },
    computed: {
      
      urlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const params = {};
        for (const [key, value] of urlParams) {
          params[key] = value;
        }
        return params;
      },
      currentProject() {
        const params = this.urlParams;
        const pid = params.pid;
        const projects = JSON.parse(this.projects);
        const project = projects.find(project => project.project_id === pid);
        return project;
      },
    }
  }
</script>