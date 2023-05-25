<template>
<div class="loginPage">
    <p>登录页面</p>
    <!-- 表单 -->
    <el-form ref="ruleFormRef" :model="form" :rules="rules" class="login_form" status-icon scroll-to-error @keyup.enter.native="submitForm(ruleFormRef)">
      <!-- 账号 -->
      <el-form-item prop="username">
        <el-input v-model.trim="form.username" placeholder="你的账号">
          <template #prefix>
            <span class="ico icon-account"></span>
          </template>
        </el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" placeholder="密码" show-password></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button type="primary" @click="submitForm(ruleFormRef)" class="submit">登录</el-button>
    </el-form>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores'

const router = useRouter()
const user = useUserStore()

const trigger = ['blur', 'change']
const ruleFormRef = ref()
const form = reactive({
    username: '',
    password: '',
})
const rules = reactive({
    username: [
        { required: true, message: '请输入您的账号', trigger },
    ],
    password: [
        { required: true, message: '请输入您的密码', trigger },
    ]
})
// 提交表单
const submitForm = async (formEl) => {
//   if (!formEl) return
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       login(form).then(res => {
//         // 登录成功
//         loginSuccess(res.data)
//       })
//     } else {
//       console.log('error submit!', fields)
//     }
//   })
    loginSuccess({token: 11111, user: {}})
}
const loginSuccess = (data) => {
    user.setUserToken(data.token)
    user.setUserInfo(data.user)
    router.push('/')
}
</script>

<style lang="scss" scoped>
.loginPage{
    background-color: #b5d9f1;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>