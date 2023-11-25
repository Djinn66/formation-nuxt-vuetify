<script setup lang="ts">
  import type {User} from "~/types/user";

  const { data, pending } = useFetch<Array<User>>(`http://localhost:5000/users`, {
    default: () => [] as Array<User>
  })
</script>

<template>
  <app-crud-table :data="data"
                  :loading="pending"
                  title="Utilisateurs"
                  :headers="appCrudTableHeaders.users"/>
</template>

<style scoped>

</style>