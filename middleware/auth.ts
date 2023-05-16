export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (!user) {
    return navigateTo("/login");
  }
});
