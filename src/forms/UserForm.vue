<script setup lang="ts">

import type {User} from "~/types/user";
import {formConfig} from "~/forms/form.config";

interface Props {
  modelValue: unknown
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: User | Omit<User, "id">]
}>()

const passwordVisible = ref(false)

const computedIconPassword = computed(() => passwordVisible.value ? 'mdi-eye' : 'mdi-eye-off')

const user = computed({
  get: () => props.modelValue as User | Omit<User, "id">,
  set: (value) => emit('update:modelValue', value)
})

</script>

<template>
  <v-text-field v-model="user.lastName"
                :rules="[formConfig.validationRules.required]"
                label="Nom"/>
  <v-text-field v-model="user.firstName"
                label="Prénom"/>
  <v-autocomplete v-model="user.gender"
                  :items="['male','female']"
                  label="Genre"/>
  <v-text-field v-model="user.email"
                label="Mail"
                :rules="[
                          formConfig.validationRules.required,
                          formConfig.validationRules.email,
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