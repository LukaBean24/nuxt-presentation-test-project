<template>
  <div class="w-full h-auto grid grid-cols-4 gap-6">
    <CourseCard />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "guest",
  middleware: "auth",
});
useHead({
  title: "EduHub || Courses",
});
</script>
