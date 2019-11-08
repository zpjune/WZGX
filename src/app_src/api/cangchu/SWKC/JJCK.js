import request from '@/frame_src/utils/request'

export function GetCKInfo(query) {//单位物资查询接口
    return request({
        url: '/JJCK/GetCKInfo',
        method: 'get',
        params: query
    })
}

export function CreateJJCKInfo(data) {
    return request({
        url: '/JJCK/CreateJJCKInfo',
        method: 'post',
        data
    })
}

export function UpdateJJCKInfo(data) {
    return request({
        url: '/JJCK/UpdateJJCKInfo',
        method: 'post',
        data
    })
}
export function DelJJCKInfo(data) {
    return request({
        url: '/JJCK/DelJJCKInfo',
        method: 'post',
        data
    })
}
export function StartProcess(data) {
    return request({
        url: '/JJCK/StartProcess',
        method: 'post',
        data
    })
}
export function Recall(data) {
    return request({
        url: '/JJCK/Recall',
        method: 'post',
        data
    })
}

export function Approval(data) {
    return request({
        url: '/JJCK/Approval',
        method: 'post',
        data
    })
}
export function CancelRK(data) {
    return request({
        url: '/JJCK/CancelRK',
        method: 'post',
        data
    })
}
export function GetOrgInfo(query) {//单位物资查询接口
    return request({
      url: '/JJCK/GetOrgInfo',
      method: 'get',
      params:query
    })
  }

  export function GetKCDDInfo(query) {//单位物资查询接口
    return request({
      url: '/JJCK/GetKCDDInfo',
      method: 'get',
      params:query
    })
  }

  export function GetCodeOptions(query) {//单位物资查询接口
    return request({
      url: '/DictionaryConfig/GetCodeOptions',
      method: 'get',
      params:query
    })
  }
