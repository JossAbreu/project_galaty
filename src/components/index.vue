<script setup>
import { ref,onMounted } from 'vue'
import anime from "animejs";

import VueTypewriterEffect from "vue-typewriter-effect";

const Img_f1 = ref(null);
const Img_f2 = ref(null);
const Img_robot = ref(null);
const Img_base = ref(null);
let ObjectsEnable = ref(false);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/particles.json', function() {
  console.log('callback - particles-js config loaded');
});

setTimeout(() => {
  
 
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
setTimeout(() => {
    ObjectsEnable.value = true
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
    
    }, 1000);
   
  }, 800);






</script>

<template> 
  <section class="w-screen h-screen flex justify-center items-center object-cover   bg-no-repeat bg-bottom bg-cover fixed " style="background-image: url('/background.png'); select-none" >
   <div class="fixed bg-black opacity-20 inset-0 h-full w-full  select-none"></div>

      
      <vue-typewriter-effect
      xyz="fade duration-20 small-100% ease-in-out-back"
      class="bottom-[24rem] select-none text-stone-800 relative text-[8rem] font-custom tracking-widest z-30 opacity-50 xyz-in"
      :strings="['Galaxy age']"
       :loop="true"
       :deleteSpeed="700"
      :pauseFor="3500"
    />
      <img ref="Img_base" src="/base.png" alt="img_base" xyz="fade duration-10 down-100% small-100% " class="w-[100dvw] h-[100dvh] object-center-bottom   self-end  object-contain  fixed z-50 xyz-in">
      <img  ref="Img_robot" src="/robot.png"  xyz="fade duration-20 down-100% small-100% narrow-100%  "  alt="img_robot" class="w-[100dvw] h-[80dvh] object-center-bottom    object-contain  fixed z-40 xyz-in">
      <img ref="Img_f1" v-if="ObjectsEnable" xyz="fade duration-30 down-100% back-5 small-75%" src="/f1.png" alt="img_f1" class="w-[100dvw] h-[30dvh] object-left-top mb-[25dvw] ml-[35dvw] object-contain  fixed z-30 xyz-in">
      <img ref="Img_f2" v-if="ObjectsEnable" xyz="fade duration-30 down-100% small-75%   skew-right-5 " src="/f2.png" alt="img_f2" class="w-[100dvw] h-[15dvh] object-right-top mb-[10dvw] mr-[35dvw] object-contain  fixed z-30 xyz-in">
  </section>
  <div xyz="fade duration-30"  ref="particles"  id="particles-js" class="xyz-in w-[100dvw] h-[100dvw] fixed inset-0 z-40 select-none "></div>
</template>


