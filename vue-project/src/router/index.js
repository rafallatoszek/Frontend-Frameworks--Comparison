import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './../components/Home.vue'
import LazyLoadComponent from './../components/LazyLoad.vue'
import BulkDataComponent from './../components/BulkData.vue'
import RequestComponent from './../components/Request.vue'

const routes = [
    {
        path: '/', name: "Home", component: HomeComponent
    },
    {
        path: '/lazy-load', name: 'LazyLoad', component: LazyLoadComponent
    },
    {
        path: '/bulk-data', name: 'BulkData', component: BulkDataComponent
    },
    {
        path: '/request', name: 'Request', component: RequestComponent
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router