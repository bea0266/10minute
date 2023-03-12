<template>
    <Bar
       id="my-chart-id"
       :options="chartOptions"
       :data="chartData"

    />
   
</template>
<style scope>
</style>
<script setup>
   import { ref } from 'vue';
   import { Bar, Line } from 'vue-chartjs'
   
   import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
   
   const chartData = {
       labels: ['2023-03-08', '2023-03-09', '2023-03-10', '2023-03-11', '2023-03-12'],
       datasets: [
           { 
             label: '총 공부 시간',
             data: [8, 2, 4, 5, 6],
             borderWidth: 0, 
             backgroundColor: ['rgba(255, 0, 0, 0.1)', 'rgba(255, 255, 0, 0.1)', 'rgba(172, 80, 0, 0.5)', 'rgba(180, 180, 10, 0.5)', 'rgba(0, 0, 0, 0.5)']
           },
           { 
             label: '단기 집중 시간',
             data: [3, 5, 2, 4, 1],
             borderWidth: 1, 
             borderColor: 'rgba(255, 83, 133, 1)',
             type: 'line',
             backgroundColor: 'rgba(255, 83, 133, 1)'
           }         
       ],
   }
   
   const chartOptions = { responsive: true }
  
   ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, PointElement, CategoryScale, LinearScale)
   
   
</script> 