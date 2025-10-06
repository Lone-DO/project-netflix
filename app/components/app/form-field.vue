<script lang='ts' setup>
defineProps<{
  label?: string;
  name: string;
  error?: string;
  maxlength?: number;
  pattern?: string;
  classes?: string;
  type?: 'number' | 'text' | 'textarea';
  disabled?: boolean;
}>();

defineEmits(['input']);

const value = defineModel();
const input = useTemplateRef('input');
</script>

<template>
  <fieldset class="app-form-field fieldset">
    <legend v-if="label" class="fieldset-legend">
      {{ label }}
    </legend>
    <Field
      v-slot="{ field }"
      v-model="value"
      :name
      :disabled="disabled || null"
    >
      <input
        v-if="type !== 'textarea'"
        v-bind="field"
        ref="input"
        :pattern
        :maxlength
        :class="{
          'w-full': !classes,
          [String(classes)]: !!classes,
          'input-error': error,
        }"
        @input="$emit('input', $event.target)"
      >
    </Field>
    <p v-if="error" class="fieldset-label text-error">
      {{ error }}
    </p>
  </fieldset>
</template>
