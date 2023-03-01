<template>
<div id="task-list">
    <div class="tit"><span><h4>할 일</h4></span></div>

      <div class="list-item-area">
        <div v-for="item in tasks" class="item-box" @click="$emit('openDetail')">
          <button class="circle_btn">
            <img src="@/assets/image/contents/ico_circle.svg"/>
          </button>
          <span class="item-title">{{ item.title }}</span>
          <button class="star_btn" @click="$event.stopPropagation
          ();setImportant(item);">
            <img :src="setStarImg(item)"/>
          </button>
        </div> 
      </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import starOffImg from "@/assets/image/contents/ico_star_off.svg"
import starOnImg from "@/assets/image/contents/ico_star_on.svg"

const emit = defineEmits(['openDetail'])

const props = defineProps({
    tasks: Array,
    toggleClass: {
       type: Boolean,
       default: false
    }
})

function setImportant(event, task) {
  event.stopPropagation()
  task.importance = !task.importance
}

function setStarImg(item) {
  return item.importance ? starOnImg : starOffImg
}

</script>
