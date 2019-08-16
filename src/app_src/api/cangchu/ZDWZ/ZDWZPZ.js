import request from '@/frame_src/utils/request'

export function GetZDWZPZInfo(query) {
    return request({
      url: '/ZDWZPZ/GetZDWZPZInfo',
      method: 'get',
      params:query
    })
  }

  export function CreateZDWZPZInfo(data) {
    return request({
      url: '/ZDWZPZ/CreateZDWZPZInfo',
      method: 'post',
      data
    })
  }

  export function EditZDWZPZInfo(data) {
    return request({
      url: '/ZDWZPZ/EditZDWZPZInfo',
      method: 'post',
      data
    })
  }

  export function DelZDWZPZinfo(data) {
    return request({
      url: '/ZDWZPZ/DelZDWZPZinfo',
      method: 'post',
      data
    })
  }