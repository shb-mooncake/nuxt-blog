export default defineEventHandler(async (event) => {
    // 使用以下方式列出所有键
    const keys = await useStorage('redis').getKeys()
  
    // 使用以下方式设置键
    await useStorage('redis').setItem('foo', 'bar')
  
    // 使用以下方式删除键
    await useStorage('redis').removeItem('foo')
  
    return {}
  })