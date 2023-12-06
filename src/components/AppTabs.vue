<script lang="ts" setup>
import { computed } from "vue";
import type {Tab} from "~/types/tab";

interface Props {
  tabs: Array<Tab>;
  modelValue: Tab;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  "update:modelValue": [value: Tab];
}>();

const tabComputed = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <div class="Page">
    <v-tabs v-model="tabComputed">
      <v-tab
        v-for="tab in tabs"
        :key="tab.id"
        :value="tab.id"
        style="font-weight: bold; border: 1px solid #aaaaaa"
      >
        {{ tab.libelle }}
      </v-tab>
    </v-tabs>
    <v-card-text class="Enfant">
      <v-window>
        <v-window-item>
          <slot />
        </v-window-item>
      </v-window>
    </v-card-text>
  </div>
</template>

<style scoped>
.Page {
  height: 100%;
  width: 100%;
  margin: 50px 50px 0 50px;
}

.TabSelected {
  background-color: white;
  color: #000091;
  margin: 0 5px 0 5px;
}

.TabNotSelected {
  background-color: #aaaaaa;
  margin: 0 5px 0 5px;
}
</style>
