import request from '@/frame_src/utils/request'

export function GetParentWLZList(query) {//获取账务库存界面父节点接口
    return request({
      url: '/ZWKC/GetParentWLZList',
      method: 'get',
      params:query
    })
  }

  export function GetChildrenList(query) {//用于懒加载账务库存子节点数据接口
    return request({
      url: '/ZWKC/GetChildrenList',
      method: 'get',
      params:query
    })
  }