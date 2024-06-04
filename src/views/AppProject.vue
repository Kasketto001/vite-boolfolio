<template>
    <div class="project-detail-container">
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else-if="error" class="alert-danger">{{ error }}</div>
      <div v-else class="project-content">
        <h2 class="project-title">{{ project.title }}</h2>
        <p class="project-description">{{ project.description }}</p>
        <div class="image">
          <img :src=" ' http://127.0.0.1:8000/storage/' + project.thumb" alt="Project Image" />
          <div class="on-hover-contents">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        project: null,
        loading: true,
        error: null,
      };
    },
    methods: {
      fetchProject(id) {
        axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
          .then(response => {
            this.project = response.data.project;
            this.loading = false;
          })
          .catch(error => {
            this.error = error.response && error.response.data.message
              ? error.response.data.message
              : 'An error occurred';
            this.loading = false;
          });
      }
    },
    mounted() {
      const projectId = this.$route.params.id;
      this.fetchProject(projectId);
    }
  };
  </script>
  
  <style>
  body {
    background-color: #121212;
    color: #e0e0e0;
  }
  
  .navbar {
    background-color: #1f1f1f;
  }
  
  .navbar .nav-link,
  .navbar .navbar-brand,
  .navbar-toggler-icon {
    color: #e0e0e0;
  }
  
  .navbar .dropdown-menu {
    background-color: #1f1f1f;
    border: none;
  }
  
  .navbar .dropdown-item {
    color: #e0e0e0;
  }
  
  .navbar .dropdown-item:hover {
    background-color: #333333;
  }
  
  .project-detail-container {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background-color: #1f1f1f;
    border-radius: 8px;
  }
  
  .loading,
  .alert-danger {
    text-align: center;
    padding: 20px;
  }
  
  .project-content {
    text-align: center;
  }
  
  .project-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .project-description {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .image {
    background-size: contain;
    width: 500px;
    height: 500px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
  }
  
  .image img {
    border-radius: 50px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .on-hover-contents {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #121212;
  }
  
  .image:hover {
    transition: 0.5s;
    background-color: rgb(255, 236, 131);
  }
  
  .image:hover .on-hover-contents {
    display: block;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  
  .alert-danger {
    background-color: #d32f2f;
    color: #ffffff;
  }
  </style>
  