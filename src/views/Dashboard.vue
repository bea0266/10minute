<template>
<input type="radio"/>
<BarChart 
   :width="1920" 
   :height="780">
</BarChart>
 
</template>
<script setup>
import { ref } from 'vue';
import BarChart from '@/components/dashboard/BarChart.vue'


</script> 