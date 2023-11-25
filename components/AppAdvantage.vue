<template>
  <div class="flex flex-col items-center gap-4  max-w-[240px]">
    <Icon :name="iconName" class="w-12 h-12 text-accent" />
    <p class="w-full text-center">
      <slot />
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
});
</script>