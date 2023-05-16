<template>
  <div class="w-full h-[550px] flex justify-center items-center">
    <form @submit.prevent="register" class="w-1/3 h-full bg-whity rounded-lg">
      <div class="w-full h-1/6 flex justify-center items-center">
        <p class="text-2xl text-primary">Register</p>
      </div>
      <div class="w-full h-5/6 flex flex-col justify-start items-start px-6">
        <div
          class="w-full h-1/4 flex flex-col justify-start items-start space-y-2"
        >
          <label class="text-primary text-sm">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full h-10 outline-none px-2 rounded-lg border-[1px] border-primary"
          />
        </div>
        <div
          class="w-full h-1/4 flex flex-col justify-start items-start space-y-2"
        >
          <label class="text-primary text-sm">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full h-10 outline-none px-2 rounded-lg border-[1px] border-primary"
          />
        </div>
        <div
          class="w-full h-1/4 flex flex-col justify-start items-start space-y-2"
        >
          <label class="text-primary text-sm">Confirm Password</label>
          <input
            v-model="form.confirm_password"
            type="password"
            class="w-full h-10 outline-none px-2 rounded-lg border-[1px] border-primary"
          />
        </div>
        <div
          class="w-full h-1/4 flex flex-col justify-start items-center space-y-4"
        >
          <button
            type="submit"
            class="w-full h-10 rounded-lg text-white bg-primary"
          >
            Register
          </button>
          <p v-if="form.error" class="text-error text-sm text-center">
            {{ form.error }}
          </p>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "guest",
});
useHead({
  title: "Eduhub || Register",
});

const form = reactive({
  email: "",
  password: "",
  confirm_password: "",
  error: "",
});
const { auth } = useSupabaseAuthClient();
const register = async () => {
  if (form.confirm_password !== form.password) {
    form.error = "Passwords aren't same";
    return;
  }

  const { error } = auth.signUp({
    email: form.email,
    password: form.password,
  });

  if (error) {
    form.error = error;
  }
};
</script>
