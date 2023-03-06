export default defineNuxtRouteMiddleware((to, from) => {
  console.log(from);

  // const isloggedIn = false;
  // console.log(to);
  // if (isloggedIn) {
  //   return navigateTo(to.fullPath);
  // }
  //
  // return navigateTo('/');
  // if (to.params.id === '1') {
  //   return abortNavigation();
  // }
  // return navigateTo('/');
});
