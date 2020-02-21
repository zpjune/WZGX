import request from '@/frame_src/utils/request'

export function GetFacMoney(query) {//单位资金查询接口
    return request({
      url: '/ZWKC/GetFacMoney',
      method: 'get',
      params:query
    })
  }

  export function GetExportsFacMoney(query) {//单位资金导出接口
    return request({
      url: '/ZWKC/GetExportsFacMoney',
      method: 'get',
      params:query
    })
  }