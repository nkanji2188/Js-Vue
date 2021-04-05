import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ajax from '../views/Ajax.vue'
import Todo from '../views/Todo.vue'
import Each from '../views/test/Each.vue'
import for2 from '../views/test/for2.vue'
import Ajax02 from '../views/test/Ajax02.vue'

Vue.use(VueRouter)

const routes = [
  {
    // ”path”と”component”で、URLとコンポーネントが紐付けられる
    path: '/',
    name: 'Home',
    component: Home,
    username: 'ho-mu'
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: () => import('../views/test/About.vue')
  },
  {
    path: '/CountUp',
    name: 'CountUp',
    component: () => import('../views/CountUp.vue')
  },
  {
    path: '/for',
    name: 'for',
    component: () => import('../views/test/for.vue')
  },
  {
    path: '/for2',
    name: 'for2',
    component: for2
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/Each',
    name: 'Each',
    component: Each
  },
  {
    path: '/Ajax',
    name: 'Ajax',
    component: Ajax
  },
  {
    path: '/Ajax02',
    name: 'Ajax02',
    component: Ajax02
  }
]

const router = new VueRouter({
  routes
})

export default router
