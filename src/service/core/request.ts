import axios from 'axios'
const { VITE_BASE_URL } = import.meta.env
// import { LoadingOptionsResolved } from 'element-plus/lib/components/loading/src/types'
import type { AxiosInstance } from 'axios'
import type { WqRequestInterceptors, AxiosRequestConfigExtend } from './types'

class WqRequest {
  instance: AxiosInstance
  interceptors?: WqRequestInterceptors
  // loading?: LoadingOptionsResolved | any
  showLoading: boolean

  constructor(config: AxiosRequestConfigExtend) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true
    // 针对实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
    // 所有的拦截器
    this.instance.interceptors.request.use(
      res => {
        if (this.showLoading) {
          // this.loading = ElLoading.service({ lock: true, text: '加载中🚗💨' })
        }
        return res
      },
      err => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      res => {
        // this.loading?.close()
        return res.data.data
      },
      err => {
        switch (err.response.state) {
          case 404:
            console.log('404错误')
            break
        }
        // this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: AxiosRequestConfigExtend): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance.request<any, T>(config).then(res => {
        resolve(res)
      })
    })
  }

  get<T>(url: string, params: any) {
    let opt: AxiosRequestConfigExtend = {
      url,
      method: 'GET',
      params
    }
    return this.request<T>(opt)
  }

  post<T>(url: string) {
    let options: AxiosRequestConfigExtend = {
      url,
      method: 'POST'
    }
    return this.request<T>(options)
  }
}

let Request: WqRequest = new WqRequest({
  baseURL: VITE_BASE_URL,
  timeout: 3000,
  showLoading: true,
  interceptors: {
    requestInterceptors: config => {
      // const token = ''
      // if (token) {
      //   config.headers!.Authorization = `Bearer ${token}`
      // }
      return config
    },
    requestInterceptorsCatch: err => {
      return err
    },
    responseInterceptors: config => {
      return config
    },
    responseInterceptorsCatch: err => {
      return err
    }
  }
})

export default Request
