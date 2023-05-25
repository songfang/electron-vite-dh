<template>
<div class="homePage">
    首页
    <RouterLink to="/login">登录</RouterLink>
    <Suspense><Camera /></Suspense>
</div>
</template>

<script setup>
async function testIt () {
  const filters = [
    { usbVendorId: 0x2341, usbProductId: 0x0043 },
    { usbVendorId: 0x2341, usbProductId: 0x0001 }
  ]
  try {
    const port = await navigator.serial.requestPort({ filters })
    const portInfo = port.getInfo()
    console.log(1111, portInfo)
    // document.getElementById('device-name').innerHTML = `vendorId: ${portInfo.usbVendorId} | productId: ${portInfo.usbProductId} `
  } catch (ex) {

  }
}
onBeforeMount(()=>{
    testIt()
})
</script>

<style lang="scss" scoped>
</style>