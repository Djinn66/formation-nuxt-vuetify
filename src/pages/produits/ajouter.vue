<script setup lang="ts">
import ProductForm from "~/forms/ProductForm.vue";
import type {Product} from "~/types/product";

const product = ref<Omit<Product, "id">>(productFormDefaultValue)

</script>

<template>
  <ProductForm :product="product"/>
</template>

<style scoped>

</style>