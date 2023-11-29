<script setup lang="ts">

import type {Product} from "~/types/product";

const { data, pending } = useFetch<Array<Product>>(`http://localhost:5000/products`, {
  default:() => [] as Array<Product>,
})

const editProductFunction = (item: Product) => useRouter().push({ path: `/produits/modifier/${item.id}`})


</script>

<template>
  <app-crud-table :data="data"
                  :loading="pending"
                  title="Produits"
                  :edit-item-function="editProductFunction"
                  :headers="appCrudTableHeaders.products"/>
</template>

<style scoped>

</style>