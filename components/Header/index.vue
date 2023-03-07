<template>
  <ul class="header">
    <li class="header__item a-font__s">
      <NuxtLink to="/tools">Инструменты</NuxtLink>
    </li>
    <li class="header__item a-font__s">
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
@import './header.scss';
</style>
