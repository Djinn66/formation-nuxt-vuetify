<script setup lang="ts" generic="T extends Entity">
import type {Entity} from "~/types/entity";

definePageMeta({
  validate: (route) => isValidRouteParams(route.params)
})

const {entity} = useRoute().params

const { data, pending } = useFetch<Array<T>>(`http://localhost:5000/${entity}`, {
  default:() => [] as Array<T>,
})

const createItemFunction = () => useRouter().push({ path: `/generic/${entity}/create`})
const editItemFunction = (item: T) => useRouter().push({ path: `/generic/${entity}/update/${item.id}`})

const deleteItemFunction = (item: T) => useFetch(`http://localhost:5000/${entity}/${item.id}`, {
  method: 'DELETE',
  onResponse(context) {
    if(context.response.ok){
      data.value = [...data.value.filter(value => value.id !== item.id)]
    }
  }
})

</script>

<template>
  <app-crud-table :data="data"
                  :loading="pending"
                  title="Produits"
                  :create-item-function="createItemFunction"
                  :edit-item-function="editItemFunction"
                  :delete-item-function="deleteItemFunction"
                  :headers="appCrudTableHeaders[entity as keyof typeof appCrudTableHeaders] "/>
</template>

<style scoped>

</style>