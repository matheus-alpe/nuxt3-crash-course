<script lang="ts" setup>
definePageMeta({
  layout: 'store',
})

const { params } = useRoute()
// console.log('route', params.id)
</script>

<template>
  <h1>Product: {{ params.id }}</h1>
</template>
