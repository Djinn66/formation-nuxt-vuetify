<script lang="ts" setup>

import type {Card} from "~/types/card";

interface Props {
  card: Card
}

const props = defineProps<Props>();

</script>

<template>
  <v-card
      width="256"
      height="256"
      color="#2b2a39"
      rounded="lg"
  >
    <v-img :alt="props.card.id" :src="props.card.image" max-height="125" max-width="125"/>
    <v-card-text class="Texte">{{ props.card.libelle }}</v-card-text>
  </v-card>
</template>

<style scoped>
.Card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.Texte {
  text-align: center;
  color: white;
  font-size: 18px;
  font-family:
    Helvetica Neue,
    serif;
  font-weight: 700;
  word-wrap: break-word;
  text-decoration: none;
  text-underline: none;
}
</style>
