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


    export function GetFacStatus(query) {//总库存 资金查询 
    return request({
      url: '/ZXK/GetFacStatus',
      method: 'get',
      params:query
    })
  }
  export function GetZDWZCB(query) {//总库存 重点物资储备 
    return request({
      url: '/ZXK/GetZDWZCB',
      method: 'get',
      params:query
    })
  }
   export function getZDWZCRK(query) {//总库存 重点物出入库 
    return request({
      url: '/ZXK/getZDWZCRK',
      method: 'get',
      params:query
    })
  }
  export function getZDWZCRKDetail(query) {//总库存 重点物出入库明细 
    return request({
      url: '/ZXK/getZDWZCRKDetail',
      method: 'get',
      params:query
    })
  }