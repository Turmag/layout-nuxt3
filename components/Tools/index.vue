<template>
  <section class="tools">
    <p>Инструменты</p>
  </section>
</template>

<script>
export default {
  name: 'Tools',
};
</script>

<style scoped lang="scss">
.tools {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border-left: 10px solid var(--a-white);

  &__logo {
    position: absolute;
    top: 0;
    left: -10px;
  }
}
</style>
