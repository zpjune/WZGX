import request from '@/frame_src/utils/request'

export function GetCompositeInfo(query) {//单位物资查询接口
    return request({
      url: '/SWKC/GetCompositeInfo',
      method: 'get',
      params:query
    })
  }

  export function GetExportCompositeInfo(query) {//单位物资查询接口
    return request({
      url: '/SWKC/GetExportCompositeInfo',
      method: 'get',
      params:query
    })
  }