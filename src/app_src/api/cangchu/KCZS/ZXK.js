import request from '@/frame_src/utils/request'

export function GetDCKInfo(query) {//总库存 资金查询
    return request({
      url: '/ZXK/GetDCKInfo',
      method: 'get',
      params:query
    })
  }

  export function GetDRKInfo(query) {//总库存 资金查询
    return request({
      url: '/ZXK/GetDRKInfo',
      method: 'get',
      params:query
    })
  }
  export function GetFK_JYWZ(query) {//总库存 资金查询
    return request({
      url: '/ZXK/GetFK_JYWZ',
      method: 'get',
      params:query
    })
  }