import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import for2 from '../views/for2.vue'
import Todo from '../views/Todo.vue'
import Each from '../views/Each.vue'

Vue.use(VueRouter)

const routes = [
  {
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
    component: () => import('../views/About.vue')
  },
  {
    path: '/CountUp',
    name: 'CountUp',
    component: () => import('../views/CountUp.vue')
  },
  {
    path: '/for',
    name: 'for',
    component: () => import('../views/for.vue')
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
  }
]

const router = new VueRouter({
  routes
})

export default router

// router.afterEach((to, from) => {
//   console.log('')
// })
