<script lang="ts" setup>
definePageMeta({
  layout: 'store',
})

const { params } = useRoute()
const { data: product } = await useFetch<Product>(`https://fakestoreapi.com/products/${params.id}`)
</script>

<template>
  <ProductDetails v-if="product" :product="product" />
</template>
