<script lang="ts" setup>
defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="card text-left">
    <div class="flex flex-wrap justify-center gap-10">
      <div class="p-7">
        <img
          :src="product.image"
          :alt="`${product.title} image`"
          crossorigin="anonymous"
          loading="lazy"
          class="aspect-square object-contain mx-auto max-w-sm w-full"
        >
      </div>

      <div class="p-7 flex-1">
        <h2 class="text-4xl my-7">
          {{ product.title }}
        </h2>

        <p class="text-xl my-7">
          ${{ product.price }}
        </p>

        <h3 class="font-bold border-b-2 mb-4 pb-2">
          Description:
        </h3>

        <p class="mb-7">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>
