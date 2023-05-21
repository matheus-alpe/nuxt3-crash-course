<script lang="ts" setup>
definePageMeta({
  layout: 'store',
})

const { params } = useRoute()
const { data: product } = await useFetch<Product>(`https://fakestoreapi.com/products/${params.id}`)

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true,
  })
}
</script>

<template>
  <ProductDetails v-if="product" :product="product" />
</template>
