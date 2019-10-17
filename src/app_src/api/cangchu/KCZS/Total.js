import request from '@/frame_src/utils/request'

export function GetKCZJ(query) {//总库存 资金查询
    return request({
      url: '/Total/GetKCZJ',
      method: 'get',
      params:query
    })
  }
export function GetSWKC(query) {//总库存 实物库存查询
    return request({
      url: '/Total/GetSWKC',
      method: 'get',
      params:query
    })
  }
  export function GetJYWZ(query) {//总库存 积压物资查询
    return request({
      url: '/Total/GetJYWZ',
      method: 'get',
      params:query
    })
  }
  export function GetCRKJE(query) {//总库存 积压物资查询
    return request({
      url: '/Total/GetCRKJE',
      method: 'get',
      params:query
    })
  }