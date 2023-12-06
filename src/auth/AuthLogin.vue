<script lang="ts" setup>
import {useAuthStore} from "~/auth/store/useAuthStore";
import {AuthEvent} from "~/auth/constantes/AuthEvent";
import {useAlert} from "~/composables/useAlert";
import FormLogin from "~/forms/FormLogin.vue";
import AppAlert from "~/components/AppAlert.vue";
import type {Login} from "~/types/login";

const emit = defineEmits(["featureEvent"]);

const authStore = useAuthStore();

const { alerte, updateTexteAlerte } = useAlert();

const login: Login = {
  username: "",
  password: "",
};

function handleRedirect(event: any) {
  const { action } = event.target.dataset;
  let emitAction;
  switch (action) {
    case "register":
      emitAction = AuthEvent.REGISTER;
      break;
    case "forgot":
      emitAction = AuthEvent.FORGOT;
      break;
  }
  if (emitAction) {
    emit("featureEvent", {
      action: emitAction,
    });
  }
}

async function handleSubmit() {
  try {
    const userRef = await authStore.tryLogin(login);
    authStore.user =  userRef.data.value;
    emit("featureEvent", {
      action: AuthEvent.CONNECT,
    });
    updateTexteAlerte("La connexion a réussie", "success");
  } catch (e: any) {
    updateTexteAlerte("La connexion a échoué", "error");
    console.error(e.message);
  }
}

function handleInput(event: any) {
  const { name, value } = event.target;
  if (Object.keys(login).includes(name)) {
    login[name] = value;
  }
}

function handleClose() {
  updateTexteAlerte("", "");
}
</script>

<template>
  <FormLogin
    v-model:password="login.password"
    v-model:username="login.username"
    @submit.prevent.capture="handleSubmit"
    @click.stop.capture="handleRedirect"
    @input.capture="handleInput"
  />
  <AppAlert
    :severity="alerte.severity"
    :texte="alerte.texte"
    @click.stop.capture="handleClose"
  />
</template>

<style scoped>
form {
  width: 30%;
}
</style>
