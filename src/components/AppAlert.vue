<script lang="ts" setup>
const emit = defineEmits(["componentEvent"]);

const props = defineProps({
  texte: {
    entity: String,
    default: "",
    required: true,
  },
  severity: {
    entity: String,
    default: "info",
    required: false,
  },
});

const snackbar = computed(() => props.texte?.trim().length > 0 || false);

function handleClose() {
  emit("componentEvent", {
    action: "reset",
    value: true,
  });
}
</script>

<template>
  <v-snackbar v-model="snackbar">
    {{ texte }}
    <template v-slot:actions>
      <v-btn variant="text" @click="handleClose"> Close</v-btn>
    </template>
  </v-snackbar>
</template>
