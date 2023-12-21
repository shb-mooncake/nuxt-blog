export default async (req, res) => {
    const data = await useStorage().getItem('redis:nuxt3-redis')
    return data
  }