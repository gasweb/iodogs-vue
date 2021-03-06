import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/breed',
    name: 'Для породы',
    component: () => import('../views/breed/breed-page.vue'),
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('../views/about/brand.vue'),
  },
  {
    path: '/ingredients',
    name: 'Ingredients',
    component: () => import('../views/about/ingredient.vue'),
  },
  {
    path: '/faq',
    name: 'Вопросы и ответы',
    component: () => import('../views/about/faq.vue'),
  },
  {
    path: '/buy',
    name: 'Купить',
    component: () => import('../views/buy/buy.vue'),
  },
  {
    path: '/bathe-basic',
    name: 'Основы купания',
    component: () => import('../views/learning/bathe-basic.vue'),
  },
  {
    path: '/do-dont',
    name: 'Правила ухода за собакой',
    component: () => import('../views/learning/do-dont.vue'),
  },
  {
    path: '/dry-basic',
    name: 'Основы сушки',
    component: () => import('../views/learning/dry-basic.vue'),
  },
  {
    path: '/myths',
    name: 'Разрушаем мифы',
    component: () => import('../views/learning/myths.vue'),
  },
  {
    path: '/puppy',
    name: 'Уход за щенками',
    component: () => import('../views/learning/puppy.vue'),
  },
  {
    path: '/coat-types',
    name: 'Типы шерсти',
    component: () => import('../views/learning/coat-types.vue'),
  },
  {
    path: '/catalog/:slug',
    name: 'Каталог',
    component: () => import('../views/catalog/catalog.vue'),
  },
  {
    path: '/line/:slug',
    name: 'Серии',
    component: () => import('../views/line/line.vue'),
  },
  {
    path: '/solution/:slug',
    name: 'Решения',
    component: () => import('../views/solution/solution.vue'),
  },
  {
    path: '/item/:slug',
    name: 'Продукт',
    component: () => import('../views/product/product-page.vue'),
  },
  {
    path: '/breed/:slug',
    name: 'Продукты для породы',
    component: () => import('../views/breed/breed-slug-page.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
