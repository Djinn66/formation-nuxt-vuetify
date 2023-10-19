<script setup lang="ts">

</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar title="Application bar"></v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <slot/>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>

</style>