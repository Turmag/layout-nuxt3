<template>
  <section class="sandbox">
    <h1 class="sandbox__title a-font__h1">Vue 3 Nuxt 3</h1>
    <h2 class="sandbox__subtitle a-font__h2">Компоненты и методы</h2>
    <IconsTelegram />

    <div>
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
  </section>
</template>

<script setup>
const { $sayWord } = useNuxtApp();
$sayWord('это проверка работы функции');
const counter = useState('counter', () => Math.round(Math.random() * 1000));
</script>

<style scoped lang="scss">
@import './sandbox.scss';
</style>
