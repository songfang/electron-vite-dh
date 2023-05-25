import { defineStore } from 'pinia'
import { getUserInfo } from '../api/index'

export const useUserStore = defineStore('user', {
    persist: true, // 开启当前模块持久化
    state: () => ({
        token: '',
        info: {
            id: '',
            username: '',
        },
    }),
    getters: {
        isLogin: state => !!state.token,
    },
    actions: {
        setUserToken(str) {
            this.token = str
        },
        setUserInfo(info) {
            this.info = info
        },
        setLongLink(url){
            this.workman = url
        },
        logOut() {
            this.$reset()
        },
        async getUserInfo() {
            try {
                const res = await getUserInfo()
                this.setUserInfo(res.data)
                return res
            } catch (error) {
                throw error
            }
        },
    }
})