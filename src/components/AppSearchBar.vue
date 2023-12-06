<script lang="ts" setup>

import {computed} from "vue";

interface Props {
  modelValue: Object;
}

const props = defineProps<Props>();

const emits = defineEmits<{ "update:modelValue": [value: Object] }>();

const searchComputed = computed({
  get: () => props.modelValue,
  set: (value: Object) => emits("update:modelValue", value),
});

</script>

<template>
  <v-text-field
      v-model="searchComputed"
      hide-details
      label="Search"
      prepend-icon="mdi-magnify"
  ></v-text-field>
</template>

<style scoped></style>
