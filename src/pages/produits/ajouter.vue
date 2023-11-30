<script setup lang="ts">
import ProductForm from "~/forms/ProductForm.vue";
import type {Product} from "~/types/product";

const product = ref<Omit<Product, "id">>(productFormDefaultValue)

</script>

<template>
  <app-form-layout
      endpoint="products"
      :entity="product"
      :title="`Modifier le produit ${product?.title}`"
  >
    <ProductForm :product="product"/>
  </app-form-layout>
</template>

<style scoped>

</style>