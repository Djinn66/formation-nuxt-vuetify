<script setup lang="ts">

import type {User} from "~/types/user";
import {formValidationRules} from "~/forms/formValidationRules";

interface Props {
  user: User | Omit<User, "id">
}
defineProps<Props>()

const passwordVisible = ref(false)

const computedIconPassword = computed(() => passwordVisible.value ? 'mdi-eye' : 'mdi-eye-off')

</script>

<template>
        <v-text-field v-model="user.lastName"
                      :rules="[formValidationRules.required]"
                      label="Nom"/>
        <v-text-field v-model="user.firstName"
                      label="Prénom"/>
        <v-autocomplete v-model="user.gender"
                        :items="['male','female']"
                        label="Genre"/>
        <v-text-field v-model="user.email"
                      label="Mail"
                      :rules="[
                          formValidationRules.required,
                          formValidationRules.email,
                          ]"
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
</template>

<style scoped>

</style>