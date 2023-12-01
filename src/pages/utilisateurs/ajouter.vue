<script setup lang="ts">
import type {User} from "~/types/user";
import UserForm from "~/forms/UserForm.vue";

const user = ref<Omit<User, "id">>(userFormDefaultValue)

</script>

<template>
  <app-form-layout
      :entity="user"
      endpoint="users"
      title="Ajouter un utilisateur"
  >
    <UserForm v-model="user"/>
  </app-form-layout>
</template>

<style scoped>

</style>