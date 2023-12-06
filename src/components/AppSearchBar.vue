<script setup lang="ts">
interface Props {
  searchItem: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{ "update:search": [value: string] }>();
</script>

<template>
  <v-text-field
    v-bind="searchItem"
    @input="$emit('update:search', $event)"
    label="Search"
    hide-details
    prepend-icon="mdi-magnify"
  ></v-text-field>
</template>

<style scoped></style>
