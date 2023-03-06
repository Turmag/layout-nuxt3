<template>
  <ul class="header">
    <li class="header__item">
      <NuxtLink to="/tools">Инструменты</NuxtLink>
    </li>
    <li class="header__item">
      <NuxtLink to="/sandbox">Песочница</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  background-color: var(--a-mainBg);

  &__item {
    margin: 0 10px;
    text-transform: uppercase;
  }
}
</style>
