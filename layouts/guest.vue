<template>
  <div class="w-full min-h-screen h-auto relative">
    <div class="w-full h-20 bg-whity flex justify-center items-center">
      <div class="w-5/6 h-full flex justify-start items-center">
        <div class="w-1/5 h-full flex justify-start items-center">
          <NuxtLink to="/" class="text-primary text-2xl">EduHub</NuxtLink>
        </div>
        <div class="w-4/5 h-full flex justify-end items-center px-4 space-x-4">
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
          <NuxtLink
            v-if="!user"
            to="/login"
            class="w-40 h-10 rounded-lg bg-primary text-white hover:bg-hover duration-150 flex justify-center items-center"
          >
            Log In
          </NuxtLink>
          <NuxtLink
            v-if="!user"
            to="/register"
            class="w-40 h-10 rounded-lg bg-primary text-white hover:bg-hover duration-150 flex justify-center items-center"
          >
            Register
          </NuxtLink>
          <button
            @click="logout"
            v-if="user"
            class="w-40 h-10 rounded-lg bg-primary text-white hover:bg-hover duration-150 outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    <div class="w-full h-auto flex justify-center items-center">
      <div
        class="w-5/6 h-auto flex flex-col justify-start items-start pt-16 pb-60"
      >
        <slot></slot>
      </div>
    </div>
    <div
      class="absolute w-full h-44 bg-primary bottom-0 left-0 flex justify-center items-center"
    >
      <p class="text-3xl text-whity">
        Big Beautiful Footer From Uncreative Dev
      </p>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const { auth } = useSupabaseAuthClient();

const logout = async () => {
  const { error } = await auth.signOut();
  if (error) return;
  await navigateTo("/login");
};
</script>
