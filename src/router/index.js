import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue';
import RoomFamilly from '../views/familly_room/index.vue';
import RoomSuperior from '../views/superior_room/index.vue';
import RoomStandard from '../views/standard_room/index.vue';
import About from '../views/about/index.vue';

const routes = [{
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/familly_room',
        name: 'RoomFamilly',
        component: RoomFamilly,
    },
    {
        path: '/superior_room',
        name: 'RoomSuperior',
        component: RoomSuperior,
    },
    {
        path: '/standard_room',
        name: 'RoomStandard',
        component: RoomStandard,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;