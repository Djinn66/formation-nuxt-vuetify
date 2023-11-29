<script setup lang="ts">
import UserForm from "~/forms/UserForm.vue";
import type {User} from "~/types/user";

const { id: userId } = useRoute().params;

const {data: user, pending} = useFetch<User>(`http://localhost:5000/users/${userId}`,{
  default: () =>  ({ id:"", ...userFormDefaultValue} as User)
});

</script>

<template>
  <UserForm :user="user" :loading="pending" :update="true"/>
</template>

<style scoped>

</style>