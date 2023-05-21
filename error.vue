<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

defineProps<{
  error: NuxtError
}>()

function handleRedirect() {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <div class="h-full flex justify-center items-center">
    <div class="w-full grid gap-10 max-w-sm text-center card h-fit p-7">
      <p class="text-7xl font-bold">
        {{ error.statusCode }}
      </p>
      <p class="text-5xl">
        Oops.
      </p>
      <p class="">
        {{ error.message }}
      </p>

      <button class="btn" @click="handleRedirect">
        Home
      </button>
    </div>
  </div>
</template>
