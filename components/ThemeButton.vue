<template>
  <button
      class="relative w-7 h-7 lg:w-8 lg:h-8"
      @click="setColorTheme($colorMode.value === 'light' ? 'dark' : 'light')"
  >
    <Icon
      class="absolute w-full h-full transition-all duration-300 rotate-180 opacity-0 dark:rotate-0 top-0 left-0 dark:opacity-100 text-text-dark"
      name="ph:sun-fill"
    />
    <Icon
      class="absolute top-0 left-0 text-text w-full h-full transition-all duration-300 scale-100 rotate-0 opacity-100 dark:rotate-180 dark:opacity-0 dark:scale-50"
      name="ion:moon-sharp"
    />
  </button>
</template>

<script setup>
const colorMode = useColorMode();

const setColorTheme = (color) => {
  colorMode.preference = color;
};
</script>