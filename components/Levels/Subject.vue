<template>
  <div class="mb-2">
    <div class="w-full flex justify-between items-center mb-4">
      <div @click="isFolded = !isFolded" role="button" class="flex items-center">
        <Icon
            v-if="role === 'user'"
            name="mdi:chevron-right"
            class="w-5 h-5 inline-block transition-all duration-300 ease-in-out"
            :class="{'rotate-90': !isFolded}"
        />
        <h5 class="lg:text-xl font-header">
          {{ name }}
          <span class="text-xs font-light inline-block">Coef {{ coef }}</span>
        </h5>
      </div>
      <div class="flex-shrink-0 flex gap-4">
        <Average
            v-if="role === 'user'"
            :average="average"
            numeratorTextSize="md:text-lg"
            denominatorTextSize="text-xs md:text-sm"
        />
        <EditLevelsButtons
            v-if="role === 'admin'"
            @edit="$emit('editSubject')"
            @delete="deleteSubject"
            iconSize="23px"
        />
      </div>
    </div>

    <Transition
        enter-active-class="transtion-all duration-500 ease-in overflow-y-hidden"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-[300vh] opacity-100"
        leave-active-class="transtion-all duration-500 ease-out overflow-y-hidden"
        leave-from-class="max-h-[300vh] opacity-100"
        leave-to-class="max-h-0 opacity-0"
    >
      <div v-if="role === 'user' && !isFolded" class="bg-background dark:bg-background-dark p-1">
        <LevelsGradesGroup
            v-if="gradesGroups.length"
            v-for="gradesGroup in gradesGroups"
            :key="gradesGroup.id"
            :grades="gradesGroup.Grade"
            :id="gradesGroup.id"
            :name="gradesGroup.name"
            :coef="gradesGroup.coefficient"
            :average="gradesGroup.average"
            :token="token"
            @editGradesGroup="
                editGradeGroupId = gradesGroup.id;
                gradeGroupName = gradesGroup.name;
                gradeGroupCoef = gradesGroup.coefficient;
            "
            @reloadLevels="
              $emit('reloadLevels');
            "
        />
        <form
            @submit.prevent="addOrEditGradeGroup"
            class="border border-secondary-button dark:border-secondary-button-dark py-2 px-1 flex flex-col sm:flex-row md:flex-col lg:flex-row items-end sm:items-center md:items-end lg:items-center gap-2 justify-end"
        >
          <div class="flex items-center gap-1 flex-wrap justify-end">
            <label for="gradeGroupName">Nom du groupe :</label>
            <input
                v-model="gradeGroupName"
                id="gradeGroupName"
                type="text"
                class="border border-accent py-1 px-2 w-28 block border-none bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark"
            />
          </div>
          <div class="flex items-center gap-1 flex-wrap justify-end">
            <label for="gradeGroupCoef">Coefficient :</label>
            <input
                v-model="gradeGroupCoef"
                type="number"
                step="0.5"
                min="0"
                id="gradeGroupCoef"
                class="border border-accent py-1 px-2 w-14 border-none bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark"
            />
          </div>
          <div class="flex items-center gap-1">
            <button
                v-if="editGradeGroupId"
                @click.prevent="
                  gradeGroupName = null;
                  gradeGroupCoef = null;
                  editGradeGroupId = null;
                "
                class="bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark p-1 rounded"
            >
              <Icon style="display: block" name="maki:cross" size="20px" />
            </button>
            <button type="submit" class="bg-primary-button text-primary-button-text px-1 py-0.5 rounded">
              {{ !editGradeGroupId ? 'Ajouter' : 'Modifier' }}
            </button>
          </div>
        </form>
      </div>
    </Transition>
  </div>
</template>

<script setup>
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
  gradesGroups: {
    type: Array,
    required: false
  },
  token: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: false,
    default: 'user'
  }
});

const emit = defineEmits(['editSubject', 'reloadLevels']);

const isFolded = ref(true);

const editGradeGroupId = ref(null);
const gradeGroupName = ref(null);
const gradeGroupCoef = ref(null);


const deleteSubject = async () => {
  const response = await useFetch(`api/subject/remove`, {
    method: 'DELETE',
    headers: {
      Authorization: props.token,
    },
    body: {
      id: props.id
    },
    watch: false
  })
  emit('reloadLevels')
};

const addOrEditGradeGroup = async () => {
  if (editGradeGroupId.value) {
    await editGradeGroup()
  } else {
    await addGradeGroup()
  }
};

async function addGradeGroup() {
  const response = await useFetch(`api/grade_group/create`, {
    method: 'POST',
    headers: {
      Authorization: props.token,
    },
    body: {
      name: gradeGroupName.value,
      coefficient: gradeGroupCoef.value,
      idSubject: props.id
    },
    watch: false
  })
  if (response.status.value === "success") {
    gradeGroupName.value = null;
    gradeGroupCoef.value = null;
    emit('reloadLevels');
  }
}

async function editGradeGroup() {
  const response = await useFetch(`api/grade_group/edit`, {
    method: 'PUT',
    headers: {
      Authorization: props.token,
    },
    body: {
      id: editGradeGroupId.value,
      name: gradeGroupName.value,
      coefficient: gradeGroupCoef.value,
    },
    watch: false
  })
  if (response.status.value === "success") {
    gradeGroupName.value = null;
    gradeGroupCoef.value = null;
    editGradeGroupId.value = null;
    emit('reloadLevels');
  }
}
</script>