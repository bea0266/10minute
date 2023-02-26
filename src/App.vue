<script setup>
import { ref } from 'vue';
import Task from './views/Task.vue';

const nav = ref(null)
const isMenuOpen = ref(false)

function openSide() {
  isMenuOpen.value = true
}
function closeSide() {
  isMenuOpen.value = false
}
</script>

<template>
    <div id="header">
        <button type="button" @click="openSide()"><img src="./assets/image/common/menu-icon.svg" /></button>
      <span class="util">
        <button type="button"><img src="./assets/image/common/ico_setting.svg" /></button>
        <button type="button"><img src="./assets/image/common/ico_user.svg" /></button>
      </span>  
 
    </div>
    <div id="sidebar" :class="{'open': isMenuOpen }" ref="nav">
       <button type="button" @click="closeSide()"><img src="./assets/image/common/ico_back.svg" /></button>
       <div id="nav-list">
           <div class="item">체크리스트/업무 관리</div>
           <div class="item">스톱워치</div>           
           <div class="item">통계</div>
       </div> 
    </div>
    <div id="cont">
        <Task></Task>
    </div>
</template>

<style lang="scss">
@import "./assets/scss/common.scss";
@import "./assets/scss/content.scss";

    
</style>
