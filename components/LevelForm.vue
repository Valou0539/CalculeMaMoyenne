<template>
  <form @submit.prevent="addOrEditLevel">
    <CustomInput
        :id="levelName + 'Value'"
        :name="levelName + 'Value'"
        :label="levelLabel"
        :placeholder="levelLabel"
        type="text"
        autoComplete="off"
        v-model="name"
        class="mb-4"
        :error="nameError"
    />

    <CustomInput
        v-if="isLevelCoefficient"
        :id="levelName + 'Coefficient'"
        :name="levelName + 'Coefficient'"
        label="Coefficient"
        placeholder="Coefficient"
        type="number"
        autoComplete="off"
        v-model="coef"
        class="mb-4"
        :error="coefError"
    />
    <div class="flex gap-2">
      <button
          v-if="editLevelId && !loading"
          @click.prevent="
            name = '';
            coef = null;
            id = null;
            $emit('reloadLevels')
          "
          type="reset"
          class="bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark px-4 py-2 rounded"
      >
        <Icon name="maki:cross" size="26px" />
      </button>
      <button type="submit" class="bg-primary-button text-primary-button-text px-4 py-2 rounded w-full text-lg flex-grow flex items-center justify-center gap-1">
        <Icon v-if="loading" class="animate-spin" name="tabler:loader-2" size="26px" />
        {{
          loading ?
            !editLevelId
              ? 'Ajout en cours' : 'Modification en cours'
            : !editLevelId
              ? 'Ajouter' : 'Modifier'
        }}
      </button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  token: {
    type: String,
    required: true
  },
  apiRoot: {
    type: String,
    required: true
  },
  levelName: {
    type: String,
    required: true
  },
  levelLabel: {
    type: String,
    required: true
  },
  isLevelCoefficient: {
    type: Boolean,
    default: false
  },
  editLevelId: {
    type: Number,
    required: false
  },
  editLevelName: {
    type: String,
    required: false
  },
  editLevelCoefficient: {
    type: Number,
    required: false
  },
  idParent: {
    type: Number,
    required: false
  },
});

const emit = defineEmits(['reloadLevels']);

const id = ref(props.editLevelId);
const name = ref(props.editLevelName);
const coef = ref(props.editLevelCoefficient);

const nameError = ref(null);
const coefError = ref(null);

const loading = ref(false);

const addOrEditLevel = async () => {
  nameError.value = null;
  coefError.value = null;
  if (!name.value) {
    nameError.value = 'Nom requis';
    return;
  }
  if (props.isLevelCoefficient && coef.value === null) {
    coefError.value = 'Coefficient requis';
    return;
  }
  loading.value = true;
  if (props.editLevelId) {
    await editLevel()
  } else {
    await addLevel()
  }
  loading.value = false;
};

const addLevel = async () => {
  const response = await useFetch(`api/${props.apiRoot}/create`, {
    method: 'POST',
    headers: {
      Authorization: props.token,
    },
    body: {
      name: name.value,
      coefficient: parseFloat(coef.value),
      idAcademicYear: props.idParent,
      idSemester: props.idParent,
      idUnit: props.idParent,
      idPoleAverage: props.idParent
    }
  });
  if (response.status.value === "success") {
    name.value = '';
    coef.value = null;
    emit('reloadLevels');
  }
};

const editLevel = async () => {
  const response = await useFetch(`api/${props.apiRoot}/edit`, {
    method: 'PUT',
    headers: {
      Authorization: props.token,
    },
    body: {
      id: id.value,
      name: name.value,
      coefficient: parseFloat(coef.value),
    }
  });
  if (response.status.value === "success") {
    name.value = '';
    coef.value = null;
    id.value = null;
    emit('reloadLevels');
  }
};

watch(() => props.editLevelId, () => {
  id.value = props.editLevelId;
  name.value = props.editLevelName;
  coef.value = props.editLevelCoefficient;
});
</script>