
const routes = [
  {
    path: '/',
    component: () => import('layouts/google-photos.vue'),
    meta: {
      breadcrumb: { label: 'Home', icon: 'home' }
    },
    children: [
      // { path: '', component: () => import('pages/Index.vue') }
      {
        path: '',
        // path: '',
        component: () => import('@apps/root/index'),
        meta: {
          breadcrumb: { label: 'Index', icon: 'widgets', app: 'root' }
        }

      },
      {
        path: '/munin',
        // path: '',
        component: () => import('@apps/munin/index'),
        meta: {
          breadcrumb: { label: 'Munin', icon: 'widgets', app: 'munin' }
        },

        children: [
          {
            path: ':host',
            name: 'Host',
            component: () => import('@apps/munin/pages/host'),
            meta: {
              breadcrumb: { label: 'Munin Host', icon: 'widgets', app: 'munin' }
            }
          }
          // {
          //   path: 'profile',
          //   component: () => import('pages/user-profile')
          // }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
