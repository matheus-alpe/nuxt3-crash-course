<script lang="ts" setup>
defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="card">
    <img
      :src="product.image"
      :alt="`${product.title} image`"
      crossorigin="anonymous"
      loading="lazy"
      class="aspect-square object-contain"
    >

    <p class="font-bold text-gray-500 m-4 truncate">
      {{ product.title }}
    </p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn">
        View Details
      </p>
    </NuxtLink>
  </div>
</template>
