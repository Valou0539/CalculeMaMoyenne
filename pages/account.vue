<template>
  <main class="mx-4 mt-12 mb-24">
    <section class="max-w-sm mx-auto">
      <h2 class="text-[40px] lg:text-[42px] font-header font-bold mb-8">
        Compte de {{ pseudo }}
      </h2>
      <form @submit.prevent="changePseudo" class="mb-8">
        <CustomInput
            id="new-pseudo"
            name="new-pseudo"
            label="Changer le pseudonyme"
            type="text"
            placeholder="Nouveau pseudonyme"
            v-model="newPseudo"
            class="mb-6"
            :error="pseudoError"
        />
        <button type="submit" class="bg-primary-button text-primary-button-text px-4 py-2">
          Changer le pseudonyme
        </button>
      </form>
      <form @submit.prevent="changePassword" class="mb-16">
        <input aria-label="Pseudo actuel" class="hidden" :value="pseudo" type="text" autocomplete="username">
        <CustomInput
            id="password"
            name="password"
            label="Mot de passe"
            type="password"
            placeholder="Ancien mot de passe"
            v-model="password"
            class="mb-4"
            autoComplete="current-password"
            :error="passwordError"
        />
        <CustomInput
            id="newPassword"
            name="newPassword"
            label="Nouveau mot de passe"
            type="password"
            placeholder="Nouveau mot de passe"
            v-model="newPassword"
            class="mb-4"
            autoComplete="new-password"
        />
        <CustomInput
            id="newPasswordConfirmation"
            name="newPasswordConfirmation"
            label="Répétition du mot de passe"
            type="password"
            placeholder="Mot de passe répété"
            v-model="newPasswordConfirmation"
            class="mb-6"
            autoComplete="new-password"
            :error="newPasswordError"
        />
        <button type="submit" class="bg-primary-button text-primary-button-text px-4 py-2">
          Changer le mot de passe
        </button>
      </form>
      <button @click="disconnect" class="block bg-delete text-delete-text px-4 py-2 mb-4">
        Se déconnecter
      </button>
      <button @click="deleteAccount" class="block bg-delete text-delete-text px-4 py-2">
        Supprimer le compte
      </button>
    </section>
    <Loader v-if="showLoader" />
  </main>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth-store";

const authStore = useAuthStore();

const pseudo = ref(await getPseudo());

const newPseudo = ref('');
const password = ref('');
const newPassword = ref('');
const newPasswordConfirmation = ref('');

const pseudoError = ref('');
const passwordError = ref('');
const newPasswordError = ref('');

const showLoader = ref(false);

async function getPseudo() {
  const {data} = await useFetch('/api/user/ownself', {
    headers: {
      Authorization: authStore.token
    },
    pick: ['user'],
    watch: false
  });
  return data.value.user.pseudo;
}

const changePseudo = async () => {
  if (!newPseudo.value) {
    pseudoError.value = 'Pseudonyme Requis';
    return;
  }
  pseudoError.value = '';
  showLoader.value = true;

  const response = await useFetch('/api/user/rename', {
    method: 'PUT',
    headers: {
      Authorization: authStore.token
    },
    body: {
      pseudo: newPseudo.value,
    },
    watch: false
  });

  if (response.status.value === "success") {
    pseudo.value = newPseudo.value;
    newPseudo.value = '';
  } else {
    switch (response.error.value.statusCode) {
      case 401:
        pseudoError.value = 'Ce pseudonyme est déjà pris';
        break;
      default:
        pseudoError.value = 'Une erreur est survenue';
    }
  }
  showLoader.value = false;
}

const changePassword = async () => {
  passwordError.value = '';
  newPasswordError.value = '';
  if (password.value.length < 5) {
    passwordError.value = 'L\'ancien mot de passe doit faire au moins 5 caractères';
    return;
  }
  if (newPassword.value.length < 5) {
    newPasswordError.value = 'Le nouveau mot de passe doit faire au moins 5 caractères';
    return;
  } else if (newPassword.value !== newPasswordConfirmation.value) {
    newPasswordError.value = 'Les nouveaux mots de passe ne sont pas identiques';
    return;
  }
  showLoader.value = true;

  const response = await useFetch('/api/user/password', {
    method: 'PUT',
    headers: {
      Authorization: authStore.token
    },
    body: {
      password: password.value,
      newPassword: newPassword.value,
    },
    watch: false
  });

  if (response.status.value === "success") {
    password.value = '';
    newPassword.value = '';
    newPasswordConfirmation.value = '';
  } else {
    switch (response.error.value.statusCode) {
      case 401:
        passwordError.value = 'Mot de passe incorrect';
        break;
      default:
        newPasswordError.value = 'Une erreur est survenue';
    }
  }
  showLoader.value = false;
}

const disconnect = () => {
  authStore.setToken(null);
  navigateTo('/');
}

const deleteAccount = async () => {
  let sure = confirm('Êtes-vous sûr de vouloir supprimer votre compte ?');
  if (!sure) return;

  await useFetch('/api/user/ownself', {
    method: 'DELETE',
    headers: {
      Authorization: authStore.token
    },
    watch: false
  });
  authStore.setToken(null);
  navigateTo('/');
}
</script>