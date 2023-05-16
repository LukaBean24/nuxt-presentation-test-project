<template>
  <div class="w-full h-[500px] flex justify-center items-center">
    <form @submit.prevent="login" class="w-1/3 h-full bg-whity rounded-lg py-6">
      <div
        class="w-full h-1/5 flex flex-col justify-center items-center space-y-2"
      >
        <p class="text-primary text-2xl">Sign in</p>
        <p class="text-primary">EduHub</p>
      </div>
      <div class="w-full h-4/5 px-6">
        <div
          class="w-full h-1/3 flex flex-col justify-start items-start space-y-3"
        >
          <label class="text-primary text-sm">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full h-10 rounded-lg bg-white outline-none px-2 border-[1px] border-primary"
          />
        </div>
        <div
          class="w-full h-1/3 flex flex-col justify-start items-start space-y-3"
        >
          <label class="text-primary text-sm">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full h-10 rounded-lg bg-white outline-none px-2 border-[1px] border-primary"
          />
        </div>
        <div
          class="w-full h-1/3 flex flex-col justify-start items-center space-y-3"
        >
          <button
            type="submit"
            class="w-full h-10 rounded-lg bg-primary text-white"
          >
            Sign In
          </button>
          <p v-if="form.error" class="text-error text-sm">{{ form.error }}</p>
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
  title: "Eduhub || Login",
});

const form = reactive({
  email: "",
  password: "",
  error: "",
});
const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser();
const router = useRouter();

const login = async () => {
  const { error } = await auth.signInWithPassword({
    email: form.email,
    password: form.password,
  });

  if (!error) {
    return router.push("/");
  } else {
    form.error = error;
  }
};

watchEffect(async () => {
  user.value && (await navigateTo("/"));
});
</script>
