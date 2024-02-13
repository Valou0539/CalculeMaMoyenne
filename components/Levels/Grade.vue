<template>
  <div class="flex gap-2 ml-auto w-fit mb-2">
    <div class="flex flex-col items-end">
      <Average
        :average="value"
      />
      <span class="font-light text-xs">
        Coefficient {{ coef.toFixed(2) }}
      </span>
    </div>
    <EditLevelsButtons
      iconSize="20px"
      @edit="$emit('editGrade')"
      @delete="deleteGrade"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  coef: {
    type: Number,
    required: true
  },
  token: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['reloadLevels', 'editGrade']);

const deleteGrade = async () => {
  const response = await useFetch(`api/grade/remove`, {
    method: 'DELETE',
    headers: {
      Authorization: props.token,
    },
    body: {
      id: props.id
    }
  });
  emit('reloadLevels')
};
</script>