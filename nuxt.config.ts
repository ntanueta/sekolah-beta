// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  // add module 
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

  buildModules: [],
  tailwindcss: {
    cssPath: '~/asset/tailwind.css',
    configPath: '~/tailwind.config.ts',
  },

  pwa: {
    manifest: {
      name: "sekolah-beta",
      short_name: "sekolahbeta",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icon: {
        src: "/public/images.png",
        sizes: "96 x96",
        type: "image/png"
      },
    }
  }
});
