<template>
  <div class="layout layout-home">
    <img src="~/assets/images/my-logo.svg" alt="My Logo" class="layout__logo" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style scoped lang="scss">
.layout {
  &-home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--a-mainBg);
  }

  &__logo {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>
