<script generic="T extends Entity " lang="ts" setup>

import {ref} from "vue";
import type {Entity} from "~/types/entity";
import type {ReadonlyHeaders} from "~/types/headers";
import {
  defaultCreateItemFunction,
  defaultDeleteItemFunction,
  defaultEditItemFunction
} from "~/utils/appCrudTableDefaultFunctions";
import {appCrudTableCustomKeyFilter} from "~/utils/appCrudTableCustomKeyFilter";

defineOptions({name: 'AppCrudTable'})

interface Props {
  title: string | null
  headers: ReadonlyHeaders
  data: Array<T>
  loading: boolean
  error?: Object
  refresh?: Function
  createItemFunction?: Function
  editItemFunction?: Function
  deleteItemFunction?: Function
}

const props = withDefaults(defineProps<Props>(), {
  title: null,
  loading: false,
  createItemFunction: defaultCreateItemFunction,
  editItemFunction: defaultEditItemFunction,
  deleteItemFunction: defaultDeleteItemFunction,
})


const dialogDelete = ref(false)
const dialogDeleteIsLoading = ref(false)
const searchItem = ref<string>("")
const selectedItem = ref<T>()
const messageError = computed(() => {
  if (props.error) {
    return "Une erreur est survenue";
  }
  return "Aucun élément";
});

/**
 * Ouvre la confirmation de suppression pour l'élément spécifié.
 *
 * @param item - L'élément à supprimer.
 * @return void
 */
const openDialogDelete = (item: T) => {
  dialogDelete.value = true
  selectedItem.value = item
}

const handleValidateDelete = async () => {
  dialogDeleteIsLoading.value = true
  await props.deleteItemFunction(selectedItem.value as T)
  dialogDeleteIsLoading.value = false
  dialogDelete.value = false
}


</script>

<template>
  <v-data-table
      :filter-keys="
      appCrudTableCustomKeyFilter(props.headers?.map((header) => header.key) as Array<string>)
    "
      :headers="headers"
      :items="data"
      :loading="loading"
      :search="searchItem"
      class="elevation-1"
      style="height: 100%"
  >
    <template v-slot:top>
      <v-toolbar v-if="title" :flat="true" class="title-top">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider :inset="true" :vertical="true" class="mx-4"/>
        <v-spacer/>
        <app-search-bar v-model="searchItem"/>
        <v-divider :inset="true" :vertical="true" class="mx-4"/>
        <v-spacer/>
        <v-btn color="primary" icon="mdi-plus" @click="createItemFunction"/>
      </v-toolbar>
    </template>
    <template v-slot:no-data>
      <v-alert :text="messageError" :type="error ? 'error' : 'warning'">
        <v-btn v-if="error" class="btn-refresh" @click="refresh"
        >Recharger
        </v-btn>
      </v-alert>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          class="me-2"
          icon="mdi-pencil"
          size="small"
          @click="editItemFunction(item)"
      />
      <v-icon icon="mdi-delete" size="small" @click="openDialogDelete(item)"/>
    </template>
  </v-data-table>
  <app-crud-table-delete-dialog
      v-model:dialogDelete="dialogDelete"
      :loading="dialogDeleteIsLoading"
      @validate="handleValidateDelete"
  />
</template>

<style scoped>
.btn-refresh {
  margin-left: 15px;
}
</style>