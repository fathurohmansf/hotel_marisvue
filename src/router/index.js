import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue';
import RoomFamilly from '../views/familly_room/index.vue';

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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;