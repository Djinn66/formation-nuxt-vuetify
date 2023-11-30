<script setup lang="ts">
import {computed} from "vue";

defineOptions({name: 'AppCrudTableDeleteDialog'})

interface Props {
  dialogDelete: boolean
  loading: boolean
}

const props = defineProps<Props>()

/**
 * Emits pour le v-model dialogDelete et la fonction validate.
 */
const emit = defineEmits<{
  'update:dialogDelete':[value:boolean],
  validate:[]
}>()

/**
 * Computed pour le v-model dialogDelete.
 */
const computedDialogDelete = computed<boolean>({
    get: () => props.dialogDelete,
    set: (value) => {
      emit('update:dialogDelete', value)
    }
})

</script>

<template>
  <v-dialog v-model="computedDialogDelete" max-width="600px">
    <v-card :loading="loading">
      <v-card-title class="text-h5">Êtes-vous sûr(e) de vouloir supprimer cet élément ?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="computedDialogDelete = false">Cancel</v-btn>
        <v-btn :loading="loading" color="blue-darken-1" variant="text" @click="emit('validate')">OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>