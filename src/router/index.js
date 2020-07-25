import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TequeDetail from '../views/TequeDetail.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/teque/:id',
        name: 'TequeDetail',
        component: TequeDetail
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
    },

    {
        path: '/animation',
        name: 'PxHeaderAnimation',
        // route level code-splitting
        // this generates a separate chunk (PxHeaderAnimation.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "PxHeaderAnimation" */ '../views/PxHeaderAnimation.vue')
    },

    {
        path: '/contact',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (Contact.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
    },

    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
