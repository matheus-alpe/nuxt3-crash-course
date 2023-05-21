export default defineEventHandler(async (event) => {
  // handle query params
  const { name } = getQuery(event)

  // handle body params
  const { age } = await readBody(event)

  return {
    message: `Hello ${name}, you have ${age} years old! Response from server api Nuxt Dojo`,
  }
})
