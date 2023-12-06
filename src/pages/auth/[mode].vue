<script lang="ts" setup>
import {useRoute} from "#app";
import {AuthEvent} from "~/auth/constantes/AuthEvent";
import AuthLogin from "~/auth/AuthLogin.vue";

definePageMeta({
  layout: "auth",
});

const router = useRouter();

const route = useRoute();

const mode = ref(route.params.mode);

const features = {
  login: AuthLogin,
};

const activeFeature = computed(() => features[mode.value] ?? null);

function handleFeatureEvent(value: { action: string }) {
  const {action} = value;
  let path;
  switch (action) {
    case AuthEvent.REGISTER:
      path = "/auth/register";
      break;
    case AuthEvent.LOGIN:
      path = "/auth/login";
      break;
    case AuthEvent.FORGOT:
      path = "/auth/forgot";
      break;
    case AuthEvent.CONNECT:
      path = "/";
      break;
  }
  if (path) {
    router.push(path);
  }
}
</script>

<template v-if="activeFeature">
  <component :is="activeFeature" @featureEvent="handleFeatureEvent"/>
</template>
