<script setup lang="ts" generic="T extends Entity">
import type {Entity} from "~/types/entity";
import {appNavigationDrawerMenuLinks} from "~/utils/appNavigationDrawerMenuLinks";

interface Props {
  entity: T | Omit<T, "id">
  endpoint: 'users' | 'products'
  title: string
  loading?: boolean
  update?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  update: false
})

const afterClickLoading = ref(false)

const form = ref()

/**
 * Valide le formulaire et exécute la fonction handleClickValidForm
 * si le formulaire est valide.
 * @return void
 */
async function handleValidate () {
  const { valid } = await form.value.validate()
  valid && handleClickValidForm()
}

const handleClickValidForm = () => {
  let request = `http://localhost:5000/${props.endpoint}`
  let method: 'POST' | 'PUT' = 'POST'
  if('id' in props.entity && props.entity.id) {
    //UPDATE REQUEST
    method = 'PUT'
    request += `/${props.entity.id}`
  }
  afterClickLoading.value = true
  useFetch(request, {
    method,
    body: props.entity,
    onResponseError(_context) {afterClickLoading.value = false},
    onResponse() { useRouter().push({ path: appNavigationDrawerMenuLinks[props.endpoint].to})},
  })
}

</script>

<template>
  <v-card width="100%"
          :loading="loading"
          :title="title"
          :subtitle="update ? 'Modification' : 'Création'">
    <v-card-text>
      <v-form ref="form" :disabled="loading || afterClickLoading">
        <slot/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$router.back()">Annuler</v-btn>
      <v-btn @click="handleValidate" :loading="afterClickLoading">Valider</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>