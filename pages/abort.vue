<template>
  <div>
    <div class="flex w-8/12 my-0 mx-auto">
      <div class="w-3/4 border-solid border-gray-300 border-2 mt-4">
        <img class="w-full" src="~assets/img/abort-bg.png" alt="" />
        <div class="flex">
          <img
            class="w-16 ml-24 -translate-y-16"
            src="~assets/img/portrait.jpg"
            alt=""
          />
          <div class="p-2">
            <span>moonandcake</span>
            <div>
              <Icon name="carbon:location-current" color="black" />
              <span>沈阳</span>|
              <span>男</span>
              <Icon name="material-symbols:male-rounded" color="black" />
            </div>
            <p>
              Hi,我是moonandcake，为了学习技术搭建了一个小站，多有不足请谅解！
            </p>
          </div>
        </div>
        <el-divider border-style="dashed" />
      </div>
      <div class="w-1/4 sticky top-16">
        <div
          class="h-80 ml-6 rounded shadow-xl flex flex-col justify-center items-center"
        >
          <img class="w-16 mb-2" src="~assets/img/portrait.jpg" alt="" />
          <span class="mb-2 text-lg">moonandcake</span>
          <span>一名前端开发</span>
        </div>
        <el-calendar ref="calendar" class="mt-6 ml-6 rounded shadow-xl">
          <template #header="{ date }">
            <el-button-group>
              <el-button size="small" @click="selectDate('prev-year')">
                Previous Year
              </el-button>
              <el-button size="small" @click="selectDate('prev-month')">
                Previous Month
              </el-button>
              <el-button size="small" @click="selectDate('today')"
                >Today</el-button
              >
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { CalendarDateType, CalendarInstance } from 'element-plus'
const value = ref(new Date());
const calendar = ref<CalendarInstance>()
const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
</script>
<style lang="scss">
.el-calendar-table .el-calendar-day {
  width: 100%;
  height: 30px;
  text-align: center;
}
</style>
