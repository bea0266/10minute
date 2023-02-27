<template>
    <TaskList @openDetail="openDetail()" :tasks="tasks"></TaskList>
    
    <!--  TaskDetail.vue component(start) -->
    <div :class="{ 'on': toggleClass }" id="task-detail">
      <div class="tit">
        <span>상세 설정</span>
      </div>
      <div class="sub_tit">제목</div>
      <div class="input">
        <input type="text" />
      </div>
      <div class="sub_tit">기한 설정</div>
      <div class="input">
        <input type="date" /> 부터
      </div>
      <div class="input">
        <input type="date" /> 까지
      </div>
      <div class="sub_tit">반복</div>
      <div class="input">
        <select>
          <option value="day">매일</option>
          <option value="week">매주</option>
          <option value="month">매달</option>
        </select>
      </div>
      <div class="sub_tit">메모</div>
      <div class="input">
        <input type="text" />
      </div>
        <button type="button">START</button>
        <button type="button" @click="closeDetail()">CANCEL</button>
    </div>
    <!--  TaskDetail.vue component(end) -->

    <!--  TaskSide.vue component(start) -->
    <div id="task-side">
        <div id="taskside-tit" class="tit">
          <span><h4>할 일 현황</h4></span>
        </div>
        <div class="list-item-area">
          <div v-for="item in sideTasks" class="item-box">
             <span class="tit">{{ item.title }}</span>
          </div>
        </div>
    </div>
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