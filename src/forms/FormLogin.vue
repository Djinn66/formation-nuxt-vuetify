<script lang="ts" setup>
import {formConfig} from "~/forms/form.config";

interface Props {
  username: string;
  password: string;
}

const props = defineProps<Props>();
</script>

<template>
  <form>
    <v-text-field
        name="username"
        label="Nom d'utilisateur"
        variant="outlined"
        :v-model="props.username"
        :rules="[formConfig.validationRules.required]"
    />
    <v-text-field
        name="password"
        label="Mot de passe"
        variant="outlined"
        type="password"
        :v-model="props.password"
        :rules="[formConfig.validationRules.required]"
    />

    <v-btn type="submit" width="100%" color="#2b2a39">Connexion</v-btn>

  </form>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

/* Bordered form */
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

div {
  width: 100%;
}
</style>
