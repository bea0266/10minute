<template>
<div id="header">
    <button type="button" @click="useMenuStore().setMenuToggle(true)"><img src="@/assets/image/common/menu-icon.svg" /></button>

    <span class="util">
    <button type="button" @click="moveToSetting()"><img src="@/assets/image/common/ico_setting.svg" /></button>
    <button type="button"><img src="@/assets/image/common/ico_user.svg" /></button>
  </span>  
</div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useMenuStore } from '@/store/menu';

const emits = defineEmits([
    'showHeaderLink'
])

function moveToSetting() {
   useMenuStore().currentMenu = 'Setting';
   emits('showHeaderLink');
}

</script>


