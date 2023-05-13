<script lang="ts" setup>
definePageMeta({
  layout: 'store',
})

const { params } = useRoute()
const { data: product } = await useFetch<Product>(`https://fakestoreapi.com/products/${params.id}`)
</script>

<template>
  <h1>
    {{ product?.title }}
    {{ product?.price }}
    {{ product?.id }}
  </h1>
</template>
