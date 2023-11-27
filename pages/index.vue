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
    <section class="mt-12 mb-24 max-w-xl lg:max-w-4xl mx-auto">
      <h2
        class="text-[26px] sm:text-[32px] max-w-sm lg:max-w-none mx-auto font-header font-bold mb-12 lg:text-[42px] leading-tight text-center"
      >
        Pourquoi utiliser notre application
      </h2>
      <div class="grid justify-center lg:grid-cols-3 gap-6 mt-8 gap-x-16 gap-y-8">
        <AppAdvantage iconName="mdi:secure-outline">
          Toutes vos notes sont uniquement accessibles par vous. Personne y compris nous, ne peut voir ou accéder à vos
          notes.
        </AppAdvantage>
        <AppAdvantage iconName="mdi:run-fast">
          Tout se fait très rapidement, vous avez juste à retranscrire les groupes de notes et les notes de OGE vers
          cette application et nous nous chargeons de tous les calculs pour vous
        </AppAdvantage>
        <AppAdvantage iconName="tabler:eye-star">
          L’interface est simple d’utilisation et épurée, elle contient également un mode clair et sombre selon vos
          préférences
        </AppAdvantage>
      </div>
    </section>
  </main>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth-store";

const pseudo = ref("");
const password = ref("");

const pseudoError = ref("");
const passwordError = ref("");

const login = async () => {
  if (pseudo.value === "") {
    pseudoError.value = "Pseudonyme Requis";
    return;
  }
  pseudoError.value = "";
  if (password.value.length < 5) {
    passwordError.value = "Mot de passe trop court";
    return;
  }
  passwordError.value = "";

  const response = await useFetch('/api/user/login', {
    method: 'POST',
    body: {
      pseudo: pseudo.value,
      password: password.value,
    },
    watch: false
  });

  if (response.data.value.token) {
    const authStore = useAuthStore();
    authStore.setToken(response.data.value.token);

    navigateTo('/mes-notes');
  }
}
</script>
