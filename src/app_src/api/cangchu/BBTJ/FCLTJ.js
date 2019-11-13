import request from '@/frame_src/utils/request'
export function GetFCLInfo(query) {//单位物资查询接口
    return request({
        url: '/BBTJCX/GetFCLInfo',
        method: 'get',
        params: query
    })
}