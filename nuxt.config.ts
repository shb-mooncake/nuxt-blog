// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  target: "static",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "@element-plus/nuxt", "nuxt-icon",'@pinia/nuxt',
  '@pinia-plugin-persistedstate/nuxt','dayjs-nuxt'],
  elementPlus: {
    /** Options */
  },
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
  runtimeConfig: {
    apiSecret: "123",

    public: {
      baseUrl: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        /* redis连接器选项 */
        port: 6379, // Redis端口
        host: "127.0.0.1", // Redis主机
        username: "", // 需要Redis >= 6
        password: "",
        db: 0, // 默认为0
        tls: {} // tls/ssl
      }
    }
  }
});
