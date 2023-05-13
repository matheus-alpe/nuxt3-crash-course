<script lang="ts" setup>
definePageMeta({
  layout: 'store',
})

const { data: products } = await useFetch<Product[]>('https://fakestoreapi.com/products')
</script>

<template>
  <h1>Products</h1>

  <div class="grid grid-cols-4  gap-5">
    <NuxtLink
      v-for="product in products"
      :key="product.id"
      :to="`/products/${product.id}`"
      class=""
    >
      <div>
        {{ product.id }} - {{ product.title }}
      </div>

      <img :src="product.image" :alt="`${product.title} image`" crossorigin="anonymous">
    </NuxtLink>
  </div>
</template>
