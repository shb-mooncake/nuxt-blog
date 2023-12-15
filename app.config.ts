export default defineAppConfig({
    title: 'Hello Nuxt',
    theme: {
      dark: true,
      colors: {
        primary: '#ff0000'
      }
    },
    nuxtIcon: {
      size: '24px', // default <Icon> size applied
      class: 'icon', // default <Icon> class applied
      aliases: {
        'nuxt': 'logos:nuxt-icon',
      }
    }
  })
  