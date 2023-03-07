<template>
  <section class="tools layout__wrapper">
    <h1 class="tools__title a-font__h1">Инструменты</h1>
    <div class="tools__header">
      <ul class="tools__header-list">
        <li class="tools__header-item cell-01">Технологии</li>
        <li class="tools__header-item cell-02">Vue</li>
        <li class="tools__header-item cell-03">HTML</li>
        <li class="tools__header-item cell-04">CSS</li>
      </ul>
    </div>
    <div class="tools__section">
      <h2 class="tools__subtitle a-font__h3">SVG</h2>
      <IconsTelegram />
    </div>
    <IconsNuxt />
  </section>
</template>

<script>
export default {
  name: 'Tools',
};
</script>

<style scoped lang="scss">
@import './tools.scss';
</style>
