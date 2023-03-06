export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayWord: (msg: string) => console.log(`Привет, ${msg}`),
    },
  };
});
