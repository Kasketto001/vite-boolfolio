<template>
  <div>
    <Jumbotron></Jumbotron>
    <div class="container mt-5">
      <h2 class="text-white">All Projects</h2>
      <div v-if="loading" class="text-white">Loading...</div>
      <div v-else class="row">
        <div v-for="project in projects.data" :key="project.id" class="col-md-4 mb-4 d-flex">
          <div class="card flex-fill bg-dark text-white">
            <img class="card-img-top" :src="getImageUrl(project.thumb)" alt="Title" />
            <div class="card-body d-flex flex-column">
              <h4 class="card-title">{{ project.title }}</h4>
              <p class="card-text flex-grow-1">{{ project.description }}</p>
              <router-link :to="{ name: 'AppProject', params: { id: project.id } }" class="btn btn-primary mt-auto">
                View Project
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron.vue';

export default {
  name: 'AppSplash',
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000/storage/',
    };
  },
  components: {
    Jumbotron
  },
  props: {
    projects: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    getImageUrl(path) {
      return this.base_api_url + path;
    }
  },
  mounted() {
    console.log('AppSplash mounted with projects:', this.projects);
  }
};
</script>

<style>
</style>
