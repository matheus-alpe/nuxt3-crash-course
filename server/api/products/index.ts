export default defineEventHandler(async () => {
  const products = await $fetch<Product[]>('https://fakestoreapi.com/products')
  return products
})
