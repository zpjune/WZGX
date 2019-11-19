import request from '@/frame_src/utils/request'
export function GetJYWZTJInfo(query) {//积压量统计查询
    return request({
        url: '/BBTJCX/GetJYWZTJInfo',
        method: 'get',
        params: query
    })
}