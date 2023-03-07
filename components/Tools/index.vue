<template>
  <section class="tools layout__wrapper">
    <h1 class="tools__title a-font__h1">Инструменты</h1>
    <div class="tools__header">
      <ul class="tools__header-list">
        <li class="tools__header-item cell-01">Технологии</li>
        <li class="tools__header-item cell-02">
          <div class="tools__header-img-wrapper">
            <IconsVue class="tools__header-image" />
          </div>
          <div class="tools__header-link-group">
            <a href="https://v3.ru.vuejs.org/" class="tools__header-sourse" target="_blank">Vue.js Doc</a>
            <button class="tools__header-link">#</button>
          </div>
        </li>
        <li class="tools__header-item cell-03">
          <div class="tools__header-img-wrapper">
            <IconsNuxt class="tools__header-image" />
          </div>
          <div class="tools__header-link-group">
            <a href="https://nuxt.com/" class="tools__header-sourse" target="_blank">Nuxt Doc</a>
            <button class="tools__header-link">#</button>
          </div>
        </li>
        <li class="tools__header-item cell-04">CSS</li>
        <li class="tools__header-item cell-05">CSS</li>
        <li class="tools__header-item cell-06">CSS</li>
        <li class="tools__header-item cell-07">CSS</li>
      </ul>
    </div>
    <div class="tools__section">
      <h2 class="tools__subtitle a-font__h3">SVG</h2>
      <IconsTelegram />
    </div>
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
