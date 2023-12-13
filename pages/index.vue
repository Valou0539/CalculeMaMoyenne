<template>
  <main class="mx-4">
    <section class="mt-12 mb-20 max-w-xl lg:max-w-4xl mx-auto lg:flex gap-6 items-center">
      <div class="mb-8 lg:mb-0">
        <h1 class="text-[40px] font-header font-bold mb-4 lg:text-[67px] leading-tight">Calculer votre moyenne
          simplement</h1>
        <p class="text-xl lg:text-[22px] w-4/5">
          Entrez vos notes de BUT informatique sur notre application pour un calcul rapide et sans effort de votre
          moyenne.
        </p>
      </div>
      <form class="lg:w-[356px] flex-shrink-0" @submit.prevent="login">
        <CustomInput
            id="pseudo"
            name="pseudo"
            label="Pseudonyme"
            type="text"
            placeholder="Pseudonyme"
            v-model="pseudo"
            class="mb-4"
            autoComplete="username"
            :error="pseudoError"
        />
        <CustomInput
            id="password"
            name="password"
            label="Mot de passe"
            type="password"
            placeholder="Mot de passe"
            v-model="password"
            class="mb-8"
            autoComplete="current-password"
            :error="passwordError"
        />
        <div class="sm:flex items-center gap-4">
          <button
              type="submit"
              class="w-full flex-shrink-0 bg-primary-button dark:bg-primary-button-dark text-primary-button-text dark:text-primary-button-text-dark text-lg px-4 py-3 mb-4 sm:w-auto sm:mb-0"
          >
            Se connecter
          </button>
          <NuxtLink to="/register" class="hover:underline underline-offset-2">
            Je n’ai pas de compte, j’en crée un
          </NuxtLink>
        </div>
      </form>
    </section>
    <section class="mt-12 mb-24 sm:max-w-xl lg:max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 max-w-[400px]">
      <AppAdvantage class="sm:row-span-2">
        <div>
          <h2 class="text-[32px] sm:text-[40px] lg:text-[50px] font-header font-bold tracking-tight">
            Les points <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-button to-accent">forts</span> de Calcule Ma <span class="pr-8">Moyenne</span>
          </h2>
          <NuxtImg class="absolute z-50 bottom-[-20px] right-[-12px] sm:right-[-20px] w-16 h-16 sm:w-[104px] sm:h-[104px]" src="/img/logo.png" width="104" height="104" alt="" />
        </div>
      </AppAdvantage>
      <AppAdvantage>
        <div class="flex gap-4 items-center w-full justify-between">
          <p class="font-header text-[26px] lg:text-[32px] tracking-tight lg:tracking-normal">Vos données sont toutes sécurisées</p>
          <Icon class="w-16 h-16 lg:w-20 lg:h-20 text-accent opacity-20 flex-shrink-0" name="material-symbols:lock" />
        </div>
      </AppAdvantage>
      <AppAdvantage>
        <div class="flex gap-4 items-center w-full justify-between">
          <Icon class="w-16 h-16 lg:w-20 lg:h-20 text-accent opacity-20 flex-shrink-0" name="akar-icons:thunder" />
          <p class="font-header text-[26px] lg:text-[32px] tracking-tight lg:tracking-normal">Ajouter vos notes en quelque clics</p>
        </div>
      </AppAdvantage>
      <AppAdvantage class="sm:col-span-2">
        <div class="w-full flex flex-col-reverse gap-4 min-[400px]:flex-row">
          <div class="flex flex-row-reverse gap-4 justify-between min-[400px]:block flex-shrink min-[400px]:max-w-[160px] lg:max-w-[212px]">
            <p class="font-header min-[400px]:mb-2 text-[26px] lg:text-[32px] tracking-tight lg:tracking-normal flex-grow-0">
              Une interface simple
              <Icon class="w-12 h-12 lg:w-16 lg:h-16 rotate-[-90deg] min-[400px]:rotate-0" name="pepicons-print:arrow-right" />
              <span class="inline-block">et intuitive</span>
            </p>
            <Icon class="w-16 h-16 lg:w-20 lg:h-20 text-accent opacity-20 flex-shrink-0" name="tabler:eye-star" />
          </div>
          <div class="app-preview flex-grow aspect-square min-[400px]:aspect-auto">
          </div>
        </div>
      </AppAdvantage>
    </section>
    <Loader v-if="showLoader" />
  </main>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth-store";

const pseudo = ref("");
const password = ref("");

const pseudoError = ref("");
const passwordError = ref("");

const showLoader = ref(false);

const login = async () => {
  pseudoError.value = "";
  passwordError.value = "";
  if (pseudo.value === "") {
    pseudoError.value = "Pseudonyme Requis";
    return;
  }
  if (password.value.length < 5) {
    passwordError.value = "Mot de passe trop court";
    return;
  }
  showLoader.value = true;

  const response = await useFetch('/api/user/login', {
    method: 'POST',
    body: {
      pseudo: pseudo.value,
      password: password.value,
    },
    watch: false
  });
  if (response.status.value === "success") {
    const authStore = useAuthStore();
    authStore.setToken(response.data.value.token);

    navigateTo('/mes-notes');
  } else {
    switch (response.error.value.statusCode) {
      case 401:
        passwordError.value = "Mot de passe incorrect";
        break;
      case 404:
        pseudoError.value = "Pseudonyme incorrect";
        break;
      default:
        passwordError.value = "Une erreur est survenue";
        break;
    }
  }
  showLoader.value = false;
}
</script>
