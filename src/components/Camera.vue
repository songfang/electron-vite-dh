<template>
    <div class="w-screen h-screen overflow-hidden">
        <video class="object-cover w-screen h-screen" autoplay></video>
    </div>
</template>

<script setup>
const constrains = {
  audio: false,
  video: true
}
onMounted(() => {
  const video = document.querySelector("video")
  navigator.mediaDevices.enumerateDevices().then((res)=>{
    console.log(2222, res)
  })
  navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
    video.srcObject = stream
  })
})
</script>

<style lang="scss" scoped>
video{
    width: 800px;
    height: 600px;
    background-color: #000;
}
</style>