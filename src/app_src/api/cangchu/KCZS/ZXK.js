import request from '@/frame_src/utils/request'

export function GetDCKInfo(query) {//分库 资金查询
    return request({
      url: '/ZXK/GetDCKInfo',
      method: 'get',
      params:query
    })
  }

  export function GetDRKInfo(query) {//分库 资金查询
    return request({
      url: '/ZXK/GetDRKInfo',
      method: 'get',
      params:query
    })
  }

  export function GetTotalFK_JYWZ(query) {//分库 资金查询
    return request({
      url: '/ZXK/GetTotalFK_JYWZ',
      method: 'get',
      params:query
    })
  }

  export function GetDLFK_JYWZ(query) {//分库 资金查询
    return request({
      url: '/ZXK/GetDLFK_JYWZ',
      method: 'get',
      params:query
    })
  }
  export function GetFK_JYWZ(query) {//分库 资金查询
    return request({
      url: '/ZXK/GetFK_JYWZ',
      method: 'get',
      params:query
    })
  }


    export function GetFacStatus(query) {//平面图状态字符串查询 
    return request({
      url: '/ZXK/GetFacStatus',
      method: 'get',
      params:query
    })
  }
  export function GetZDWZCB(query) {//分库 重点物资储备 （暂时停用）
    return request({
      url: '/ZXK/GetZDWZCB',
      method: 'get',
      params:query
    })
  }
  export function getDetailZDWZCBTOTAL(query) {//分库 重点物资储备
    return request({
      url: '/ZXK/getDetailZDWZCBTOTAL',
      method: 'get',
      params:query
    })
  }
  export function getDetailZDWZCBTOTALDETAIL(query) {//分库 重点物资储备明细
    return request({
      url: '/ZXK/getDetailZDWZCBTOTALDETAIL',
      method: 'get',
      params:query
    })
  }
   export function getZDWZCRK(query) {//分库 重点物出入库 
    return request({
      url: '/ZXK/getZDWZCRK',
      method: 'get',
      params:query
    })
  }
  export function getZDWZCRKDetail(query) {//分库 重点物出入库明细 
    return request({
      url: '/ZXK/getZDWZCRKDetail',
      method: 'get',
      params:query
    })
  }
  export function GetStatusDetail(query) {//平面图状态查询
    return request({
      url: '/ZXK/GetStatusDetail',
      method: 'get',
      params:query
    })
  }

  export function GetFloatWindowFirstInfo(query) {//平面图悬浮窗第一层
    return request({
      url: '/ZXK/GetFloatWindowFirstInfo',
      method: 'get',
      params:query
    })
  }

  export function GetFloatWindowInfo(query) {//平面图第二层
    return request({
      url: '/ZXK/GetFloatWindowInfo',
      method: 'get',
      params:query
    })
  }

  export function GetGetFloatWindowDetailInfo(query) {//平面图悬浮窗查询
    return request({
      url: '/ZXK/GetGetFloatWindowDetailInfo',
      method: 'get',
      params:query
    })
  }


  export function GetWLCount(query) {//平面图悬浮窗查询
    return request({
      url: '/ZXK/GetWLCount',
      method: 'get',
      params:query
    })
  }

  export function GetCRKSL(query) {//分库实物出入库柱状图
    return request({
      url: '/ZXK/GetCRKSL',
      method: 'get',
      params:query
    })
  }
  export function getSWCRKDetail(query) {//分库实物出入库明细
    return request({
      url: '/ZXK/getSWCRKDetail',
      method: 'get',
      params:query
    })
  }
  