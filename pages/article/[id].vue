<template>
  <div>
    <p>{{ $route.query.title }}-{{ $route.query.id }}</p>
    <ContentDoc path="/se" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
defineProps({
  title: {
    type: String,
    default: "Default title",
  },
  description: {
    type: String,
    default: "Default description",
  },
  icon: {
    type: String,
    default: "IconMarkdown",
  },
});
</script>
