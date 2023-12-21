<template>
  <div>
    <NuxtLayout>
      <template #header>
        <div class="h-16 px-6 py-2 flex flex-row content-between shadow-md fixed top-0 left-0 w-full bg-white z-50">
          <div
            class="grow flex justify-start items-center hover:text-teal-400 cursor-pointer"
            @click="home"
          >
            <img class="w-10" :src="avatar" alt="" />
          </div>
          <div class="grow flex justify-center items-center">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo !border-0"
              mode="horizontal"
              :ellipsis="false"
            >
              <template v-for="(item, index) in menuList">
                <el-menu-item v-if="!item.children" :index="item.id">
                  <Icon :name="item.iconName" color="black" />
                  <template #title>
                    <NuxtLink :to="item.path">{{
                      item.titleName
                    }}</NuxtLink></template
                  >
                </el-menu-item>
                <el-sub-menu v-if="item.children" :index="item.id">
                  <template #title>
                    <Icon :name="item.iconName" color="black" />
                    <NuxtLink :to="item.path">{{ item.titleName }}</NuxtLink>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item
                      v-for="menus in item.children"
                      :index="menus.id"
                      ><NuxtLink :to="item.path">{{
                        item.titleName
                      }}</NuxtLink></el-menu-item
                    >
                  </el-menu-item-group>
                </el-sub-menu>
              </template>
            </el-menu>
          </div>
          <div
            class="grow flex justify-end items-center hover:text-teal-400 cursor-pointer"
          >
            <img class="w-10" :src="avatar" alt="" /><span>moonandcake</span>
          </div>
        </div>
      </template>
      <div class="mt-16">
        <NuxtPage />
      </div>
      <template #footer>
        <div class="flex justify-center items-center h-8">到底了！</div>
      </template>
      <el-backtop :right="50" :bottom="50" />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import avatar from "./assets/img/portrait.jpg";
const activeIndex = ref("1");
const menuList = ref([
  {
    id: "1",
    titleName: "个人主页",
    iconName: "humbleicons:home",
    path: "/",
  },
  {
    id: "2",
    titleName: "性能优化",
    iconName: "material-symbols-light:display-settings-outline",
    path: "/SEO",
  },
  {
    id: "3",
    titleName: "关于",
    iconName: "carbon:user-filled",
    path: "/abort",
  },
  // {
  //   id: 4,
  //   titleName: "学生管理",
  //   iconName: "material-symbols-light:chrome-reader-mode",
  //   path: "/home/student",
  //   children: [
  //     {
  //       id: 41,
  //       titleName: "学生列表",
  //       iconName: "material-symbols-light:chrome-reader-mode",
  //       path: "/home/student",
  //     },
  //     {
  //       id: 42,
  //       titleName: "学生添加",
  //       iconName: "material-symbols-light:chrome-reader-mode",
  //       path: "/home/addstudent",
  //     },
  //   ],
  // },
]);
const route = useRoute();
watch(
  route,
  (to) => {
    console.log("路由", to);
    activeIndex.value = menuList.value.find((ele) => {
      return ele.path === to.path;
    })?.id;
  },
  { flush: "pre", immediate: true, deep: true }
);
function home() {
  navigateTo({
    path: "/",
  });
}
</script>
