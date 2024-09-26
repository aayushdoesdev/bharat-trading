
<template>
  <div>
    <!-- Loader -->
    <div v-if="isLoading" class="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="leftCurtain" :d="leftFlat" fill="white"></path>
        <path id="rightCurtain" :d="rightFlat" fill="white"></path>
      </svg>
      <div class="loader-wrap-heading z-30">
        <img src="/images/svg/logo.svg" alt="Logo" class="w-[150px] md:w-[200px] z-40" />
        <div class="w-[150px] md:w-[200px]">
          <lottieanimation animationPath="/animations/loading-bar.json" />
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="">
      <Navbar />
      <RouterView />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import lottieanimation from './components/lottieanimation.vue';

onMounted(() => {
  window.scrollTo(0, 0);
});

const isLoading = ref(true);

const leftFlat = "M0,1005 L500,1005 L500,0 L0,0 Z"; // Left flat shape
const rightFlat = "M1000,1005 L500,1005 L500,0 L1000,0 Z"; // Right flat shape

onMounted(() => {
  // Disable scrolling
  document.body.style.overflow = 'hidden';

  const leftCurtain = document.getElementById("leftCurtain");
  const rightCurtain = document.getElementById("rightCurtain");
  const tl = gsap.timeline();

  // Animate loading text
  // tl.from(".loader-wrap-heading h1", {
  //   y: 200,
  //   skewY: 10,
  //   duration: 1,
  // }).to(".loader-wrap-heading h1", {
  //   y: -200,
  //   skewY: 10,
  //   duration: 1,
  // });

  // Add a delay of 2 seconds before starting the curtain animation
  tl.to({}, { duration: 1 }); // Empty tween for delay

  // Fade out logo and Lottie animation
  tl.to(".loader-wrap-heading img, .loader-wrap-heading div", {
    opacity: 0,
    duration: 1, // Adjust duration for fade out
    ease: "power2.out",
  });

  // Animate both curtains simultaneously after the fade-out
  tl.to(leftCurtain, {
    duration: 1,
    x: '-100%', // Move left
    ease: "power2.easeIn",
  }).to(rightCurtain, {
    duration: 1,
    x: '100%', // Move right
    ease: "power2.easeIn",
  }, "<"); // Start both animations at the same time

  // Move the loader off-screen
  tl.to(".loader-wrap", {
    y: -1500,
    onComplete: () => {
      isLoading.value = false; // Update loading state
      // Enable scrolling
      document.body.style.overflow = ''; // Reset overflow
    }
  });
});
</script>

<style scoped>
body {
  background-color: #e0e0e0;
  overflow: hidden; /* Prevent scrolling by default */
}
span {
  overflow: hidden;
  display: block;
}
.loader-wrap {
    position: absolute;
    z-index: 30; /* Initially high z-index */
    height: 100vh;
    width: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: opacity 0.5s ease; /* Smooth transition */
}
.loader-wrap svg {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 110vh;
}
.loader-wrap .loader-wrap-heading h1 {
  font-size: 120px;
  z-index: 20;
  color: #e0e0e0;
  text-transform: uppercase;
  font-weight: lighter;
  font-family: "Ogg";
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.container h1 {
  font-family: "Ogg";
  font-weight: lighter;
  font-size: 100px;
  text-transform: uppercase;
}

@media (max-width: 767px) {
  .loader-wrap svg {
    width: 200vw;
    /* margin-left: -50vw; */
  }
  .loader-wrap .loader-wrap-heading,
  .container h1 {
    font-size: 60px;
  }
}
</style>






