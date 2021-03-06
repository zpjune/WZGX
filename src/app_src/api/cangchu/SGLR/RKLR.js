import request from '@/frame_src/utils/request'

export function createRKInfo(data) {
    return request({
      url: '/RKInfo/CreateRKInfo',
      method: 'post',
      data
    })
  }
  
  export function delRKInfo(data) {
    return request({
      url: '/RKInfo/DeleteRKInfo',
      method: 'post',
      data
    })
  }

  export function updateRKInfo(data) {
    return request({
      url: '/RKInfo/UpdateRKInfo',
      method: 'post',
      data
    })
  }

  export function getRKInfo(query) {
    return request({
      url: '/RKInfo/GetRKInfo',
      method: 'get',
      params:query
    })
  }