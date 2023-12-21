<template>
  <div class="flex w-8/12 my-0 mx-auto flex-col mt-20">
    <article
      v-for="(item, index) in articleList"
      class="h-32 px-5 py-3 p-3 rounded shadow-xl mb-4 flex flex-col justify-around items-start hover:scale-105 bg-neutral-400"
      @click="detail(item)"
    >
      <h5 class="text-xl border-b-2 border-gray-300 w-full pb-3">
        <span class="hover:text-teal-400 cursor-pointer">{{ item.title }}</span>
      </h5>
      <div class="flex justify-start">
        <Icon name="ant-design:clock-circle-filled" color="black" />
        <span>{{ item.date }}</span>
      </div>
    </article>
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
function detail(item) {
  navigateTo({
    path: `/article/${item.id}`,
    query: {
      id: item.id,
      title: item.title,
    },
  });
}
</script>
