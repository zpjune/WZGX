import request from '@/frame_src/utils/request'

export function createCKInfo(data) {
    return request({
      url: '/CKInfo/CreateCKInfo',
      method: 'post',
      data
    })
  }
  
  export function delCKInfo(data) {
    return request({
      url: '/CKInfo/DeleteCKInfo',
      method: 'post',
      data
    })
  }

  export function updateCKInfo(data) {
    return request({
      url: '/CKInfo/UpdateCKInfo',
      method: 'post',
      data
    })
  }

  export function getCKInfo(query) {
    return request({
      url: '/CKInfo/GetCKInfo',
      method: 'get',
      params:query
    })
  }