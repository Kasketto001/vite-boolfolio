import { createWebHistory, createRouter } from 'vue-router'
import AppSplash from './views/AppSplash.vue';
import AppAbout from './views/AppAbout.vue';
import AppSkills from './views/AppSkills.vue';
import AppCertifications from './views/AppCertifications.vue';
import AppContacts from './views/AppContacts.vue';

const routes = [
  {
    path: '/', 
    name: 'AppSplash', 
    component: AppSplash 
  },
  {
    path: '/about', 
    name: 'AppAbout', 
    component: AppAbout 
  },
  {
    path: '/certifications', 
    name: 'AppCertifications', 
    component: AppCertifications 
  },
  {
    path: '/skills', 
    name: 'AppSkills', 
    component: AppSkills 
  },
  {
    path: '/contacts', 
    name: 'AppContacts', 
    component: AppContacts 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
