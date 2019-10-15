import request from '@/frame_src/utils/request'

export function GetFacInfo(query) {//单位物资查询接口
    return request({
      url: '/SWKC/GetFacInfo',
      method: 'get',
      params:query
    })
  }