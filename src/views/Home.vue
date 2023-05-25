<template>
<div class="homePage">
    首页
    <RouterLink to="/login">登录</RouterLink>
    <button @click="openNewWin">打开新窗口</button>
</div>
</template>

<script setup>
import { ipcRenderer } from 'electron'
onBeforeMount(()=>{

})
function openNewWin(){
  ipcRenderer.send('open-win', {path: 'live', width: 900, height: 700})
}
</script>

<style lang="scss" scoped>
</style>