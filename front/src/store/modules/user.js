const user = {
  // 放数据结构，存储，状态管理
// const state = {
  state: sessionStorage.getItem('userState') ? JSON.parse(sessionStorage.getItem('userState')) : {
    user: {
      username: ''
    }
  },

  // 计算属性，快速获取值
  getters: {
    getUser (state) {
      return state.user
    }
  },

  // 操作state,同步
  mutations: {
    updateUser (state, user) {
      state.user = user
    }
  },

  // 操作mutations,异步
  actions: {
    asyncUpdateUser (context, user) {
      context.commit('updateUser', user)
    }
  }
}

export default user
