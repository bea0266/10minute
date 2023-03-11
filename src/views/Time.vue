<template>
    <div id="stop_watch_content">
        <p>하루 공부 남은 시간</p>
        <div class="time_area">
            {{ todayStudyTime }}
        </div>
        <div class="time_area" :class="{ off }">
           {{ overTime }}  
        </div>
        <p>순공 시간</p>
        <div class="time_area">
           {{ realStudyTime }}
        </div>
        <button type="button">RESTART/STOP</button>
        <button type="button">RESET</button>
        <button type="button" @click="startTimer()">START</button>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const off = ref(true)
const todayStudyTime = ref('00:01:00');
const overTime = ref('00:00:00');
const realStudyTime = ref('00:00:00');
const todayStudyInterval = ref();

function startTimer() {
    todayStudyInterval.value = setInterval(() => {
         let [hour, min, second] = todayStudyTime.value.split(':');
         
         if (parseInt(second) < 10) {
            
            if(parseInt(second) === 0) {
                second = 59;
                if(min > 0) {
                    min = parseInt(min) - 1;
                } else {
                    min = 59;
                    if(hour > 0) {
                        hour = parseInt(hour) - 1
                    }
                }

            } else {
                second = parseInt(second) - 1;  
            }

         } else if (parseInt(second) === 0) {
            second = 59;
         } else {
            second = second - 1; 
         }
         
         if(hour < 10) {
           hour = addZero(hour)
         }
         
         if(min < 10) {
           min = addZero(min)
         }
         
         if(second < 10) {
           second = addZero(second)
         }

         todayStudyTime.value = [hour, min, second].join(':');
       
    }, 1000)
}

function reStartTimer() {
    return;   
    
}

function addZero(digit) {
    return '0' + parseInt(digit);   
}

watch(() => todayStudyTime.value, () => {
    if(todayStudyTime.value === '00:00:00') {
        clearInterval(todayStudyInterval.value);

        off.value = false;

        const overTimeArea = document.querySelectorAll('.time_area')[1];

        overTimeArea.style.color = 'red';
    }
});

</script> 