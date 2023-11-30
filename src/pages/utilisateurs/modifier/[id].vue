<script setup lang="ts">
import UserForm from "~/forms/UserForm.vue";
import type {User} from "~/types/user";

const { id: userId } = useRoute().params;

const {data: user, pending} = useFetch<User>(`http://localhost:5000/users/${userId}`,{
  default: () =>  ({ id:"", ...userFormDefaultValue} as User)
});

</script>

<template>
  <app-form-layout
      :entity="user"
      endpoint="users"
      title="Modifier un utilisateur"
      :loading="pending"
      :update="true"
  >
    <UserForm :user="user"/>
  </app-form-layout>
</template>

<style scoped>

</style>