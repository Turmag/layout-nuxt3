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
    z-index: 10;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;

    @media screen and (min-width: $tablet) {
      max-width: rem(768);
      padding: 0 rem(40);
    }
    @media screen and (min-width: $tabletMax) {
      max-width: rem(832);
    }
    @media screen and (min-width: $desktopMin) {
      max-width: rem(1080);
    }
  }
}
</style>
