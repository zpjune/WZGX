import request from '@/frame_src/utils/request'

export function GetWLTotalInfo(query) {//单位物资查询接口
    return request({
      url: '/SWKC/GetWLTotalInfo',
      method: 'get',
      params:query
    })
  }

  export function GetWLDetail(query) {//单位物资查询接口
    return request({
      url: '/SWKC/GetWLDetail',
      method: 'get',
      params:query
    })
  }