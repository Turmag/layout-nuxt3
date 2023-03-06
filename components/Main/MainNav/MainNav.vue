<template>
  <ul class="main-nav">
    <li class="main-nav__item">
      <NuxtLink to="/tools">Инструменты</NuxtLink>
    </li>
    <li class="main-nav__item">
      <NuxtLink to="/sandbox">Песочница</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MainNav',
};
</script>

<style lang="scss">
@import './main-nav.scss';
</style>
