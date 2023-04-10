<script setup>
import { ref, computed } from 'vue'
import TaskList from '@/components/task/TaskList.vue'
import TaskDetail from '@/components/task/TaskDetail.vue'
import TaskSide from '@/components/task/TaskSide.vue'
import { useTaskStore } from '@/store/task.js';

const tasks = computed(() => useTaskStore().tasks);
const sideTasks = computed(() => useTaskStore().sideTasks);

</script> 
<template>
    <TaskList :tasks="tasks"></TaskList>
    <TaskDetail></TaskDetail>
    <TaskSide :sideTasks="sideTasks"></TaskSide>
    <div class="add-task">   
         <input type="text" placeholder="Enter 키 누르고 추가">
    </div>
</template>

