<script setup>
 import {ref} from 'vue'
  

  const imgsun1 = ref(null)

  setTimeout(() => {
    imgsun1.value.classList.add('sun_animation')
   
   console.log(imgsun1)
  }, 2000);
</script>

<template>
  <div class="flex h-screen bg-slate-300 w-screen  overflow-hidden  " >
    <section  class="bg-[url('public/images/background.png')] w-full h-full bg-no-repeat bg-cover object-cover flex items-center justify-center overflow-hidden   "  >

      <img ref="imgsun1" xyz="fade down-100% small-50% duration-20" src="public/images/sun1.png" alt="img_water" class=" absolute w-[40dvw] mb-[10dvw] z-40  xyz-in   ">
      <img xyz="fade down-100% small-75% duration-20" src="public/images/sun2.png" alt="img_water" class=" absolute w-[35dvw] mb-[9dvw] z-40 xyz-in ">

      <img src="public/images/n1.png" alt="img_water" class=" nubes_left absolute w-[15dvw] mb-[9dvw] left-[1dvw] z-30 ">
      <img src="public/images/n2.png" alt="img_water" class=" nubes_right absolute w-[15dvw] mb-[9dvw] right-[1dvw] bottom-[12dvw] z-30 ">
      <img src="public/images/n3.png" alt="img_water" class=" nubes_right2  absolute w-[22dvw] mb-[9dvw] right-[8dvw] top-[4dvw] z-30 ">
      <img src="public/images/n4.png" alt="img_water" class=" nubes_left2 absolute w-[22dvw] mb-[9dvw] left-[5dvw] top-[1dvw] z-30 ">


      <img  src="public/images/water2.png" alt="img_water2" class="self-end absolute w-[210dvw] z-40 ">
      <img xyz="fade right-100% duration-20  " src="public/images/land_right.png" alt="img_water" class="self-end absolute w-[200dvw] z-50 xyz-in">
      <img xyz="fade left-100% duration-20  " src="public/images/left_land.png" alt="img_water" class="self-end absolute w-[200dvw] z-50 xyz-in ">
 
    </section>
  </div>
</template>

<style scoped>
.nubes_left{
  transition: all;
  animation: nubes_left_animation 30s linear infinite;
  position: absolute;
}
.nubes_left2{
  transition: all;
  animation: nubes_left_animation 20s linear infinite;
  position: absolute;
}
.nubes_right{
  transition: all;
  animation: nubes_right_animation 30s linear infinite;
  position: absolute;
}

.nubes_right2{
  transition: all;
  animation: nubes_right_animation 20s linear infinite;
  position: absolute;
}
.sun_animation{
  transition: all;
  animation: sun_rotate 20s linear infinite;
  overflow: hidden;
  position: absolute;
}

@keyframes nubes_left_animation {
  0% { transform: translateX(-25vw); opacity: 100%; }
  100% { transform: translateX(100vw) ; opacity: 5%; }
}

@keyframes nubes_right_animation {
  0% { transform: translateX(25vw); opacity: 100%; }
  100% { transform: translateX(-100vw) ; opacity: 5%; }
}


@keyframes sun_rotate {
  0% { transform: rotate(0deg); }
  100% { transform:  rotate(360deg); }
}
</style>