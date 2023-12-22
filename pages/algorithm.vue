<template>
  <div class="flex justify-center items-center h-full" >
    <!-- <div>{{ nickName }}</div> -->
    <!-- <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane
        v-for="item in channelList"
        :label="item.id"
        :name="item.name"
        >{{ item.name }}</el-tab-pane
      >
    </el-tabs> -->
    <div>
      <!-- <div>Post state: {{ resDataSuccess }}</div> -->
      <!-- <div>Get Data: {{ resData }}</div> -->
    </div>
    <!-- <ScrollList /> -->
    <h1 class="animate__animated animate__bounce text-white">An animated element</h1>
  </div>
</template>
<script setup>
import { userManager } from "@/stores";
import { storeToRefs } from "pinia";

// 从pinia 中获取数据转为响应式
const store = userManager();
const { nickName } = storeToRefs(store);
// let activeName = ref(1);
// const { data: channelList } = await useFetch("/api/channel");

// const { data: resDataSuccess } = await useFetch("/api/test", {
//   method: "post",
//   body: {
//     text: "Welcome To Nuxt3",
//   },
// });
// const { data: resData } = await useFetch("/api/aaa");
let res = await useFetch("/api/hello")
console.log(res)
</script>
