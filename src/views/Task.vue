<template>
    <TaskList @openDetail="openDetail()" :toggleClass="toggleClass" :tasks="tasks"></TaskList>
    
    <TaskDetail @closeDetail="closeDetail()" :toggleClass="toggleClass"></TaskDetail>


    <!--  TaskSide.vue component(start) -->
    <TaskSide :sideTasks="sideTasks"></TaskSide>
    <!-- <div id="task-side">
        <div id="taskside-tit" class="tit">
          <span><h4>할 일 현황</h4></span>
        </div>
        <div class="list-item-area">
          <div v-for="item in sideTasks" class="item-box">
             <span class="tit">{{ item.title }}</span>
          </div>
        </div>
    </div> -->
    <!--  TaskSide.vue component(end) -->

    <!--  AddTask.vue component(start) -->
    <div class="add-task">   
         <input type="text" placeholder="Enter 키 누르고 추가">
    </div>
    <!--  AddTask.vue component(end) -->
</template>

<script setup>
import { ref } from 'vue'
import TaskList from '@/components/task/TaskList.vue'
import TaskDetail from '@/components/task/TaskDetail.vue'
import TaskSide from '@/components/task/TaskSide.vue'
import axios from 'axios'

axios.defaults.withCredentials = true;

const toggleClass = ref(false)
const tasks = ref([
  { 
    id: 1,
    title: 'HTML 공부',
    description: '즐거운 웹 개발',
    importance: false,
  },
  { 
    id: 2,
    title: 'HTML 공부',
    description: '즐거운 웹 개발',
    importance: false,
  },
  { 
    id: 3,
    title: 'HTML 공부',
    description: '즐거운 웹 개발',
    importance: false,
  },
  { 
    id: 4,
    title: 'HTML 공부',
    description: '즐거운 웹 개발',
    importance: false,
  },
  { 
    id: 5,
    title: 'HTML 공부',
    description: '즐거운 웹 개발',
    importance: false,
  },
  { 
    id: 6,
    title: 'HTML 공부',
    description: '즐거운 웹 개발',
    importance: false,
  },
])

const sideTasks = ref([
  { 
    id: 1,
    title: 'HTML 공부',
    description: '즐거운 웹 개발',
    importance: false,
  }
])

function closeDetail() {
  toggleClass.value = false
}

function openDetail() {
  toggleClass.value = true
}

 </script> 