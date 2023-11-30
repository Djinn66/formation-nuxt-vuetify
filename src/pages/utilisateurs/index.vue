<script setup lang="ts">
  import type {User} from '~/types/user';

  const { data, pending } = useFetch<Array<User>>(`http://localhost:5000/users`, {
    default: () => [] as Array<User>
  })

  const createUserFunction = () => useRouter().push({ path: `/utilisateurs/ajouter`})
  const editUserFunction = (item: User) => useRouter().push({ path: `/utilisateurs/modifier/${item.id}`})

  const deleteUserFunction = (item: User) => useFetch(`http://localhost:5000/users/${item.id}`, {
    method: 'DELETE',
    onResponse(context) {
      if(context.response.ok){
        data.value = [...data.value.filter(user => user.id !== item.id)]
      }
    }
  })

</script>

<template>
  <app-crud-table :data="data"
                  :loading="pending"
                  title="Utilisateurs"
                  :create-item-function="createUserFunction"
                  :edit-item-function="editUserFunction"
                  :delete-item-function="deleteUserFunction"
                  :headers="appCrudTableHeaders.users"/>
</template>

<style scoped>

</style>