import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-admin-dashboard/article/list',
    method: 'get',
    params: query
  })
}


