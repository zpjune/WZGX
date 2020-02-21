import request from '@/frame_src/utils/request'

export function GetCompositeInfo(query) {//综合查询接口
    return request({
      url: '/ZWKC/GetCompositeInfo',
      method: 'get',
      params:query
    })
  }

  export function GetExportCompositeInfo(query) {//综合查询导出
    return request({
      url: '/ZWKC/GetExportCompositeInfo',
      method: 'get',
      params:query
    })
  }