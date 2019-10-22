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
  export function GetCRKJE(query) {//总库存 出入库金额
    return request({
      url: '/Total/GetCRKJE',
      method: 'get',
      params:query
    })
  }
  export function getCRKDetail(query) {//总库存 出入库金额明细
    return request({
      url: '/Total/getCRKDetail',
      method: 'get',
      params:query
    })
  }
  export function getBGYGZL(query) {//总库存 保管员工作量
    return request({
      url: '/Total/getBGYGZL',
      method: 'get',
      params:query
    })
  }
  export function getBGYGZLDetail(query) {//总库存 保管员工作量明细
    return request({
      url: '/Total/getBGYGZLDetail',
      method: 'get',
      params:query
    })
  }
  export function getZDWZCB(query) {//总库存 重点物资储备
    return request({
      url: '/Total/getZDWZCB',
      method: 'get',
      params:query
    })
  }