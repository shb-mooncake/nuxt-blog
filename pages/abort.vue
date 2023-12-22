<template>
  <div>
    <div class="flex w-8/12 my-0 mx-auto">
      <div class="w-3/4">
        <UserInfoDetail />
      </div>
      <div class="w-1/4 mt-4">
        <UserInfoCard />
        <Calender />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
</script>
