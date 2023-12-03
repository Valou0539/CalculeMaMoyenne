<template>
  <div class="border border-secondary-button dark:border-secondary-button-dark p-1 mb-2">
    <div class="flex justify-between items-center border-b border-b-secondary-button dark:border-b-secondary-button-dark pb-1 mb-4">
      <h6 class="font-medium">
        {{ name }}
        <span class="text-xs font-light inline-block">Coef {{ coef.toFixed(1) }}</span>
      </h6>
      <div class="flex gap-2 items-center">
        <Average
            :average="average"
        />
        <EditLevelsButtons @edit="$emit('editGradesGroup')" @delete="deleteGradesGroup" />
      </div>
    </div>
    <div>
      <Grade
          v-for="grade in grades"
          :key="grade.id"
          :id="grade.id"
          :token="token"
          :coef="grade.coefficient"
          :value="grade.value"
          @editGrade="
            gradeValue = grade.value;
            gradeCoef = grade.coefficient;
            editGradeId = grade.id;
          "
          @reloadLevels="$emit('reloadLevels')"
      />
      <form
          @submit.prevent="addOrEditGrade"
          class="px-1 flex flex-col sm:flex-row md:flex-col lg:flex-row items-end sm:items-center md:items-end lg:items-center gap-2 justify-end"
      >
        <div class="flex items-center gap-1 flex-wrap justify-end">
          <label for="gradeValue">Note :</label>
          <div class="flex items-center border border-accent py-1 px-2 block border-none bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark">
            <input
                v-model="gradeValue"
                id="gradeValue"
                type="number"
                step="0.25"
                min="0"
                class="bg-secondary-button dark:bg-secondary-button-dark border-none w-12 px-1 py-0.5 leading-none"
            />
            /20
          </div>
        </div>
        <div class="flex items-center gap-1 flex-wrap justify-end">
          <label for="gradeCoef">Coefficient :</label>
          <input
              v-model="gradeCoef"
              type="number"
              step="0.5"
              min="0"
              id="gradeCoef"
              class="border border-accent py-1 px-2 w-14 border-none bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark"
          />
        </div>
        <div class="flex items-center gap-1">
          <button
              v-if="editGradeId"
              @click.prevent="
                  gradeValue = null;
                  gradeCoef = null;
                  editGradeId = null;
                "
              class="bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark p-1 rounded"
          >
            <Icon style="display: block" name="maki:cross" size="20px" />
          </button>
          <button type="submit" class="bg-primary-button text-primary-button-text px-1 py-0.5 rounded">
            {{ !editGradeId ? 'Ajouter' : 'Modifier' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Grade from "~/components/Levels/Grade.vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  coef: {
    type: Number,
    required: true
  },
  average: {
    type: Number,
    required: false
  },
  grades: {
    type: Array,
    required: false
  },
  token: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['editGradesGroup', 'reloadLevels']);

const gradeValue = ref(null);
const gradeCoef = ref(null);
const editGradeId = ref(null);

const deleteGradesGroup = async () => {
  let sure = confirm('Êtes-vous sûr de vouloir supprimer ce groupe de notes ?');
  if (!sure) return;
  const response = await useFetch(`/api/grade_group/remove`, {
    method: 'DELETE',
    headers: {
      Authorization: props.token
    },
    body: {
      id: props.id
    },
  })
  emit('reloadLevels')
}

const addOrEditGrade = async () => {
  if (editGradeId.value) {
    await editGrade()
  } else {
    await addGrade()
  }
};

async function addGrade() {
  const response = await useFetch(`api/grade/create`, {
    method: 'POST',
    headers: {
      Authorization: props.token,
    },
    body: {
      value: gradeValue.value,
      coefficient: gradeCoef.value,
      idGradeGroup: props.id
    },
    watch: false
  })
  if (response.status.value === "success") {
    gradeValue.value = null;
    gradeCoef.value = null;
    emit('reloadLevels');
  }
}

async function editGrade() {
  const response = await useFetch(`api/grade/edit`, {
    method: 'PUT',
    headers: {
      Authorization: props.token,
    },
    body: {
      id: editGradeId.value,
      value: gradeValue.value,
      coefficient: gradeCoef.value,
    },
    watch: false
  })
  if (response.status.value === "success") {
    gradeValue.value = null;
    gradeCoef.value = null;
    editGradeId.value = null;
    emit('reloadLevels');
  }
}
</script>