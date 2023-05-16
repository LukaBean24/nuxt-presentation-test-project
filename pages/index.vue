<template>
  <div class="w-full h-20 bg-whity flex justify-center items-center">
    <div class="w-5/6 h-full flex justify-start items-center">
      <div class="w-1/5 h-full flex justify-center items-center">
        <p class="text-primary text-2xl">EduHub</p>
      </div>
      <div class="w-3/5 h-full flex justify-end items-center px-4 space-x-4">
        <NuxtLink
          to="/"
          class="text-primary text-lg hover:text-hover duration-150 cursor-pointer"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/courses"
          class="text-primary text-lg hover:text-hover duration-150 cursor-pointer"
        >
          Courses
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-primary text-lg hover:text-hover duration-150 cursor-pointer"
        >
          About
        </NuxtLink>
      </div>
      <div class="w-1/5 h-full flex justify-start items-center px-4 space-x-4">
        <button
          class="w-40 h-10 rounded-lg bg-primary text-white hover:bg-hover duration-150"
        >
          Sign Up
        </button>
        <button
          class="w-40 h-10 rounded-lg bg-transparent border-2 border-primary text-primary hover:border-hover duration-150 hover:text-hover"
        >
          Log In
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({});
useHead({
  title: "EduHub || Home",
});
</script>
