import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WqRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch: (err: any) => any
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch: (err: any) => any
}

export interface AxiosRequestConfigExtend extends AxiosRequestConfig {
  interceptors?: WqRequestInterceptors
  showLoading?: boolean
}
