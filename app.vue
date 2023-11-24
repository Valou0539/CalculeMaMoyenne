<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const colorMode = useColorMode();
colorMode.preference = "system";
</script>