import request from '@/frame_src/utils/request'

export function GetBGYInfo(query) {
    return request({
      url: '/BGYWH/GetBGYInfo',
      method: 'get',
      params:query
    })
  }

  export function CreateBGYInfo(data) {
    return request({
      url: '/BGYWH/CreateBGYInfo',
      method: 'post',
      data
    })
  }

  export function EditBGYInfo(data) {
    return request({
      url: '/BGYWH/EditBGYInfo',
      method: 'post',
      data
    })
  }

  export function DelBGYInfo(data) {
    return request({
      url: '/BGYWH/DelBGYInfo',
      method: 'post',
      data
    })
  }

  export function GetGCInfo(query) {
    return request({
      url: '/BGYWH/GetGCInfo',
      method: 'get',
      params:query
    })
  }

  export function GetCKHInfo(query) {
    return request({
      url: '/BGYWH/GetCKHInfo',
      method: 'get',
      params:query
    })
  }