import VueTilt from 'vue3-tilt'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTilt);
});