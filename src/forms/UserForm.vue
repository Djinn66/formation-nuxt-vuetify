<script setup lang="ts">
import type {User} from "~/types/user";

interface Props {
  user: User | Omit<User, "id">
  loading?: boolean
  update?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  update: false
})

const afterClickLoading = ref(false)
const passwordVisible = ref(false)
const computedIconPassword = computed(() => passwordVisible.value ? 'mdi-eye' : 'mdi-eye-off')

const handleClickValidForm = () => {
  let request = 'http://localhost:5000/users'
  let method: 'POST' | 'PUT' = 'POST'
  if('id' in props.user && props.user.id) {
    //UPDATE REQUEST
    method = 'PUT'
    request += `/${props.user.id}`
  }
  afterClickLoading.value = true
  useFetch(request, {
    method,
    body: props.user,
    onResponseError(_context) {afterClickLoading.value = false},
    onResponse() { useRouter().push({ path: `/utilisateurs`})},
  })
}

</script>

<template>
  <v-card width="100%"
          :loading="loading"
          title="Utilisateur"
          :subtitle="update? 'Modification' : 'Création'">
    <v-card-text>
      <v-form :disabled="loading || afterClickLoading">
        <v-text-field v-model="user.lastName"
                      label="Nom"/>
        <v-text-field v-model="user.firstName"
                      label="Prénom"/>
        <v-autocomplete v-model="user.gender"
                        :items="['male','female']"
                        label="Genre"/>
        <v-text-field v-model="user.email"
                      label="Mail"
                      type="email"/>
        <v-text-field v-model="user.phone"
                      label="Téléphone"/>
        <v-text-field v-model="user.password"
                      label="Mot de passe"
                      :type="passwordVisible ? 'text' : 'password'">
          <template v-slot:append-inner>
            <v-icon @click="passwordVisible = !passwordVisible" :icon="computedIconPassword"/>
          </template>
        </v-text-field>
        <v-checkbox v-model="user.admin"
                    label="Administrateur"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$router.back()">Annuler</v-btn>
      <v-btn @click="handleClickValidForm" :loading="afterClickLoading">Valider</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>