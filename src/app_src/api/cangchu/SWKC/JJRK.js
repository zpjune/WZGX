import request from '@/frame_src/utils/request'

export function GetRKInfo(query) {//单位物资查询接口
    return request({
        url: '/JJRK/GetRKInfo',
        method: 'get',
        params: query
    })
}

export function CreateJJRKInfo(data) {
    return request({
        url: '/JJRK/CreateJJRKInfo',
        method: 'post',
        data
    })
}

export function UpdateJJRKInfo(data) {
    return request({
        url: '/JJRK/UpdateJJRKInfo',
        method: 'post',
        data
    })
}
export function DelJJRKInfo(data) {
    return request({
        url: '/JJRK/DelJJRKInfo',
        method: 'post',
        data
    })
}
export function StartProcess(data) {
    return request({
        url: '/JJRK/StartProcess',
        method: 'post',
        data
    })
}
export function Recall(data) {
    return request({
        url: '/JJRK/Recall',
        method: 'post',
        data
    })
}

export function Approval(data) {
    return request({
        url: '/JJRK/Approval',
        method: 'post',
        data
    })
}
export function CancelRK(data) {
    return request({
        url: '/JJRK/CancelRK',
        method: 'post',
        data
    })
}
export function GetOrgInfo(query) {//单位物资查询接口
    return request({
      url: '/JJRK/GetOrgInfo',
      method: 'get',
      params:query
    })
  }

  export function GetKCDDInfo(query) {//单位物资查询接口
    return request({
      url: '/JJRK/GetKCDDInfo',
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

  export function BGYUpdate(data) {//单位物资查询接口
    return request({
      url: '/JJRK/BGYUpdate',
      method: 'post',
      data
    })
  }
  export function BGYSendForm(data) {//单位物资查询接口
    return request({
      url: '/JJRK/BGYSendForm',
      method: 'post',
      data
    })
  }


  export function GetWLInfo(query) {//单位物资查询接口
    return request({
      url: '/JJRK/GetWLInfo',
      method: 'get',
      params:query
    })
  }


