<template>
  <section class="main flex w-full">
    <img src="~/assets/images/my-logo.svg" alt="My Logo" class="main__logo" />
    <MainNav />
  </section>
</template>

<script>
export default {
  name: 'index',
};
</script>

<style scoped lang="scss">
.main {
  position: relative;
  align-items: center;
  height: 100vh;
  border-left: 10px solid var(--a-white);

  &__logo {
    position: absolute;
    top: 0;
    left: -10px;
  }
}
</style>
