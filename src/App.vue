<template>
  <main>
    <RouterView v-slot="{ Component }">
      <component :is="Component" :projects="projects" :loading="loading"></component>
    </RouterView>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_projects_url: '/api/projects',
      projects: {
        data: []
      },
      loading: true
    };
  },
  methods: {
    callApi(url) {
      console.log('Calling API:', url);
      axios
        .get(url)
        .then(response => {
          console.log('API Response:', response.data);
          if (response.data && response.data.projects) {
            this.projects = response.data.projects;
          } else {
            console.error('Unexpected API response structure:', response.data);
          }
          this.loading = false;
        })
        .catch(err => {
          console.error('API call failed:', err);
          this.loading = false;
        });
    }
  },
  mounted() {
    const url = this.base_api_url + this.base_projects_url;
    this.callApi(url);
  }
};
</script>

<style>

</style>
