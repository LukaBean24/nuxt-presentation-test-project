<template>
  <div
    class="col-span-1 h-96 bg-whity rounded-lg flex flex-col justify-start items-center"
  >
    <div class="w-full h-1/5 flex justify-start items-center px-6">
      <p class="text-primary text-lg">Course Title</p>
    </div>
    <div class="w-full h-3/5 bg-gray-300 flex justify-center items-center">
      <p class="text-primary text-xl">Course Image</p>
    </div>
    <div class="w-full h-1/5 flex justify-start items-center px-6">
      <NuxtLink :to="`/courses/courseId`" class="text-primary text-lg"
        >See More</NuxtLink
      >
    </div>
  </div>
</template>
