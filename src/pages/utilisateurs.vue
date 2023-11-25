<script setup lang="ts">
  import type {User} from "~/types/user";

  const { data } = useFetch<Array<User>>(`http://localhost:5000/users`, {
    default: () => [] as Array<User>
  })
</script>

<template>
  {{data}}
  Utilisateurs
</template>

<style scoped>

</style>