<template>
    <div id="task-list">
      <div class="tit"><span><h4>할 일</h4></span></div>

        <div class="list-item-area">
          <div v-for="item in tasks" class="item-box" @click="openDetail()">
            <button class="circle_btn">
              <img src="../assets/image/contents/ico_circle.svg"/>
            </button>
            <span class="item-title">{{ item.title }}</span>
            <button class="star_btn" @click="$event.stopPropagation
            ();setImportant(item);">
              <img :src="item.importance ? starOnImg : starOffImg"/>
            </button>
          </div> 
        </div>
    </div>

    <div ref="taskDetail" :class="{ 'on': toggleClass }" id="task-detail">
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
          <option value="">매일</option>
          <option value="">매주</option>
          <option value="">매달</option>
        </select>
      </div>
      <div class="sub_tit">메모</div>
      <div class="input">
        <input type="text" />
      </div>
        <button type="button" @click="getLog()">START</button>
        <button type="button" @click="closeDetail()">CANCEL</button>
    </div>

    
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
    <div class="add-task">   
         <input type="text" placeholder="Enter 키 누르고 추가">
    </div>
</template>
<script setup>
import { ref } from 'vue'
import starOffImg from "../assets/image/contents/ico_star_off.svg"
import starOnImg from "../assets/image/contents/ico_star_on.svg"
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

const starSrc = ref(starOffImg)
function closeDetail() {
  toggleClass.value = false
}

function openDetail() {
  toggleClass.value = true
}

function setImportant(task) {
  task.importance = !task.importance
  console.log(tasks.value);
}


 </script> 