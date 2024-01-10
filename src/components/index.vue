<script setup>
import { ref,onMounted } from 'vue'
import anime from "animejs";


const Img_f1 = ref(null);
const Img_f2 = ref(null);
const Img_robot = ref(null);
const Img_base = ref(null);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'src/js/particles.json', function() {
  console.log('callback - particles-js config loaded');
});

setTimeout(() => {
  anime({
      targets: [Img_f2.value],
      translateY: 30, 
     translateX: -14,
      duration: 4000,
      easing: 'easeInOutQuad',
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [Img_f1.value],
      translateY: 30,
      translateX: 40,
      
      duration: 3500,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [Img_robot.value],
      translateY: 15,
      duration: 4500,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [Img_base.value],
      translateY: 5,
      duration: 4000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });

}, 2000);






</script>

<template> 
  <section class="w-screen h-screen flex justify-center items-center object-cover overflow-hidden  bg-[url('src/assets/images/background.png')] bg-no-repeat bg-bottom bg-cover fixed " >
   <div class="fixed bg-black opacity-20 inset-0 h-full w-full "></div>
   <div xyz="fade duration-30"  ref="particles"  id="particles-js" class="xyz-in w-[100dvw] h-[100dvw] fixed inset-0"></div>
      <img ref="Img_base" src="src/assets/images/base.png" alt="img_base" xyz="fade duration-20 down-100% small-100% " class="w-[100dvw] h-[100dvh] object-center-bottom   self-end  object-contain  fixed z-50 xyz-in">
      <img  ref="Img_robot" src="src/assets/images/robot.png"  xyz="fade duration-20 up-100% small-100% narrow-100%  "  alt="img_robot" class="w-[100dvw] h-[80dvh] object-center-bottom    object-contain  fixed z-40 xyz-in">
      <img ref="Img_f1" xyz="fade duration-20 left-100% small-100% narrow-100%  skew-down-5 " src="src/assets/images/f1.png" alt="img_f1" class="w-[100dvw] h-[30dvh] object-left-top mb-[25dvw] ml-[35dvw] object-contain  fixed z-40 xyz-in">
      <img ref="Img_f2" xyz="fade duration-20 right-100% small-100% narrow-100%  skew-down-5 " src="src/assets/images/f2.png" alt="img_f2" class="w-[100dvw] h-[15dvh] object-right-top mb-[10dvw] mr-[35dvw] object-contain  fixed z-40 xyz-in">
  </section>
</template>


