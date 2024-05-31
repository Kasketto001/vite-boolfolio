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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron.vue';

export default {
  name: 'AppSplash',
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
  mounted() {
    console.log('AppSplash mounted with projects:', this.projects);
  }
};
</script>

<style>

</style>
