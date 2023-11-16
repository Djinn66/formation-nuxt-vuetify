<script setup lang="ts">

/** Define props : modelValue est lié au v-model parent */
interface Props {
  modelValue: boolean
}
const props = defineProps<Props>()

/** Définition d'un evenement permettant de mettre à jour le modele */
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

/** Computed pour la visibilité du drawer */
const computedDrawerVisible = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit('update:modelValue', newValue)
  }
})
</script>

<template>
  <v-navigation-drawer v-model="computedDrawerVisible" temporary>
    <v-list>
      <v-list-item title="Navigation drawer"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>