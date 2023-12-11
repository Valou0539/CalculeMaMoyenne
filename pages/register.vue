<template>
  <main class="mx-4 mt-12 lg:mt-16 mb-24 min-h-[calc(100vh-280px)] lg:min-h-[calc(100vh-308px)]">
    <section class="max-w-[360px] mx-auto">
      <h1
          class="text-[40px] font-header font-bold mb-4 lg:text-[42px] leading-tight"
      >
        Bienvenue sur Calcule Ma Moyenne
      </h1>
      <p class="text-xl mb-8">
        Si c’est votre première fois sur notre application, alors vous êtes au bon endroit.
      </p>
      <form @submit.prevent="register">
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
            class="mb-4"
            autoComplete="new-password"
        />
        <CustomInput
            id="passwordConfirmation"
            name="passwordConfirmation"
            label="Répétition du mot de passe"
            type="password"
            placeholder="Mot de passe répété"
            v-model="passwordConfirmation"
            class="mb-8"
            autoComplete="new-password"
            :error="passwordError"
        />
        <div class="flex items-center gap-4">
          <button
              type="submit"
              class="flex-shrink-0 bg-primary-button dark:bg-primary-button-dark text-primary-button-text dark:text-primary-button-text-dark text-lg px-4 py-3 sm:w-auto sm:mb-0"
          >
            S'inscrire
          </button>
          <NuxtLink to="/" class="hover:underline underline-offset-2">
            J’ai déjà un compte, je me connecte
          </NuxtLink>
        </div>
      </form>
    </section>
    <Loader v-if="showLoader" />
  </main>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth-store";

const pseudo = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const pseudoError = ref('');
const passwordError = ref('');

const showLoader = ref(false);

const register = async () => {
  pseudoError.value = '';
  passwordError.value = '';
  if (!pseudo.value) {
    pseudoError.value = 'Pseudonyme Requis';
    return;
  }
  if (password.value.length < 5) {
    passwordError.value = 'Le mot de passe doit faire au moins 5 caractères';
    return;
  } else if (password.value !== passwordConfirmation.value) {
    passwordError.value = 'Les mots de passe ne sont pas identiques';
    return;
  }
  showLoader.value = true;

  const response = await useFetch('/api/user/register', {
    method: 'POST',
    body: {
      pseudo: pseudo.value,
      password: password.value,
    },
    watch: false
  });

  if (response.status.value === 'success') {
    const authStore = useAuthStore();
    authStore.setToken(response.data.value.token);

    navigateTo('/mes-notes');
  } else {
    switch (response.error.value.statusCode) {
      case 401:
        pseudoError.value = 'Ce pseudonyme est déjà utilisé';
        break;
      default:
        pseudoError.value = 'Une erreur est survenue';
        break;
    }
  }
  showLoader.value = false;
}
</script>