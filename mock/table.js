const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    'id|+1': 1001,
    memo: '@sentence(10, 20)',
    'status|1': ['open', 'approved', 'invoiced'],
    customer: '@first',
    txn_time: '@datetime',
    'amount|50-3000.2': 1,
    'delivery_method|1': ['pickup', 'delivery']
  }]
})

module.exports = [
  {
    url: '/vue-admin-dashboard/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
