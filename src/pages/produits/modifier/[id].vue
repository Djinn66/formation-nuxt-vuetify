<script setup lang="ts">
import ProductForm from "~/forms/ProductForm.vue";
import type {Product} from "~/types/product";

const { id: productId } = useRoute().params;

const {data: product, pending} = useFetch<Product>(`http://localhost:5000/products/${productId}`,{
  default: () =>  ({ id:"", ...productFormDefaultValue} as Product)
});

</script>

<template>
  <ProductForm :product="product" :loading="pending" :update="true"/>
</template>

<style scoped>

</style>