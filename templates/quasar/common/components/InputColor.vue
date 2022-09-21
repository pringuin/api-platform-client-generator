<template>
  <input
    ref="hiddenInput"
    type="color"
    class="hiddenInput"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
  <q-input
    :model-value="modelValue"
    stack-label
    lazy-rules
    bottom-slots
    v-bind="$attrs"
    :error="!isValid"
    :style="{color: modelValue}"
    @update:model-value="$emit('update:modelValue', $event)"
    @focus="onFocus"
  >
    <template #prepend>
      <q-icon
        name="palette"
        class="cursor-pointer"
        :style="{color: modelValue}"
      />
    </template>
  </q-input>
</template>

<script>
export default {
  name: "InputColor",

  props: {
    modelValue: {
      type: String,
      default: "#000000",
    },
  },
  emits: ["update:modelValue"],
  data () {
    return {
      isValid: true,
    }
  },

  methods: {
    onFocus () {
      this.$refs.hiddenInput.click()
    },
  },
}
</script>

<style scoped>
.hiddenInput {
  margin: 0;
  padding: 0;
  border: none;
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
