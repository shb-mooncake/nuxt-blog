<template>
  <Transition name="bounce">
    <div
      v-if="show"
      class="h-80 ml-6 rounded shadow-xl flex flex-col justify-center items-center sticky top-16 bg-zinc-50"
    >
      <img class="w-16 mb-2" src="~/assets/img/portrait.jpg" alt="" />
      <span class="mb-2 text-lg">moonandcake</span>
      <span>一名前端开发</span>
    </div>
  </Transition>
</template>
<script setup>
let show = ref(false);
setTimeout(() => {
  show.value = true;
}, 100);
</script>
<style lang="scss">
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
