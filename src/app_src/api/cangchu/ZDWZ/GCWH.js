import request from '@/frame_src/utils/request'

export function GetGCInfo(query) {
    return request({
      url: '/GCWH/GetGCInfo',
      method: 'get',
      params:query
    })
  }

  export function CreateGCInfo(data) {
    return request({
      url: '/GCWH/CreateGCInfo',
      method: 'post',
      data
    })
  }

  export function EditGCInfo(data) {
    return request({
      url: '/GCWH/EditGCInfo',
      method: 'post',
      data
    })
  }

  export function DelGCinfo(data) {
    return request({
      url: '/GCWH/DelGCinfo',
      method: 'post',
      data
    })
  }