import request from '@/frame_src/utils/request'

export function GetKCDDInfo(query) {
    return request({
      url: '/KCDDWH/GetKCDDInfo',
      method: 'get',
      params:query
    })
  }

  export function GetDWInfo(query) {
    return request({
      url: '/KCDDWH/GetDWInfo',
      method: 'get',
      params:query
    })
  }
  export function CreateKCDDInfo(data) {
    return request({
      url: '/KCDDWH/CreateKCDDInfo',
      method: 'post',
      data
    })
  }

  export function EditKCDDInfo(data) {
    return request({
      url: '/KCDDWH/EditKCDDInfo',
      method: 'post',
      data
    })
  }

  export function DelKCDDinfo(data) {
    return request({
      url: '/KCDDWH/DelKCDDinfo',
      method: 'post',
      data
    })
  }