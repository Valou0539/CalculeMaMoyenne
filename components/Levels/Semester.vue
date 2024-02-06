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
            :modifier="role === 'user' ? bonus - malus : null"
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
              :levelName="'unit' + id"
              levelLabel="Nom de l'unité"
              :isLevelCoefficient="true"
              :editLevelId="editUnitId"
              :editLevelName="editUnitName"
              :editLevelCoefficient="editUnitCoef"
              :token="token"
              :idParent="id"
              @reloadLevels="
                $emit('reloadLevels');
                editUnitId = null;
                editUnitName = null;
                editUnitCoef = null;
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
              :coef="unit.coefficient"
              :average="unit.average"
              :bonus="bonus"
              :malus="malus"
              :token="token"
              @editUnit="
                editUnitId = unit.id;
                editUnitName = unit.name;
                editUnitCoef = unit.coefficient;
              "
              @reloadLevels="
                $emit('reloadLevels');
              "
              :role="role"
          />
          <div v-if="role === 'user'">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg lg:text-[26px] font-header font-semibold">
                Bonus / Malus
              </h3>
              <div class="px-2 py-1 rounded-lg bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark font-body font-bold">
                {{ bonus - malus }}%
              </div>
            </div>
            <div class="ml-2 bg-accent/10 p-1 rounded">
              <div :class="{'mb-2' : editBonus}" class="border border-[rgba(0,255,0,.5)] p-1 rounded flex items-center justify-between">
                <h4 class="lg:text-xl font-header font-medium">Bonus</h4>
                <div class="flex items-center gap-1 font-bold lg:text-xl">
                  {{ bonus }}%
                  <button @click="editBonus = !editBonus" aria-label="modifier le bonus">
                    <Icon
                        v-if="!editBonus"
                        name="tdesign:edit-1"
                        class="w-[22px] h-[22px]"
                    />
                    <Icon
                        v-else
                        name="maki:cross"
                        class="w-[22px] h-[22px]"
                    />
                  </button>
                </div>
              </div>
              <form @submit.prevent="editBonusOrMalus" v-if="editBonus" class="flex items-center gap-1 justify-end">
                <div class="flex items-center border border-accent py-0.5 px-2 border-none bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark">
                  <input
                      v-model="editBonusValue"
                      :id="name + 'bonus'"
                      type="number"
                      step="0.05"
                      min="0"
                      class="bg-secondary-button dark:bg-secondary-button-dark border-none w-10 leading-none"
                  />
                  %
                </div>
                <button type="submit" class="bg-primary-button text-primary-button-text p-0.5 rounded">
                  <Icon style="display: block" name="mingcute:check-fill" size="18px" />
                </button>
              </form>
            </div>

            <div class="ml-2 bg-accent/10 p-1 rounded">
              <div :class="{'mb-2' : editMalus}" class="border border-[rgba(255,0,0,.5)] p-1 rounded flex items-center justify-between">
                <h4 class="lg:text-xl font-header font-medium">Malus</h4>
                <div class="flex items-center gap-1 font-bold lg:text-xl">
                  {{ malus }}%
                  <button @click="editMalus = !editMalus" aria-label="modifier le bonus">
                    <Icon
                        v-if="!editMalus"
                        name="tdesign:edit-1"
                        class="w-[22px] h-[22px]"
                    />
                    <Icon
                        v-else
                        name="maki:cross"
                        class="w-[22px] h-[22px]"
                    />
                  </button>
                </div>
              </div>
              <form @submit.prevent="editBonusOrMalus" v-if="editMalus" class="flex items-center gap-1 justify-end">
                <div class="flex items-center border border-accent py-0.5 px-2 border-none bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark">
                  <input
                      v-model="editMalusValue"
                      :id="name + 'malus'"
                      type="number"
                      step="0.05"
                      min="0"
                      class="bg-secondary-button dark:bg-secondary-button-dark border-none w-10 leading-none"
                  />
                  %
                </div>
                <button type="submit" class="bg-primary-button text-primary-button-text p-0.5 rounded">
                  <Icon style="display: block" name="mingcute:check-fill" size="18px" />
                </button>
              </form>
            </div>
          </div>
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
  bonus: {
    type: Number,
    required: false
  },
  malus: {
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
const editUnitCoef = ref(null)

const editBonus = ref(false)
const editMalus = ref(false)

const editBonusValue = ref(null)
const editMalusValue = ref(null)

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

const editBonusOrMalus = async () => {
  const response = await useFetch(`/api/semester/modifier`, {
    method: 'PUT',
    headers: {
      Authorization: props.token,
    },
    body: {
      id_semester: props.id,
      bonus: editBonusValue.value,
      malus: editMalusValue.value
    },
    watch: false
  })
  editBonusValue.value = null
  editMalusValue.value = null
  editBonus.value = false
  editMalus.value = false
  emit('reloadLevels')
}
</script>