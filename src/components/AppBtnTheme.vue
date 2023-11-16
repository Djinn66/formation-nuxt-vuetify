<script setup lang="ts">

interface Props {
  modelValue: 'dark' | 'light'
}

const props = defineProps<Props>()

/** Declare un évènement pour mettre à jour le theme */
const emit = defineEmits<{
  'update:modelValue': [value: 'dark' | 'light']
}>()

/** Computed permettant d'interagir avec le modèle */
const darkModeAtivated = computed({
  // Retourne un boolean en fonction de la valeur du modèle 'light' ou 'dark'
  get:() => props.modelValue === 'dark' ,
  // Emet un événement pour mettre à jour la valeur du modèle en fonction de la nouvelle valeur
  set: (value) => {
    emit('update:modelValue', value ? 'dark' : 'light')
  }
})

/** Retourne l'icone en fonction du theme */
const computedThemeIcon = computed(() => darkModeAtivated.value ? 'night' : 'sunny')


</script>

<template>
  <v-btn :icon="`mdi-weather-${computedThemeIcon}`" @click="darkModeAtivated = !darkModeAtivated"/>
</template>

<style scoped>

</style>