<script setup lang="ts" generic="T extends Entity">
import type {Entity} from "~/types/entity";
import {formConfig} from "~/forms/form.config";
import type {Endpoint} from "~/types/endpoint";

definePageMeta({
  validate: (route) => isValidRouteParams(route.params)
})

const {entity} = useRoute().params as {entity: Endpoint}
const {API_BASE} = useRuntimeConfig().public

const { data, pending } = useFetch<Array<T>>(`${API_BASE}${entity}`, {
  default:() => [] as Array<T>,
})

const item = ref<T>()
const action = ref('create')
const openDialog = ref(false)

const createItemFunction = () => {
  action.value = 'create'
  item.value = undefined
  openDialog.value = true
}
    //useRouter().push({ path: `/generic/${entity}/create`})
const editItemFunction = (i: T) => {
  action.value = 'update'
  item.value = i
  openDialog.value = true
}
    //useRouter().push({ path: `/generic/${entity}/update/${item.id}`})

const deleteItemFunction = (item: T) => useFetch(`http://localhost:5000/${entity}/${item.id}`, {
  method: 'DELETE',
  onResponse(context) {
    if(context.response.ok){
      data.value = [...data.value.filter(value => value.id !== item.id)]
    }
  }
})
const component = formConfig.components[entity]
</script>

<template>
  <app-crud-table :data="data"
                  :loading="pending"
                  title="Produits"
                  :create-item-function="createItemFunction"
                  :edit-item-function="editItemFunction"
                  :delete-item-function="deleteItemFunction"
                  :headers="appCrudTableHeaders[entity as keyof typeof appCrudTableHeaders] "/>
  <v-dialog v-model="openDialog">
    <app-form-layout
        :endpoint="entity"
        :entity="item || formConfig.defaultValues[entity]"
        :title="action === 'update' ? 'Modification' : 'Création'"
        :loading="pending"
        :update="action === 'update'"
    >
      <component
          v-model="item"
          :is="component"
      />
    </app-form-layout>
  </v-dialog>
</template>

<style scoped>

</style>