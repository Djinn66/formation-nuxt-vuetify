<script setup lang="ts">

import type {Product} from "~/types/product";

const { data, pending } = useFetch<Array<Product>>(`http://localhost:5000/products`, {
  default:() => [] as Array<Product>,
})

const createProductFunction = () => useRouter().push({ path: `/produits/ajouter`})
const editProductFunction = (item: Product) => useRouter().push({ path: `/produits/modifier/${item.id}`})

const deleteProductFunction = (item: Product) => useFetch(`http://localhost:5000/products/${item.id}`, {
  method: 'DELETE',
  onResponse(context) {
    if(context.response.ok){
      data.value = [...data.value.filter(product => product.id !== item.id)]
    }
  }
})

</script>

<template>
  <app-crud-table :data="data"
                  :loading="pending"
                  title="Produits"
                  :create-item-function="createProductFunction"
                  :edit-item-function="editProductFunction"
                  :delete-item-function="deleteProductFunction"
                  :headers="appCrudTableHeaders.products"/>
</template>

<style scoped>

</style>