import request from '@/frame_src/utils/request'

export function GetFacMoney(query) {//单位资金查询接口
    return request({
      url: '/ZWKC/GetFacMoney',
      method: 'get',
      params:query
    })
  }