import { defineNuxtPlugin } from '#app';
import Particles from "vue3-particles";


export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.use(Particles)
  })