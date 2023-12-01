<script setup lang="ts">
import {useSnackbarStore} from "~/stores/snackbar";
import {storeToRefs} from "pinia";

const {snackbar, icon} = storeToRefs(useSnackbarStore())
</script>

<template>
  <v-snackbar v-model="snackbar.open"
              :color="snackbar.color"
              variant="elevated"
              :timeout="snackbar.timeout">
    <v-container class="pa-3">
      <v-row class="align-center">
        <v-col cols="2">
          <v-icon
              size="26"
              :icon="icon"/>
        </v-col>
        <v-col style="font-size: 1rem">{{ snackbar.message }}</v-col>
      </v-row>
    </v-container>
  </v-snackbar>
</template>

<style scoped>

</style>