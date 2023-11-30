<script setup lang="ts">

import type {Product} from "~/types/product";

interface Props {
  product: Product | Omit<Product, "id">
}

defineProps<Props>()

</script>

<template>
  <v-text-field v-model="product.title"
                label="Title"/>
  <v-text-field v-model="product.description"
                label="Description"/>
  <v-text-field v-model.number="product.price"
                label="Price"
                suffix="€"
                type="number"/>
  <v-text-field v-model.number="product.discountPercentage"
                label="Discount Percentage"
                suffix="%"
                type="number"/>
  <v-text-field v-model.number="product.rating"
                label="Rating"
                type="number"/>
  <v-text-field v-model.number="product.stock"
                label="Stock"
                type="number"/>
  <v-text-field v-model="product.brand"
                label="Brand"/>
  <v-text-field v-model="product.category"
                label="Category"/>
</template>

<style scoped>

</style>