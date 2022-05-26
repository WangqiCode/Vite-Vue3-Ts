import { App } from 'vue'

import { login } from '../login'


let services:any = {
  login
}

export default function install(app: App) {
  app.config.globalProperties.$getService = async function (name: string) {
    let service = await services[name]()
    if (!service) {
      throw new Error(`service [${name}] not found`)
    }
    return service
  }
}
