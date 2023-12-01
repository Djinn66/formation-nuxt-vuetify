<script setup lang="ts" generic="T extends Entity">
import {formConfig} from "~/forms/form.config";
import type {Entity} from "~/types/entity";
import type {Endpoint} from "~/types/endpoint";

definePageMeta({
  validate: (route) => isValidRouteParams(route.params)
})

type CustomParams = {
  entity: Endpoint
  action: 'create' | 'update'
  id?: string
}

const { entity, action, id } = useRoute().params as CustomParams;

const {data, pending} = (id ?
    useFetch(`http://localhost:5000/${entity}/${id}`,{
      default: () => ({id: '', ...formConfig.defaultValues[entity]}),
    }) :
    {
      data: ref(formConfig.defaultValues[entity]),
      pending: ref(false)
    }) as {data: Ref< T | Omit<T, 'id'>>, pending: Ref<boolean>}

const component = formConfig.components[entity]
</script>

<template>
  <app-form-layout
      :endpoint="entity"
      :entity="data"
      :title="action === 'update' ? 'Modification' : 'Création'"
      :loading="pending"
      :update="action === 'update'"
  >
    <component
        v-model="data"
        :is="component"
    />
  </app-form-layout>
</template>

<style scoped>

</style>