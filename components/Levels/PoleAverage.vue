<template>
  <div class="mb-4 bg-primary-button/10 p-1 rounded-lg">
    <div class="w-full flex justify-between items-center mb-4 p-1 border border-accent rounded gap-4">
      <h4 class="lg:text-xl font-header font-medium">
        {{ name }}
        <span class="text-xs font-light inline-block">Coef {{ coef }}</span>
      </h4>
      <div class="flex-shrink-0 flex gap-4">
        <Average
            v-if="role === 'user'"
            :average="average"
            numeratorTextSize="md:text-xl"
            denominatorTextSize="text-xs md:text-sm"
        />
        <EditLevelsButtons
            v-if="role === 'admin'"
            @edit="$emit('editPoleAverage')"
            @delete="deletePoleAverage"
            iconSize="23px"
        />
      </div>
    </div>
    <div class="ml-2 md:ml-4">
      <LevelForm
        v-if="role === 'admin'"
        apiRoot="subject"
        :levelName="'subject' + id"
        levelLabel="Nom de la matière"
        :isLevelCoefficient="true"
        :editLevelId="editSubjectId"
        :editLevelName="editSubjectName"
        :editLevelCoefficient="editSubjectCoef"
        :token="token"
        :idParent="id"
        @reloadLevels="
          $emit('reloadLevels');
          editSubjectId = null;
          editSubjectName = null;
          editSubjectCoef = null;
        "
        class="mb-2"
      />
      <LevelsSubject
        v-if="subjects.length"
        v-for="subject in subjects"
        :key="subject.id"
        :gradesGroups="subject.GradeGroup"
        :id="subject.id"
        :name="subject.name"
        :coef="subject.coefficient"
        :average="subject.average"
        :token="token"
        @editSubject="
          editSubjectId = subject.id;
          editSubjectName = subject.name;
          editSubjectCoef = subject.coefficient;
        "
        @reloadLevels="
          $emit('reloadLevels');
        "
        :role="role"
      />
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
    coef: {
      type: Number,
      required: true
    },
    average: {
      type: Number,
      required: false
    },
    subjects: {
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

  const emit = defineEmits(['editPoleAverage', 'reloadLevels']);

  const editSubjectId = ref(null);
  const editSubjectName = ref(null);
  const editSubjectCoef = ref(null);

  const deletePoleAverage = async () => {
    const response = await useFetch(`api/pole_average/remove`, {
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