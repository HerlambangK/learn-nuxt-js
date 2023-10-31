// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    classSuffix: "",
  },

  tailwindcss: { exposeConfig: true },
  headlessui: { prefix: "H" },
  app: {
    head: {
      title: "Nuxt 3",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/Herlambang.jpg",
        },
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
        {
          rel: "preconnect",
          href: "https://rsms.me",
        },
      ],
    },
  },
});
