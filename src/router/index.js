import { createRouter, createWebHistory } from "vue-router";
import AuthRoutes from './AuthRoutes'
import GuestRoutes from './GuestRoutes'

var allRoutes = []
allRoutes = allRoutes.concat(GuestRoutes, AuthRoutes)

const routes = allRoutes

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isLogged = true

router.beforeEach((to, from, next) => {
  let n = null

  //redirect if not logged
  if (to.meta.auth && !isLogged) {
    n = { name: 'login' }
  }
  next(n)
})

export default router;
