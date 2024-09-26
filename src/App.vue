<template>
  <div>
    <!-- Loader -->
    <div v-if="isLoading" class="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMinYMin slice">
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
    <div>
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

// Flat curtain paths for the SVG
const leftFlat = "M0,1005 L500,1005 L500,0 L0,0 Z";
const rightFlat = "M1000,1005 L500,1005 L500,0 L1000,0 Z";

// Detect mobile screen size
const isMobile = window.matchMedia("(max-width: 767px)").matches;

onMounted(() => {
  // Disable scrolling while loading
  document.body.style.overflow = 'hidden';

  const leftCurtain = document.getElementById("leftCurtain");
  const rightCurtain = document.getElementById("rightCurtain");
  const tl = gsap.timeline();

  // Add a delay before starting the curtain animation
  tl.to({}, { duration: 1 }); // Delay of 1 second

  // Fade out logo and Lottie animation
  tl.to(".loader-wrap-heading img, .loader-wrap-heading div", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Adjust animations based on device type (mobile vs desktop)
  if (isMobile) {
    // Mobile: slower, smoother animations
    tl.to(leftCurtain, {
      duration: 1.5,
      x: '-150%', // Move further for mobile screens
      ease: "power1.easeIn",
    }).to(rightCurtain, {
      duration: 1.5,
      x: '150%',
      ease: "power1.easeIn",
    }, "<"); // Start both animations at the same time
  } else {
    // Desktop: default animations
    tl.to(leftCurtain, {
      duration: 1,
      x: '-100%',
      ease: "power2.easeIn",
    }).to(rightCurtain, {
      duration: 1,
      x: '100%',
      ease: "power2.easeIn",
    }, "<"); // Start both animations at the same time
  }

  // Move the loader off-screen and reset scroll
  tl.to(".loader-wrap", {
    y: -1500,
    onComplete: () => {
      isLoading.value = false; // Update loading state
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });
});
</script>

<style scoped>
body {
  background-color: #e0e0e0;
  overflow: hidden; /* Prevent scrolling while loading */
}

.loader-wrap {
  position: absolute;
  z-index: 30;
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

.loader-wrap .loader-wrap-heading {
  z-index: 20;
  text-align: center;
}

.loader-wrap-heading img {
  width: 150px;
}

.loader-wrap-heading div {
  width: 150px;
}

@media (min-width: 768px) {
  .loader-wrap-heading img {
    width: 200px;
  }

  .loader-wrap-heading div {
    width: 200px;
  }
}

@media (max-width: 767px) {
  /* Adjustments for mobile */
  .loader-wrap svg {
    width: 200vw; /* Increase width for mobile */
  }
}
</style>
