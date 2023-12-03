<template>
  <div class="flex items-center gap-2 flex-shrink-0">
    <button @click="$emit('edit')" aria-label="modifier" class="bg-secondary-button dark:bg-secondary-button-dark text-secondary-button-text dark:text-secondary-button-text-dark rounded" :class="buttonsPadding">
      <Icon style="display: block" name="tdesign:edit-1" :size="iconSize"/>
    </button>
    <button @click="$emit('delete')" aria-label="supprimer" class="bg-delete text-delete-text rounded" :class="buttonsPadding">
      <Icon style="display: block" name="ic:round-delete" :size="iconSize"/>
    </button>
  </div>
</template>

<script setup>
  const props = defineProps({
    iconSize: {
      type: String,
      required: false,
      default: '16px'
    },
    buttonsPadding: {
      type: String,
      required: false,
      default: 'p-1'
    }
  });
  const emit = defineEmits(['edit', 'delete']);
</script>