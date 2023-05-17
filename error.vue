<template>
  <div
    v-if="error.statusCode == 404"
    class="w-full h-screen flex flex-col justify-center items-center"
  >
    <Error404 width="800px" height="800px" />
    <p class="text-primary text-2xl">You have chosen wrong direction</p>
  </div>
</template>

<script setup>
import Error404 from "~/assets/illustrations/404Error.vue";

const props = defineProps({
  error: {
    required: true,
  },
});
</script>
