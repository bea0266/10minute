<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useSettingStore } from "@/store/setting.js";

const settingStore = useSettingStore();
const studyTime = ref('00:00:00');

</script>
<template>
    <h1>설정</h1>

    <p>하루 공부시간 설정</p>

    <input v-model="studyTime" type="time" min="00:00:00" max="23:59:59" step="2">

    <button type="button" @click="settingStore.setStudyTime(studyTime)">저장</button>

</template>
