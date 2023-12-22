<template>
  <div>
    <img src="~assets/img/banner.jpg" class="w-full h-96 mb-3" alt="" />
    <div class="flex w-8/12 my-0 mx-auto !z-10">
      <div class="w-3/4">
        <ScrollList :list="articleList" />
      </div>
      <div class="w-1/4">
        <UserInfoCard />
      </div>
    </div>
  </div>
</template>
<script setup>
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
