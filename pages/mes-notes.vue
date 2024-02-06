<template>
  <main class="mx-4 mt-8 mb-24">
    <section class="md:flex max-w-5xl mx-auto gap-6 min-h-[calc(100vh-260px)] lg:min-h-[calc(100vh-276px)]">
      <div class="min-w-[240px] flex-shrink-0 mb-8 md:py-6 md:pr-8 md:border-r md:border-r-secondary-button dark:border-r-secondary-button-dark">
        <nav v-if="levels.length" class="flex justify-center flex-wrap md:flex-col md:items-end gap-2 md:gap-4">
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
              :isActive="academicYears.id === activeAcademicYear"
              role="user"
          />
        </nav>
      </div>
      <div v-if="levels.length" class="flex-grow">
        <LevelsSemester
            v-for="semester in levels.find(level => level.id === activeAcademicYear).Semester"
            :key="semester.id"
            :id="semester.id"
            :units="semester.Unit"
            :name="semester.name"
            :token="authStore.token"
            :average="semester.average"
            :bonus="semester.bonus"
            :malus="semester.malus"
            @reloadLevels="
              reloadLevels();
            "
            role="user"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth-store";
const authStore = useAuthStore();

const levels = ref({})
const activeAcademicYear = ref(null)
await reloadLevels()

async function reloadLevels () {
  const { data } = await useFetch('/api/user/ownself', {
    method: 'GET',
    headers: {
      Authorization: authStore.token,
    },
  })
  levels.value = data.value.userAcademicYears
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