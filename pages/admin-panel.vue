<template>
  <main class="mx-4 mt-8 mb-24">
    <section class="md:flex max-w-5xl mx-auto gap-6 min-h-[calc(100vh-280px)] lg:min-h-[calc(100vh-308px)]">
      <div class="min-w-[240px] flex-shrink-0 py-6 md:pr-8 md:border-r md:border-r-secondary-button dark:border-r-secondary-button-dark">
        <LevelForm
            apiRoot="academic_year"
            levelName="academicYear"
            levelLabel="Nom de l’année"
            :isLevelCoefficient="false"
            :editLevelId="editAcademicYearId"
            :editLevelName="editAcademicYearName"
            :token="authStore.token"
            @reloadLevels="
              reloadLevels();
              editAcademicYearId = null;
              editAcademicYearName = null
            "
            class="mb-8"
        />
        <nav v-if="levels.length" class="flex flex-col items-center gap-4">
          <LevelsAcademicYear
              v-for="academicYears in levels"
              :key="academicYears.id"
              :id="academicYears.id"
              :name="academicYears.name"
              :token="authStore.token"
              @setAcademicYear="activeAcademicYear = academicYears.id"
              @reloadLevels="
                reloadLevels();
              "
              @editAcademicYear="
                editAcademicYearId = academicYears.id;
                editAcademicYearName = academicYears.name
              "
              :isActive="academicYears.id === activeAcademicYear"
              role="admin"
          />
        </nav>
      </div>
        <div v-if="levels.length" class="flex-grow">
          <LevelForm
              apiRoot="semester"
              levelName="semester"
              levelLabel="Nom du semestre"
              :isLevelCoefficient="false"
              :editLevelId="editSemesterId"
              :editLevelName="editSemesterName"
              :token="authStore.token"
              :idParent="levels.find(level => level.id === activeAcademicYear).id"
              @reloadLevels="
                reloadLevels();
                editSemesterId = null;
                editSemesterName = null
              "
              class="mb-8"
          />
          <LevelsSemester
              v-for="semester in levels.find(level => level.id === activeAcademicYear).Semester"
              :key="semester.id"
              :id="semester.id"
              :units="semester.Unit"
              :name="semester.name"
              :token="authStore.token"
              @editSemester="
                editSemesterId = semester.id;
                editSemesterName = semester.name
              "
              @reloadLevels="
                reloadLevels();
              "
              role="admin"
          />
        </div>
    </section>
  </main>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth-store";
const authStore = useAuthStore();

const editAcademicYearId = ref(null)
const editAcademicYearName = ref(null)

const editSemesterId = ref(null)
const editSemesterName = ref(null)

const levels = ref({})
const activeAcademicYear = ref(null)
await reloadLevels()

async function reloadLevels () {
  const { data } = await useFetch('/api/academic_year/academic_years', {
    method: 'GET',
    headers: {
      Authorization: authStore.token,
    },
  })
  levels.value = data.value
  reloadActiveAcademicYear()
}

function reloadActiveAcademicYear () {
  if (!levels.value.length) {
    activeAcademicYear.value = null
  } else if (!levels.value.find(level => level.id === activeAcademicYear.value)) {
    activeAcademicYear.value = levels.value[0].id
  }
}
</script>