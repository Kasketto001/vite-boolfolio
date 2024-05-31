<template>
  <div>
    <Jumbotron></Jumbotron>
    <div class="container mt-5">
      <h2>All Projects</h2>
      <div v-if="loading">Loading...</div>
      <div v-else class="row">
        <div v-for="project in projects.data" :key="project.id" class="col-md-4 mb-4">
          <div class="card">
            <img class="card-img-top" :src="project.imageUrl" alt="Title" />
            <div class="card-body">
              <h4 class="card-title">{{ project.title }}</h4>
              <p class="card-text">{{ project.description }}</p>
            </div>
          </div>
          <!-- {{ project.title }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from './components/Jumbotron.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Jumbotron
  },
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
      axios
        .get(url)
        .then(response => {
          // console.log(response.data);
          this.projects = response.data.projects;
          this.loading = false;
        })
        .catch(err => {
          console.error(err);
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
/* Aggiungi eventuali stili qui */
</style>
