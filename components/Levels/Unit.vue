<template>
  <div class="mb-4">
    <div class="w-full flex justify-between items-center mb-4">
      <div @click="isFolded = !isFolded"  :role="role === 'admin' ? 'button' : 'none'" class="flex items-center">
        <Icon
            v-if="role === 'admin'"
            name="mdi:chevron-right"
            class="w-5 h-5 inline-block transition-all duration-300 ease-in-out"
            :class="{'rotate-90': !isFolded}"
        />
        <h3 class="text-lg lg:text-[26px] font-header font-semibold">{{ name }}</h3>
      </div>
      <div class="flex-shrink-0 flex gap-4">
        <Average
            v-if="role === 'user'"
            :average="average"
            numeratorTextSize="md:text-xl"
            denominatorTextSize="text-xs md:text-sm"
            backgroundAndTextColors="bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark"
        />
        <EditLevelsButtons
            v-if="role === 'admin'"
            @edit="$emit('editUnit')"
            @delete="deleteUnit"
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
      <div v-if="!isFolded || role === 'user'" class="ml-2 md:ml-4">
        <LevelForm
            v-if="role === 'admin'"
            apiRoot="pole_average"
            :levelName="'poleAverage' + id"
            levelLabel="Nom du pôle moyenne"
            :isLevelCoefficient="true"
            :editLevelId="editPoleAverageId"
            :editLevelName="editPoleAverageName"
            :editLevelCoefficient="editPoleAverageCoef"
            :token="token"
            :idParent="id"
            @reloadLevels="
              $emit('reloadLevels');
              editPoleAverageId = null;
              editPoleAverageName = null;
              editPoleAverageCoef = null;
            "
            class="mb-4"
        />
        <LevelsPoleAverage
            v-if="polesAverage.length"
            v-for="poleAverage in polesAverage"
            :key="poleAverage.id"
            :subjects="poleAverage.Subject"
            :id="poleAverage.id"
            :name="poleAverage.name"
            :coef="poleAverage.coefficient"
            :average="poleAverage.average"
            :token="token"
            @editPoleAverage="
              editPoleAverageId = poleAverage.id;
              editPoleAverageName = poleAverage.name;
              editPoleAverageCoef = poleAverage.coefficient;
            "
            @reloadLevels="
              $emit('reloadLevels');
            "
            :role="role"
        />
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
  average: {
    type: Number,
    required: false
  },
  polesAverage: {
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

const emit = defineEmits(['editUnit', 'reloadLevels']);

const editPoleAverageId = ref(null);
const editPoleAverageName = ref(null);
const editPoleAverageCoef = ref(null);

const isFolded = ref(true);

const deleteUnit = async () => {
  const response = await useFetch(`api/unit/remove`, {
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