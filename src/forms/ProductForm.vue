<script setup lang="ts">

import type {Product} from "~/types/product";
import {formConfig} from "~/forms/form.config";

interface Props {
  modelValue: unknown
}

const props = defineProps<Props>()

const emit =defineEmits<{
  'update:modelValue': [value: Product | Omit<Product, "id">]
}>()

const product = computed({
  get: () => {
    return props.modelValue ?
        props.modelValue as Product | Omit<Product, "id"> :
        formConfig.defaultValues.products
  },
  set: (value) => emit('update:modelValue', value)
})

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