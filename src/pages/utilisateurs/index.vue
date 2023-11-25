<script setup lang="ts">
  import type {User} from '~/types/user';

  const { data, pending } = useFetch<Array<User>>(`http://localhost:5000/users`, {
    default: () => [] as Array<User>
  })

  const editUserFunction = (_item: User) => useRouter().push({ path: `/utilisateurs/modifier`})

</script>

<template>
  <app-crud-table :data="data"
                  :loading="pending"
                  title="Utilisateurs"
                  :edit-item-function="editUserFunction"
                  :headers="appCrudTableHeaders.users"/>
</template>

<style scoped>

</style>