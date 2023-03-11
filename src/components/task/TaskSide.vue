<template>
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
</template>
<script setup>
    defineProps({
        sideTasks: Array
    })

</script>