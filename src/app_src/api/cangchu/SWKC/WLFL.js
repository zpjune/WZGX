import request from '@/frame_src/utils/request'

export function GetParentList(query) {//物料分类查询父节点接口
    return request({
      url: '/SWKC/GetParentList',
      method: 'get',
      params:query
    })
  }

  export function GetChildrenList(query) {//物料分类查询子节点接口
    return request({
      url: '/SWKC/GetChildrenList',
      method: 'get',
      params:query
    })
  }