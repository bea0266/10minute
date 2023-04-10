<script setup>
import { ref, computed, watch } from 'vue';
import { useSettingStore } from '@/store/setting.js';

const settingStore = useSettingStore();
const isOverTimeDisplayOff = ref(true)
const todayStudyTime = ref(settingStore.settingStudyTime);
const overTime = ref('00:00:00');
const realStudyTime = ref('00:00:00');
const todayStudyInterval = ref();
const overStudyInterval = ref();
const realStudyInterval = ref();
const isTimerActive = ref(false);

function startTodayStudyTimer() {
    todayStudyInterval.value = setInterval(() => {
        let [hour, minute, seconds] = todayStudyTime.value.split(':');
        
        hour = parseInt(hour);
        minute = parseInt(minute);
        seconds = parseInt(seconds);

        if (seconds > 0) {
            seconds -= 1;   
        } else {
            seconds = 59;

            if (minute > 0) {
                minute -= 1;
            } else {

                if(hour > 0) {
                    hour -= 1;
                    minute = 59;
                }
            }
        }

        hour = hour < 10 ? addZero(hour) : hour;
        minute = minute < 10 ? addZero(minute) : minute;
        seconds = seconds < 10 ? addZero(seconds) : seconds;

        todayStudyTime.value = [hour, minute, seconds].join(':');
       
      }, 1000);          
}



function startOverTime() {
    overStudyInterval.value = setInterval(() => {
        let [hour, minute, seconds] = overTime.value.split(':');
 
        hour = parseInt(hour);
        minute = parseInt(minute);
        seconds = parseInt(seconds);        
        
        seconds += 1;
        
        if(seconds === 60) {
            seconds = 0;
            minute += 1; 
            
            if(minute === 60) {
                minute = 0;
                hour += 1;    
            }
        }

        hour = hour < 10 ? addZero(hour) : hour;
        minute = minute < 10 ? addZero(minute) : minute;
        seconds = seconds < 10 ? addZero(seconds) : seconds;

        overTime.value = [hour, minute, seconds].join(':');

    }, 1000);
    
}

function startTimer() {
    isTimerActive.value = true;
    if(isOverTimeDisplayOff.value) {
        startTodayStudyTimer();
    } else {
        startOverTime();
    }
}

function stopTimer() {
    isTimerActive.value = false;
    clearInterval(todayStudyInterval.value);
    clearInterval(overStudyInterval.value);  
}

function reset() {
    overTime.value = '00:00:00';
    isOverTimeDisplayOff.value = true;
    todayStudyTime.value = settingStore.settingStudyTime;
}

function addZero(digit) {
    return '0' + parseInt(digit);   
}

watch(() => todayStudyTime.value, () => {
    if(todayStudyTime.value === '00:00:00') {
        clearInterval(todayStudyInterval.value);

        isOverTimeDisplayOff.value = false;

        const overTimeArea = document.querySelectorAll('.time_area')[1];

        overTimeArea.style.color = 'red';
        
        startOverTime();
    }
});
</script> 
<template>
    <div id="stop_watch_content">
        <p>하루 공부 남은 시간</p>
        <div class="time_area">
           {{ todayStudyTime }}
        </div>
        <div class="time_area" :class="{ 'off': isOverTimeDisplayOff }">
           {{ overTime }}  
        </div>
        <p>순공 시간</p>
        <div class="time_area">
           {{ realStudyTime }}
        </div> 
        <button class="btn_control" :class="!isTimerActive ? { 'on' : true } : { 'off' : isTimerActive }" b type="button" @click="startTimer()">START</button>
        <button class="btn_control" :class="isTimerActive ? { 'on' : isTimerActive } : { 'off' : true }" type="button" @click="stopTimer()">STOP</button>
        <button class="btn_control" :class="!isTimerActive ? { 'on' : true } : { 'off' : isTimerActive }" type="button" @click="reset()">RESET</button>

    </div>
</template>



