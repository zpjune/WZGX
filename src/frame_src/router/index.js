import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('frame_src/views/login/index'), hidden: true },
  { path: '/authredirect', component: _import('frame_src/views/login/authredirect'), hidden: true },
  { path: '/404', component: _import('frame_src/views/errorPage/404'), hidden: true },
  { path: '/401', component: _import('frame_src/views/errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('frame_src/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: '首页', icon: 'home', noCache: true }
    }, { path: '/userinfoViews/user-password-manager', name: '修改密码', meta: { title: '修改密码', icon: 'home', noCache: true }, component: _import('frame_src/views/sysconfig/userinfoViews/userPasswordManager'), hidden: true },
    {
      path: '/noticeViews/noticelist',
      component: _import('frame_src/views/noticeViews/index'),
      name: '公告列表', meta: { title: '公告列表', icon: 'home', noCache: true },
      hidden: true
    }]
  },
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
