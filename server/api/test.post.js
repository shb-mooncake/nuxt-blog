export default async (req, res) => {
    await useStorage().setItem('redis:nuxt3-redis', { hello: 'wallet' })
    return 'Success'
  }