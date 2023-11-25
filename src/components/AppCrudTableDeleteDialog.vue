<template>
    <v-dialog v-model="computedDialogDelete" max-width="600px">
        <v-card>
            <v-card-title class="text-h5">Êtes-vous sûr(e) de vouloir supprimer cet élément ?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="computedDialogDelete = false">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="emit('validate')">OK</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import {computed} from "vue";

defineOptions({name: 'AppCrudTableDeleteDialog'})

const props = defineProps({
    dialogDelete: {
        type: Boolean,
    },
})

/**
 * Emits pour le v-model dialogDelete et la fonction validate.
 * @type {EmitFn<(string)[]>}
 */
const emit = defineEmits(['update:dialogDelete', 'validate'])

/**
 * Computed pour le v-model dialogDelete.
 *
 * @returns {Object} computedDialogDelete - L'objet calculé pour dialogDelete.
 * @property {boolean} get - La valeur actuelle de dialogDelete.
 * @property {function} set - La fonction pour mettre à jour la valeur de dialogDelete.
 */
const computedDialogDelete = computed({
    get: () => props.dialogDelete,
    set: (value) => {
      emit('update:dialogDelete', value)
    }
})


</script>

<style scoped>

</style>