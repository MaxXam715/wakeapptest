import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: {title: 'Главная'},

    component:()=>import(/* webpackChunkName: "home" */ '../views/index.vue')
  },
  {
    path: '/character/:id',
    name: 'CardPerson',
    props: {id: 0},

    meta: {title: 'Редактировать карточку персонажа'},

    component:()=>import(/* webpackChunkName: "catalog" */ '../views/CardPerson.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title;
  }

  next();
})


export default router
