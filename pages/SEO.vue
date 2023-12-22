<template>
  <div class="flex w-8/12 my-0 mx-auto flex-col mt-20">
    <ScrollList :list="articleList" />
  </div>
</template>
<script setup>
import { ref } from "vue";
const articleList = ref([
  {
    id: "1",
    title: "浏览器渲染流程及优化",
    date: "2023年12月6日",
  },
  {
    id: "2",
    title: "浏览器渲染流程及优化",
    date: "2023年12月6日",
  },
  {
    id: "3",
    title: "浏览器渲染流程及优化",
    date: "2023年12月6日",
  },
  {
    id: "4",
    title: "浏览器渲染流程及优化",
    date: "2023年12月6日",
  },
  {
    id: "5",
    title: "浏览器渲染流程及优化",
    date: "2023年12月6日",
  },
  {
    id: "6",
    title: "浏览器渲染流程及优化",
    date: "2023年12月6日",
  },
  {
    id: "7",
    title: "浏览器渲染流程及优化",
    date: "2023年12月6日",
  },
  {
    id: "8",
    title: "浏览器渲染流程及优化",
    date: "2023年12月6日",
  },
  {
    id: "9",
    title: "浏览器渲染流程及优化",
    date: "2023年12月6日",
  },
]);
</script>
