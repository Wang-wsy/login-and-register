// 由于我们的项目需要在不同环境下进行运行(开发，生产，测试等)，
// 这避免我们需要多次的去切换请求的地址以及相关的配置
const baseUrl = process.env.VUE_APP_BASE_API
const api = {
  state: {
    baseApi: baseUrl
  }
}

export default api
