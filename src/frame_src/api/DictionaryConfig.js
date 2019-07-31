import request from '@/frame_src/utils/request'
export function getLeftTree(query) { // 查询用户
  return request({
    url: '/DictionaryConfig/getLeftTree',
    method: 'get',
    params: query
  })
}

export function editNode(data){
    return request({
        url:'/DictionaryConfig/editNode',
        method:'post',
        data
    })
}

export function createNode(data){
  return request({
      url:'/DictionaryConfig/createNode',
      method:'post',
      data
  })
}

export function delNode(data){
  return request({
      url:'/DictionaryConfig/delNode',
      method:'post',
      data
  })
}