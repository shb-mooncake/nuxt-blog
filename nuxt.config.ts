// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  target: 'static',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content",'@element-plus/nuxt','nuxt-icon'],
  elementPlus: { /** Options */ },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
      extensions: [".vue"],
    },
  ],
  imports: {
    dirs: [
      // 扫描顶级模块
      "composables",
      // ... 或扫描带有特定名称和文件扩展名的一级嵌套模块
      "composables/*/index.{ts,js,mjs,mts}",
      // ... 或扫描给定目录中的所有模块
      "composables/**",
    ],
  },
});
