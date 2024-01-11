<script setup>
import { ref,onMounted } from 'vue'
import anime from "animejs";

import VueTypewriterEffect from "vue-typewriter-effect";

const Img_f1 = ref(null);
const Img_f2 = ref(null);
const Img_base = ref(null);

const head= ref(null);
const body= ref(null);
const leg_left= ref(null);
const leg_left_back= ref(null);
const leg_right= ref(null);
const leg_right_back= ref(null);
let ObjectsEnable = ref(false);
let Enable_Z_index = ref(false);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/particles.json', function() {
  console.log('callback - particles-js config loaded');
});


setTimeout(() => {
  
 
    anime({
      targets: [head.value],
      translateY: 10,
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [body.value],
      translateY: 8,
      translateX:-8,
      rotate: 7,
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [leg_right.value],
      translateY: 17,
      translateX: -10,
      rotate: 7,
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [leg_right_back.value],
      translateY: 4,
   
      translateX:-6,
      rotate: 7,
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [leg_left.value],
      translateY: 6,
      translateX:-6,
      rotate: 7,
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [leg_left_back.value],
      translateY: 6,
      translateX:-6,
      rotate: 7,
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [Img_base.value],
      translateY: 10,
      translateX: -10,
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
Enable_Z_index.value = true;
}, 2000);


setTimeout(() => {
    ObjectsEnable.value = true;
    setTimeout(() => {
        randomValues(Img_f2.value, 2000);  // Duración de 4000 ms para Img_f2
        randomValues(Img_f1.value, 4000);  // Duración de 3000 ms para Img_f1
    }, 1000);
}, 800);

function randomValues(target, duration) {
    anime({
        targets: [target],
        translateX: function() {
            return anime.random(0, -370);
        },
        translateY: function() {
            return anime.random(0, 270);
        },
        easing: 'easeInOutQuad',
        duration: duration,  // Duración específica proporcionada como parámetro
        complete: function() {
            randomValues(target, duration);  // Llama recursivamente con la misma duración
        }
    });
}





</script>

<template> 
  <section class="w-screen h-screen flex justify-center items-center object-cover   bg-no-repeat bg-bottom bg-cover fixed " style="background-image: url('/images/background.png'); select-none" >
   <div class="fixed bg-black opacity-20 inset-0 h-full w-full  select-none"></div>

      
      <vue-typewriter-effect
      xyz="fade duration-20 small-100% ease-in-out-back"
      class="bottom-[24rem] select-none text-stone-800 relative text-[8rem] font-custom tracking-widest z-30 opacity-50 xyz-in"
      :strings="['Galaxy age']"
       :loop="true"
       :deleteSpeed="700"
      :pauseFor="3500"
    />
      
      <span  class="fixed flex justify-end items-end w-full h-full    z-40 ">
        <img ref="head"  xyz="fade duration-10 down-100%   "  src="/images/head.png"   alt="img_robot" class="w-[100dvw] h-[37dvh] object-center-bottom    object-contain mb-[12.7dvw] fixed z-0 xyz-in  ">
        <img ref="body" xyz="fade duration-10 down-100%   " src="/images/body.png"  alt="img_robot" class="w-[100dvw] h-[19dvh] object-center-bottom  left-[0] ml-[1.2dvw]  object-contain  mb-[7.2dvw] fixed z-50  xyz-in ">
        <img ref="leg_left" xyz="fade duration-10 down-100%    "   :class="Enable_Z_index? 'z-50':'z-30'"   src="/images/leg_left.png"   alt="img_robot" class="w-[100dvw] h-[19dvh] object-center-bottom  right-[0] mr-[2dvw]  object-contain  mb-[7.4dvw] fixed xyz-in  ">
        <img ref="leg_right" xyz="fade duration-10 down-100%  "    :class="Enable_Z_index? 'z-40':'z-20'"   src="/images/leg_right.png"   alt="img_robot" class="w-[100dvw] h-[19dvh] object-center-bottom  left-[0] ml-[6.2dvw]  object-contain  mb-[6.3dvw] fixed  xyz-in ">
        <img ref="leg_right_back" xyz="fade duration-10 down-100%  "  src="/images/leg_right_back.png"   alt="img_robot" class="w-[100dvw] h-[11dvh] object-center-bottom  left-[0] ml-[2dvw]  object-contain  mb-[7dvw] fixed z-30 xyz-in ">

        <img ref="leg_left_back" xyz="fade duration-10 down-100%    "  src="/images/leg_left_back.png"   alt="img_robot" class="w-[100dvw] h-[16dvh] object-center-bottom  right-[0] mr-[6.3dvw]  object-contain  mb-[6.8dvw] fixed z-30 xyz-in  ">

        <img ref="Img_base"  src="/images/img_base.png" alt="img_base" xyz="fade duration-6 down-100% small-100% " class="w-[100dvw] h-[100dvh] object-center-bottom   self-end  object-contain  fixed  z-30 xyz-in ">
      </span>
    
      <img ref="Img_f1" v-if="ObjectsEnable" xyz="fade duration-30 down-100% back-5 small-75%" src="/images/f1.png" alt="img_f1" class="w-[100dvw] h-[30dvh] object-left-top mb-[25dvw] ml-[35dvw] object-contain  fixed z-30 xyz-in">
      <img ref="Img_f2" v-if="ObjectsEnable" xyz="fade duration-30 down-100% small-75%   skew-right-5 " src="/images/f2.png" alt="img_f2" class="w-[100dvw] h-[15dvh] object-right-top mb-[10dvw] mr-[35dvw] object-contain  fixed xyz-in z-30">
  </section>
  <div xyz="fade duration-30"  ref="particles"  id="particles-js" class="xyz-in w-[100dvw] h-[100dvw] fixed inset-0 z-40 select-none "></div>
</template>


