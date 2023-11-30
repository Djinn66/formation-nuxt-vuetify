<script setup lang="ts">
import ProductForm from "~/forms/ProductForm.vue";
import type {Product} from "~/types/product";

const { id: productId } = useRoute().params;

const {data: product, pending} = useFetch<Product>(`http://localhost:5000/products/${productId}`,{
  default: () =>  ({ id:"", ...productFormDefaultValue} as Product)
});

</script>

<template>
  <app-form-layout
      endpoint="products"
      :entity="product"
      :title="`Modifier le produit ${product?.title}`"
      :loading="pending"
      :update="true"
  >
    <ProductForm :product="product"/>
  </app-form-layout>
</template>

<style scoped>

</style>