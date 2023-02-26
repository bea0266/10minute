import { createWebHistory, createRouter } from "vue-router";

import Task from '../views/Task.vue'
import Time from '../views/Time.vue'
import DashBoard from '../views/DashBoard.vue'

const routes = [
    {
        path: '/task',
        name: 'Task',
        component: Task,
    },

    {
        path: '/time',
        name: 'Time',
        component: Time,
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashBoard,
    },
  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router