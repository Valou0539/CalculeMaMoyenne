<template>
  <div class="bg-background dark:bg-background-dark text-text dark:text-text-dark font-body min-h-screen">
    <header class="h-20 lg:h-24 flex items-center justify-between px-2 md:px-6">
      <NuxtLink to="/" class="flex items-center">
        <NuxtImg
          class="w-12 h-12 lg:w-16 lg:h-16"
          src="img/logo.png"
          alt="logo de CalculeMaMoyenne"
        />
        <h1 class="font-logo text-xl lg:text-3xl text sm:block hidden">
          CalculeMaMoyenne
        </h1>
      </NuxtLink>
      <div class="flex items-center gap-3 md:gap-6">
        <ThemeButton />
        <div class="flex items-center gap-2 md:gap-4">
          <NuxtLink v-if="!!token" to="/account" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark">
            <Icon class="md:w-[26px] md:h-[26px] absolute md:static hidden w-0 h-0 md:block" name="mdi:account" />
            <span class="text-xl">Compte</span>
          </NuxtLink>
          <NuxtLink to="https://www.buymeacoffee.com/devboost" class="flex items-center gap-2 leading-none border-primary-button border rounded-lg block py-[7px] px-4">
            <Icon class="w-[26px] h-[26px]" name="simple-icons:buymeacoffee" />
            <span class="hidden md:block text-xl">Offrez-nous un café</span>
          </NuxtLink>
        </div>

      </div>
    </header>

    <slot/>

    <footer class="w-full flex items-center justify-center gap-x-12 gap-y-4 flex-wrap px-6  text-sm md:text-[15px] py-4">
      <NuxtLink to="https://www.dev-boost.fr" target="_blank" class="flex items-center gap-1 font-light">
        Site réalisé par Dev Boost
        <Icon name="mdi:external-link" class="md:w-[18px] md:h-[18px]"  size="16px"/>
      </NuxtLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from "~/stores/auth-store";

  const authStore = useAuthStore();
  const { token } = storeToRefs(authStore);
</script>