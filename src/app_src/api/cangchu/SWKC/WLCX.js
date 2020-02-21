import request from '@/frame_src/utils/request'

export function GetWLTotalInfo(query) {//物料查询接口
    return request({
      url: '/SWKC/GetWLTotalInfo',
      method: 'get',
      params:query
    })
  }
  export function GetExportWLTotalInfo(query) {//物料查询导出接口
    return request({
      url: '/SWKC/GetExportWLTotalInfo',
      method: 'get',
      params:query
    })
  }

  export function GetWLDetail(query) {//物料查询详情接口
    return request({
      url: '/SWKC/GetWLDetail',
      method: 'get',
      params:query
    })
  }