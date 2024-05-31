import { createWebHistory, createRouter } from 'vue-router'
 
import AppSplash from './views/AppSplash.vue';
import About from './views/AppAbout.vue';
import Skills from './views/AppSkills.vue';
import Certifications from './views/AppCertifications.vue';
import Contacts from './views/AppContacts.vue';




const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/', name: 'AppSplash', component: AppSplash 
    }
  ],
})