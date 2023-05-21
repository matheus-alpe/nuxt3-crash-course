export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string }
  const { storeApi } = useRuntimeConfig()

  const product = await $fetch<Product[]>(`${storeApi}/products/${id}`)
  return product
})
