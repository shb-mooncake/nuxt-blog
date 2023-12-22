<template>
  <div>
    <TransitionGroup  name="list" tag="ul">
      <article
        v-for="(item, index) in currentList"
        :key="item.id"
        :data-index="item.id"
        class="h-40 px-5 py-3 p-3 rounded shadow-xl mb-4 hover:scale-105 flex flex-row justify-start bg-neutral-400"
        @click="detail(item)"
      >
        <img src="~assets/img/portrait.jpg" alt="" class="h-full w-1/3 mr-5" />
        <div class="w-full flex flex-col justify-between items-start">
          <h5 class="text-xl border-b-2 border-gray-300 w-full pb-3">
            <span class="hover:text-teal-400 cursor-pointer">{{
              item.title
            }}</span>
          </h5>
          <div class="flex justify-end w-full">
            <Icon name="ant-design:clock-circle-filled" color="black" />
            <span>{{ item.date }}</span>
          </div>
        </div>
      </article>
    </TransitionGroup>
  </div>
</template>
<script setup>
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
} from "vue";
let props = defineProps({
  list: {
    type: Array,
    default: [],
  },
});
let currentList = ref([]);

onBeforeMount(() => {});
onMounted(() => {
  setTimeout(() => {
    currentList.value = props.list
  }, 100);
});
function detail(item) {
  navigateTo({
    path: `/article/${item.id}`,
    query: {
      id: item.id,
      title: item.title,
    },
  });
}
watchEffect(() => {});
</script>
<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
