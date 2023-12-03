<template>
  <div>
    <label
        :for="name"
        class="block mb-1 text-lg lg:text-xl font-medium"
    >
      {{ label }}
    </label>
    <div class="relative">
      <input
          ref="input"
          :id="name"
          :name="name"
          :type="!showPassword ? type : 'text'"
          :value="modelValue"
          :placeholder="placeholder"
          :autocomplete="autoComplete"
          @input="$emit('update:modelValue', $event.target.value)"
          class="w-full bg-secondary-button dark:bg-secondary-button-dark text-base px-4 py-3"
          :step="type === 'number' ? 0.5 : null"
          :min="type === 'number' ? 0 : null"
      />
      <button
          v-if="type === 'password' && !showPassword"
          type="button"
          @click="showPassword = true"
          @keydown.enter.prevent="showPassword = true; input.focus()"
          class="absolute right-2 bottom-1/2 translate-y-1/2"
          aria-label="Afficher le mot de passe"
      >
        <Icon
            class="opacity-75 hover:opacity-100"
            name="mdi:eye"
            size="24px"
        />
      </button>
      <button
          v-if="type === 'password' && showPassword"
          type="button"
          @click="showPassword = false"
          @keydown.enter.prevent="showPassword = false; input.focus()"
          class="absolute right-2 bottom-1/2 translate-y-1/2"
          aria-label="Masquer le mot de passe"
      >
        <Icon
            class="opacity-75 hover:opacity-100"
            name="mdi:eye-off"
            size="24px"
        />
      </button>
    </div>
    <span class="text-error dark:text-error-dark mt-1 block text-sm">
      {{ error }}
    </span>

  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  autoComplete: {
    type: String,
    default: "off",
  },
  modelValue: {
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const showPassword = ref(false);
const input = ref(null);
</script>
