import Request from './core/request'

interface IDataType {
  data: any
}
export async function login(options: any = {}) {
  const res = await Request.get<IDataType>('/home/multidata', options)
  return res
}
