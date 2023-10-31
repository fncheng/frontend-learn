import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  // baseURL: 'http://127.0.0.1:3000/',
  baseURL: '',
  timeout: 6000,
})

service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Message.error('登录凭证错误！')
    }
    return Promise.reject(error)
  }
)

export default service
