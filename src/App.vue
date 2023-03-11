<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter();


const nav = ref(null)
const isMenuOpen = ref(false)

function openSide() {
  isMenuOpen.value = true
}
function closeSide() {
  isMenuOpen.value = false
}

function changeRouterView(viewName) {
  router.push(viewName)
}

onMounted(() => {
  router.replace('Task')
})

</script>

<template>
    <div id="header">
        <button type="button" @click="openSide()"><img src="./assets/image/common/menu-icon.svg" /></button>
      <span class="util">
        <button type="button" @click="changeRouterView('Setting')"><img src="./assets/image/common/ico_setting.svg" /></button>
        <button type="button"><img src="./assets/image/common/ico_user.svg" /></button>
      </span>  
    </div>
    <div id="sidebar" :class="{'open': isMenuOpen }" ref="nav">
       <button type="button" @click="closeSide()"><img src="./assets/image/common/ico_back.svg" /></button>
       <div id="nav-list">
           <div class="item" @click="changeRouterView('Task')">체크리스트/업무 관리</div>
           <div class="item" @click="changeRouterView('Time')">스톱워치</div>           
           <div class="item" @click="changeRouterView('Dashboard')">통계</div>
       </div> 
    </div>
    <div id="cont">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import "./assets/scss/common.scss";
@import "./assets/scss/task.scss";
@import "./assets/scss/time.scss";

    
</style>
