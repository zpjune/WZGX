import request from '@/frame_src/utils/request'

export function GetZDWZWHInfo(query) {
    return request({
      url: '/ZDWZWH/GetZDWZWHInfo',
      method: 'get',
      params:query
    })
  }

  export function CreateZDWZWHInfo(data) {
    return request({
      url: '/ZDWZWH/CreateZDWZWHInfo',
      method: 'post',
      data
    })
  }

  export function EditZDWZWHInfo(data) {
    return request({
      url: '/ZDWZWH/EditZDWZWHInfo',
      method: 'post',
      data
    })
  }

  export function DelZDWZWHInfo(data) {
    return request({
      url: '/ZDWZWH/DelZDWZWHInfo',
      method: 'post',
      data
    })
  }

  export function GetKCDDInfo(query) {
    return request({
      url: '/ZDWZWH/GetKCDDInfo',
      method: 'get',
      params:query
    })
  }