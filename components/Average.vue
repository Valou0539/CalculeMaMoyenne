<template>
  <div :class="`${backgroundAndTextColors} ${!!backgroundAndTextColors ? 'px-2 py-1 rounded-lg' : ''}`">
    <span v-if="average !== null" class="font-bold" :class="numeratorTextSize">
      {{ average.toFixed(2) }}<span class="font-normal" :class="denominatorTextSize">/20.0</span>
    </span>
    <span v-else :class="numeratorTextSize">0 note</span>
  </div>
</template>

<script setup>
const props = defineProps({
  average: {
    type: Number,
    required: false
  },
  numeratorTextSize: {
    type: String,
    required: false,
    default: 'text-base'
  },
  denominatorTextSize: {
    type: String,
    required: false,
    default: 'text-xs'
  },
  backgroundAndTextColors: {
    type: String,
    required: false,
    default: ''
  },
});
</script>