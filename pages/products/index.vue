<script lang="ts" setup>
definePageMeta({
  layout: 'store',
})

const { data: products } = await useFetch<Product[]>('https://fakestoreapi.com/products')
</script>

<template>
  <div class="grid grid-cols-4  gap-5">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
