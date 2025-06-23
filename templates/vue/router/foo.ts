export default [
  {
    name: '{{titleUcFirst}}List',
    path: '/{{name}}/',
    component: () => import('@/views/{{lc}}/ViewList.vue'),
  },
  {
    name: '{{titleUcFirst}}Create',
    path: '/{{name}}/create',
    component: () => import('@/views/{{lc}}/ViewCreate.vue'),
  },
  {
    name: '{{titleUcFirst}}Update',
    path: '/{{name}}/edit/:id',
    component: () => import('@/views/{{lc}}/ViewUpdate.vue'),
  },
  {
    name: '{{titleUcFirst}}Show',
    path: '/{{name}}/show/:id',
    component: () => import('@/views/{{lc}}/ViewShow.vue'),
  },
]
