<template>
  <div class="layout">
    <Header />
    <NuxtLink to="/">
      <img src="~/assets/images/my-logo.svg" alt="My Logo" class="layout__logo" />
    </NuxtLink>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'default',
};
</script>

<style lang="scss">
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  &__logo {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
