<template>
  <div class="relative" :class="`${backgroundAndTextColors} ${!!backgroundAndTextColors ? 'px-2 py-1 rounded-lg' : ''}`">
    <span v-if="average !== null" class="font-bold" :class="numeratorTextSize">
      {{ Math.min(average * ( 1 + modifier * 0.01), 20).toFixed(2) }}<span class="font-normal" :class="denominatorTextSize">/20.0</span>
    </span>
    <span v-else :class="numeratorTextSize">0 note</span>
    <span
        v-if="!!modifier && average !== null"
        class="absolute  top-[-8px] right-[-5px] px-1 py-0.5 rounded text-xs"
        :class="modifier > 0 ? 'bg-[rgba(0,255,0,.5)]' : 'bg-[rgba(255,0,0,.5)]'">
      {{ modifier > 0 ? '+' : '' }}{{ modifier }}%
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  average: {
    type: Number,
    required: false
  },
  modifier: {
    type: Number,
    required: false,
    default: 0
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