import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  persist: true, // 开启当前模块持久化
  state: () => ({
    account: '',
    password: '',
    remeberPwd: false,
  }),
  actions: {
    setRemeberPwd(val) {
      this.remeberPwd = val
    },
    savePwd(form) {
      this.password = form.password
      this.account = form.account
    },
  }
})