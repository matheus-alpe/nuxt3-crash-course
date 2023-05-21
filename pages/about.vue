<script lang="ts" setup>
const { data } = await useFetch('/api/about?name=mario', {
  method: 'POST',
  body: {
    age: 27,
  },
})
</script>

<template>
  <h1>About</h1>
  <p>{{ data?.message }}</p>
</template>
