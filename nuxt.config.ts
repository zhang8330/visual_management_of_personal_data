// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  //初始化样式
  // css:["~/assets/css/base.scss"],
  //
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@use "~/assets/css/base.scss" as *;',
        }
      }
    }
  },
  runtimeConfig: {
    //只能在服务端获取
    isServer: "服务端",
    //public既能在客户端获取，也能在服务端获取
    public: {
      baseURL: "localhost:8080"

    }
  },
  modules: ['@element-plus/nuxt'],
})
