<template>
  <div class="mb-4">
    <div class="w-full flex justify-between items-center mb-4">
      <h2 class="text-[22px] lg:text-[42px] font-header font-bold">{{ name }}</h2>
      <div class="flex-shrink-0 flex gap-4">
        <EditLevelsButtons
            v-if="role === 'admin'"
            @edit="$emit('editSemester')"
            @delete="deleteSemester"
            iconSize="23px"
        />
        <Average
            v-if="role === 'user'"
            :average="average"
            numeratorTextSize="md:text-xl"
            denominatorTextSize="text-xs md:text-sm"
            backgroundAndTextColors="bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark"
        />
        <button @click="isFolded = !isFolded" aria-label="déplier ou replier le semestre" class="flex-shrink-0 p-1 rounded-lg bg-primary-button text-primary-button-text">
          <Icon
              name="fluent:chevron-right-12-filled"
              class="w-[19px] lg:w-[23px] h-[19px] lg:h-[23px] transition-all duration-300 ease-in-out"
              :class="{'rotate-90': !isFolded}"
          />
        </button>
      </div>
    </div>
    <div>
      <Transition
          enter-active-class="transtion-all duration-500 ease-in overflow-y-hidden"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[300vh] opacity-100"
          leave-active-class="transtion-all duration-500 ease-out overflow-y-hidden"
          leave-from-class="max-h-[300vh] opacity-100"
          leave-to-class="max-h-0 opacity-0"
      >
        <div v-if="!isFolded" class="ml-2 md:ml-4">
          <LevelForm
              v-if="role === 'admin'"
              apiRoot="unit"
              levelName="unit"
              levelLabel="Nom de l'unité"
              :isLevelCoefficient="false"
              :editLevelId="editUnitId"
              :editLevelName="editUnitName"
              :token="token"
              :idParent="id"
              @reloadLevels="
                $emit('reloadLevels');
                editUnitId = null;
                editUnitName = null;
              "
              class="mb-8"
          />
          <LevelsUnit
              v-if="units.length"
              v-for="unit in units"
              :key="unit.id"
              :polesAverage="unit.PoleAverage"
              :id="unit.id"
              :name="unit.name"
              :average="unit.average"
              :token="token"
              @editUnit="
                editUnitId = unit.id;
                editUnitName = unit.name;
              "
              @reloadLevels="
                $emit('reloadLevels');
              "
              :role="role"
          />
        </div>
      </Transition>
    </div>
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
  average: {
    type: Number,
    required: false
  },
  units: {
    type: Array,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: false,
    default: 'user'
  },
});

const emit = defineEmits(['editSemester', 'reloadLevels']);

const isFolded = ref(true);

const editUnitId = ref(null)
const editUnitName = ref(null)

const deleteSemester = async () => {
  const response = await useFetch(`api/semester/remove`, {
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
</script>