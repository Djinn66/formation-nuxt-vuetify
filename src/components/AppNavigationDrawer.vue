<script setup lang="ts">

import {capitalize} from "vue";

/** Define props : modelValue est lié au v-model parent */
interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()

/** Définition d'un evenement permettant de mettre à jour le modele */
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

/** Computed pour la visibilité du drawer */
const computedDrawerVisible = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit('update:modelValue', newValue)
  }
})
</script>

<template>
  <v-navigation-drawer color="drawer" v-model="computedDrawerVisible">
    <v-list nav>
      <v-spacer id="spacer"/>
      <v-list-item v-for="{ title, to, icon } in appNavigationDrawerMenuLinks"
                   :key="to"
                   :to="to"
                   :prepend-icon="icon"
                   class="d-flex align-self-stretch pa-2 rounded justify-start items-center ga-4">

        <template v-slot:prepend>
          <v-img :src="icon" width="30"></v-img>
        </template>

        <v-list-item-title id="title">{{ capitalize(title) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

#spacer {
  height: 100px;
  border-bottom: white 1px solid;
  margin: 5px 5px 30px;
}

#title {
  font-weight: bold;
  font-size: large;
}

</style>