import { defineStore } from "pinia";
export const userManager = defineStore({
  id: "userId",
  state: () => {
    return {
      nickName: "lzx",
      age: 18,
      userData: {},
    };
  },
  getters: {},

  actions: {
    // 异步
    //  async fetchUser() {
    // 	const response = await axios.get('/api/user')
    // 	this.userData = response.data
    // }
  },
  // 默认储存为sessionStotage
  // persist: true,
  // persist: {
  //  enabled:true,
  //  strategies :[{
  // 	 key: 'userId', // 修改存储的键名，默认为当前 Store 的 id
  // 	 storage: window.localStorage, // 存储位置修改为 localStorage
  // 	 paths:['age'] // 配置需要缓存的数据
  // }]

  // },

  persist: {
    // storage: persistedState.localStorage,
  },
});