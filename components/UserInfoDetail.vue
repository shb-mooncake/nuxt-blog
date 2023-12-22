<template>
    <Transition name="userinfodetail">
      <div
        v-if="show"
        class=" border-solid border-gray-300 border-2 mt-4"
      >
      <img class="w-full" src="~assets/img/abort-bg.png" alt="" />
        <div class="flex">
          <img
            class="w-16 ml-24 -translate-y-16"
            src="~assets/img/portrait.jpg"
            alt=""
          />
          <div class="p-2 mt-2 text-white">
            <span>moonandcake</span>
            <div>
              <Icon name="carbon:location-current" color="white" />
              <span>沈阳</span> |
              <span>男</span>
              <Icon name="material-symbols:male-rounded" color="white" />
            </div>
            <p>
              Hi,我是moonandcake，试试新技术搭建了一个小项目，多有不足请谅解！
            </p>
          </div>
        </div>
        <el-divider border-style="dashed" />
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
  .userinfodetail-enter-active {
    animation: userinfodetail-in 0.5s;
  }
  .userinfodetail-leave-active {
    animation: userinfodetail-in 0.5s reverse;
  }
  @keyframes userinfodetail-in {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  