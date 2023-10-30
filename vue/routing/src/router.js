import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue'
import ListPage from './pages/ListPage.vue'
import ClassPage from './pages/ClassPage.vue'

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/list', name: 'ListPage', component: ListPage },
    { path: '/class/:name', name: 'ClassPage', component: ClassPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export { router };