import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-dashboard/table/list',
    method: 'get',
    params
  })
}
