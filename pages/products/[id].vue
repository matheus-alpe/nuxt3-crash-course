<script lang="ts" setup>
definePageMeta({
  layout: 'store',
})

const { params } = useRoute()
const { data: product } = await useFetch<Product>(`/api/products/${params.id}`)

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true,
  })
}
else {
  useHead({
    title: `${product.value.title} |`,
    meta: [
      {
        name: 'description',
        content: product.value.description,
      },
    ],
  })
}
</script>

<template>
  <ProductDetails v-if="product" :product="product" />
</template>
