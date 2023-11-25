<script setup lang="ts">
defineProps({action: String})
</script>

<template>
  ProductForm : {{ action }}
  <v-btn @click="$router.back()">Annuler</v-btn>
</template>

<style scoped>

</style>