import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', redirect: '/first'},
    {
        path: '/first',
        component: ()=>import('@/view/first/first')
    },
    {
        path: '/mail',
        component: ()=>import('@/view/mail/mail')
    },
    {
        path: '/find',
        component: ()=>import('@/view/find/find')
    },
    {
        path: '/my',
        component: ()=>import('@/view/my/my')
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router