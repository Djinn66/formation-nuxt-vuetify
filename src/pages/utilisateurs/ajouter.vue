<script setup lang="ts">
import type {User} from "~/types/user";
import UserForm from "~/forms/UserForm.vue";

const user = ref<Omit<User, "id">>(userFormDefaultValue)

</script>

<template>
  <UserForm :user="user"/>
</template>

<style scoped>

</style>