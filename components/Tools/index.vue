<template>
  <section class="tools layout__wrapper">
    <h1 class="tools__title a-font__h1">Инструменты</h1>
    <div class="tools__header">
      <ul class="tools__header-list">
        <li class="tools__header-item cell-01">Технологии</li>
        <li class="tools__header-item" :class="item.cell" v-for="(item, index) in techList" :key="index">
          <div class="tools__header-img-wrapper">
            <component :is="item.icon"></component>
          </div>
          <div class="tools__header-link-group">
            <a :href="`${item.href}`" class="tools__header-sourse" target="_blank">{{ item.title }}</a>
            <button class="tools__header-link">#</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="tools__section">
      <h2 class="tools__subtitle a-font__h3">SVG</h2>
      <component :is="IconsTelegram"></component>
    </div>
  </section>
</template>

<script setup>
import { IconsVue, IconsNuxt, IconsTelegram } from '#components';
const techList = [
  {
    cell: 'cell-02',
    icon: IconsVue,
    href: 'https://v3.ru.vuejs.org/',
    title: 'Vue.js Doc',
  },
  {
    cell: 'cell-03',
    icon: IconsNuxt,
    href: 'https://nuxt.com/',
    title: 'Nuxt Doc',
  },
  {
    cell: 'cell-04',
    icon: IconsNuxt,
    href: 'https://nuxt.com/',
    title: 'Nuxt Doc',
  },
];
</script>

<style scoped lang="scss">
@import './tools.scss';
</style>
