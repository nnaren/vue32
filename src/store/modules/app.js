
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    siderType: true
  }),
  mutations: {
    changeSiderType(state) {
      state.siderType = !state.siderType
    }
  },
  actions: {
    // 退出
    logout({ commit }) {
      commit('setToken', '')
      localStorage.clear()
      router.replace('/login')
    }
  }
}
