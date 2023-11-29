<script setup lang="ts">
export interface FormInputContainerProps {
  inputId: string
  error?: string
  label?: string
  hint?: string
  required?: boolean
  classContainer?: string
  classContent?: string
}

const props = defineProps<FormInputContainerProps>()
</script>

<template>
  <div
    class="form-input-container"
    :class="classContainer ? classContainer : 'field col-12 md:col-6'"
  >
    <div class="form-input-content" :class="classContent ? classContent : 'field col-9'">
      <label v-if="label" class="form-input-label" :for="inputId">{{
        `${label} ${required ? '*' : ''}`
      }}</label>

      <slot :id="inputId" :errorClass="error ? 'p-invalid' : ''"></slot>
      <div v-show="!!error || !!hint">
        <small v-if="!!error" class="form-input-error">{{ error }}</small>
        <small v-else-if="!!hint" class="form-input-hint">{{ hint }}</small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.field {
  margin-bottom: 0;
}

.form-input-container {
}

.form-input-content {
  display: flex;
  flex-direction: column;
}
.form-input-label {
  color: var(--Cinza-escuro, #3a3a3a);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.form-input-error {
  color: var(--red-500);
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-style: italic;
}

.form-input-hint {
  color: var(--Cinza-escuro, #3a3a3a80);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-style: italic;
}
</style>
