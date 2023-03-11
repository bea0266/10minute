import { createWebHistory, createRouter } from "vue-router";

import Task from '@/views/Task.vue';
import Time from '@/views/Time.vue';
import DashBoard from '@/views/Dashboard.vue';
import Setting from '@/views/Setting.vue';

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

    {
        path: '/setting',
        name: 'Setting',
        component: Setting,
    },
  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router