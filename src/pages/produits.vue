<script setup lang="ts">

import type {Product} from "~/types/product";

const { data } = useFetch<Array<Product>>(`http://localhost:5000/products`, {
  default:() => [] as Array<Product>,
})

</script>

<template>
  {{data}}
  Produits
</template>

<style scoped>

</style>