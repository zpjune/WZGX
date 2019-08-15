import request from '@/frame_src/utils/request'

export function GetParentWLZList(query) {
    return request({
      url: '/WLZWH/GetParentWLZList',
      method: 'get',
      params:query
    })
  }


  export function GetChildrenWLZList(query) {
    return request({
      url: '/WLZWH/GetChildrenWLZList',
      method: 'get',
      params:query
    })
  }
  
  export function editNode(data) {
    return request({
      url: '/WLZWH/editNode',
      method: 'post',
      data
    })
  }


  export function getDLOptions(query) {
    return request({
      url: '/WLZWH/getDLOptions',
      method: 'get',
      params:query
    })
  }
  export function getZLOptions(query) {
    return request({
      url: '/WLZWH/getZLOptions',
      method: 'get',
      params:query
    })
  }
  export function getXLOptions(query) {
    return request({
      url: '/WLZWH/getXLOptions',
      method: 'get',
      params:query
    })
  }
  


  export function createNode(data) {
    return request({
      url: '/WLZWH/createNode',
      method: 'post',
      data
    })
  }


  export function delNode(query) {
    return request({
      url: '/WLZWH/delNode',
      method: 'get',
      params:query
    })
  }

