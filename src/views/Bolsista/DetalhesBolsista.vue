<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const { params } = useRoute()

onMounted(() => {
  console.log(location)
})
</script>

<template>
  <div>
    Detalhes sobre o Bolsista id {{ params.id }}

    <button @click="$router.back()">voltar</button>
  </div>
</template>
