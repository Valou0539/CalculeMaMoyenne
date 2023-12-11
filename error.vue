<template>
  <NuxtLayout>
    <main class="w-full flex items-center flex-col min-h-[calc(100vh-280px)] lg:min-h-[calc(100vh-308px)] mt-16 mb-24">
      <h2 class="text-[42px] sm:text-[10vw] lg:text-[90px] font-header font-bold mb-4 leading-tight">Erreur {{error.statusCode}}</h2>
      <button class="lg:text-lg bg-primary-button text-primary-button-text px-4 py-2" @click="handleError">Revenir en lieu sûr</button>
    </main>
  </NuxtLayout>
</template>

<script setup>
  const props = defineProps({
    error: Object
  })

  const handleError = () => clearError({ redirect: '/' });
</script>