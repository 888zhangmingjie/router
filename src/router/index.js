import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/views/home'),
        meta: {
            theme: 'white',
            title: '小红书-首页'
        }
    },
    {
        path: '/about',
        component: () => import('@/views/about'),
        meta: {
            theme: 'white',
            title: '小红书-关于我们'
        }
    },
    {
        path: '/news',
        component: () => import('@/views/news'),
        meta: {
            theme: 'white',
            title: '小红书-新闻中心'
        }
    },
    {
        path: '/liability',
        component: () => import('@/views/liability'),
        meta: {
            theme: 'white',
            title: '小红书-社会责任'
        }
    },
    {
        // path: '/detail/:id',
        path: '/detail',
        component: () => import('@/views/detail'),
        meta: {
            theme: 'black',
            title: '小红书-新闻详情'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
//导航守卫，也称导航的狗子，路由跳转前，跳转后，是全局的
router.beforeEach((to, from, next) => {
    console.log(to, from);
    if (to.path === '/home') {
        if (confirm('要去首页吗？')) {
            next()
            //next({path:'/home'})
        } else {
            next(false)
        }
    } else {
        next()
    }
})
router.afterEach((to, from) => {
    document.title = to.meta.title
})

export default router
