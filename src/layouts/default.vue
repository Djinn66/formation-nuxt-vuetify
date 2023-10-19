<script setup lang="ts">
const theme = ref< 'light' | 'dark' >('dark')
const drawerActivated = ref(false)
</script>

<template>
  <v-app :theme="theme">
    <v-layout class="rounded rounded-md">
      <app-navigation-drawer v-if="drawerActivated"/>

      <v-app-bar title="Application bar">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawerActivated = !drawerActivated"/>
        </template>
        <app-btn-theme v-model="theme"/>
      </v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <slot/>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>

</style>