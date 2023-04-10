<template>
    <div id="sidebar" :class="{'open': isMenuOpen }" ref="nav">
        <button type="button" @click="useMenuStore().setMenuToggle(false)"><img src="@/assets/image/common/ico_back.svg" /></button>
        <div id="nav-list">
            <div class="item" @click="moveMenuLink('Task')">체크리스트/업무 관리</div>
            <div class="item" @click="moveMenuLink('Time')">스톱워치</div>           
            <div class="item" @click="moveMenuLink('Dashboard')">통계</div>
        </div> 
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useMenuStore } from '@/store/menu';
import { changeRouterView } from '@/util/utils';

const emits = defineEmits(['showMenuLink']);
const nav = ref(null)
const isMenuOpen = computed(() => useMenuStore().toggleMenu);

function moveMenuLink(menuName) {
    useMenuStore().currentMenu = menuName;
    emits('showMenuLink');
}

</script>
