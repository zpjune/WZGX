import request from '@/frame_src/utils/request'
export function GetFCLInfo(query) {//发出量统计查询
    return request({
        url: '/BBTJCX/GetFCLInfo',
        method: 'get',
        params: query
    })
}