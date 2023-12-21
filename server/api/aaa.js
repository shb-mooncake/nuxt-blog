export default defineEventHandler((event) => {
    console.log("world")
    return {
      hello: 'world'
    }
  })