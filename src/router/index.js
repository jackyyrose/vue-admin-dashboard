import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/inventory', //'nested' menu
    component: Layout,
    redirect: '/inventory/product',
    name: 'Inventory',
    meta: {
      title: 'Inventory',
      icon: 'nested'
    },
    children: [
      {
        path: 'product',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Product',
        meta: { title: 'Product' ,icon: 'component'},
        children: [
          {
            path: 'item-list',
            component: () => import('@/views/nested/menu1/menu1-1/index'),
            name: 'Item-list',
            meta: { title: 'Item-list' }
          },

          {
            path: 'stock-take',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Stock-take',
            meta: { title: 'Stock-take' }
          }
        ]
      },
      {
        path: 'bundle',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Bundle',
        meta: { title: 'Bundle',icon: 'tree' }
      },
      {
        path: 'category',
        component: () => import('@/views/nested/menu3/index'),
        name: 'Category',
        meta: { title: 'Category',icon: 'tree-table' }
      }
    ]
  },

  {
    path: '/sales',
    component: Layout,
    redirect: '/sales/list',
    name: 'Sales',
    meta: { title: 'Sales Order', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/table/index'),
        meta: { title: 'List', icon: 'table' }
      },
      {
        path: 'backorder',
        name: 'Backorder',
        component: () => import('@/views/table/index'),
        meta: { title: 'Backorder', icon: 'lock' }
      }
    ]
  },

  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/service',
    name: 'Customer',
    meta: { title: 'Customer', icon: 'el-icon-s-custom' },
    children: [
      {
        path: 'service',
        name: 'Service',
        component: () => import('@/views/form/index'),
        meta: { title: 'Service', icon: 'form' },
        children: [
          {
            path: 'log',
            component: () => import('@/views/form/menu1'),
            name: 'Log',
            meta: { title: 'Log' }
          },

          {
            path: 'create',
            component: () => import('@/views/form/menu2'),
            name: 'Create',
            meta: { title: 'Create' }
          }
        ]
      },{
        path: 'b2b',
        name: 'B2b',
        component: () => import('@/views/form/b2b'),
        meta: { title: 'B2B', icon: 'form' }
      }
    ]
  },



  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://xxx.xxx.xxx.xxx',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
