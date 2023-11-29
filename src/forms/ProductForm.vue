<script setup lang="ts">
import type {Product} from "~/types/product";

interface Props {
  product: Product | Omit<Product, "id">
  loading?: boolean
  update?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  update: false
})

const afterClickLoading = ref(false)

const handleClickValidForm = () => {
  let request = 'http://localhost:5000/products'
  let method: 'POST' | 'PUT' = 'POST'
  if('id' in props.product && props.product.id) {
    //UPDATE REQUEST
    method = 'PUT'
    request += `/${props.product.id}`
  }
  afterClickLoading.value = true
  useFetch(request, {
    method,
    body: props.product,
    onResponseError(_context) {afterClickLoading.value = false},
    onResponse() { useRouter().push({ path: `/produits`})},
  })
}

</script>

<template>
  <v-card width="100%"
          :loading="loading"
          title="Produit"
          :subtitle="update ? 'Modification' : 'Création'">
    <v-card-text>
      <v-form :disabled="loading || afterClickLoading">
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
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$router.back()">Annuler</v-btn>
      <v-btn @click="handleClickValidForm" :loading="afterClickLoading">Valider</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>