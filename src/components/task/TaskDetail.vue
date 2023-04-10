<template>
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
</template>
<script setup>
import { ref, computed } from 'vue'
import { useTaskStore } from '@/store/task';
const toggleClass = computed(() => useTaskStore().toggleSide);
function closeDetail() {
    useTaskStore().setSideToggle(false);
}

</script>