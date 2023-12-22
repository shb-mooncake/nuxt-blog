<template>
   <Transition name="bounce">
     <div v-if="show">
         <el-calendar ref="calendar" class="mt-6 ml-6 rounded shadow-xl">
           <template #header="{ date }">
             <el-button-group>
               <el-button size="small" @click="selectDate('prev-year')">
                 Previous Year
               </el-button>
               <el-button size="small" @click="selectDate('prev-month')">
                 Previous Month
               </el-button>
               <el-button size="small" @click="selectDate('today')">
                 Today
               </el-button>
               <el-button size="small" @click="selectDate('next-month')">
                 Next Month
               </el-button>
               <el-button size="small" @click="selectDate('next-year')">
                 Next Year
               </el-button>
             </el-button-group>
           </template>
         </el-calendar>
     </div>
   </Transition>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { CalendarDateType, CalendarInstance } from 'element-plus'
const calendar = ref<CalendarInstance>()
const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
let show = ref(false);
setTimeout(() => {
  show.value = true;
}, 100);
</script>
<style lang="scss">
.el-calendar-table .el-calendar-day {
  width: 100%;
  height: 30px;
  text-align: center;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
  }
}
</style>