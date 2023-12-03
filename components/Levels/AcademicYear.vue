<template>
  <div class="flex gap-2 flex-shrink-0">
    <button
        @click="$emit('setAcademicYear')"
        role="link"
        class="py-2 px-4 rounded text-lg lg:text-[22px]"
        :class="{
          'bg-primary-button text-primary-button-text': isActive,
        }"
    >
      {{name}}
    </button>
    <EditLevelsButtons
        v-if="role === 'admin'"
        @edit="$emit('editAcademicYear')"
        @delete="deleteAcademicYear"
        iconSize="26px"
        buttonsPadding="p-2"
    />
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
  token: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false
  },
  role: {
    type: String,
    required: false,
    default: 'user'
  },
});

const emit = defineEmits(['setAcademicYear','editAcademicYear', 'reloadLevels']);

const deleteAcademicYear = async () => {
  const response = await useFetch(`api/academic_year/remove`, {
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