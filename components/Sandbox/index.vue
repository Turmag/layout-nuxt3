<template>
  <section class="sandbox">
    <h1 class="sandbox__title">Компоненты и методы</h1>
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
