<template>
  <div>
    <!-- Loader -->
    <div v-if="isLoading" class="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="leftCurtain" :d="leftFlat" fill="white" class="left-curtain"></path>
        <path id="rightCurtain" :d="rightFlat" fill="white" class="right-curtain"></path>
      </svg>
      <div class="loader-wrap-heading z-30">
        <img src="/images/svg/logo.svg" alt="Logo" class="w-[150px] md:w-[200px] z-40" />
        <!-- <div class="w-[150px] md:w-[200px]">
          <lottieanimation animationPath="/animations/loading-bar.json" />
        </div> -->
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
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import lottieanimation from './components/lottieanimation.vue';

const isLoading = ref(true);

// Define the curtain paths
const leftFlat = "M0,1005 L500,1005 L500,0 L0,0 Z"; // Left flat shape
const rightFlat = "M1000,1005 L500,1005 L500,0 L1000,0 Z"; // Right flat shape

onMounted(() => {
  window.scrollTo(0, 0);
  // Disable scrolling while loading (including y-axis)
  document.body.style.overflow = 'hidden';

  // Simulate animation delay for curtains and loader
  setTimeout(() => {
    // Remove the loader
    isLoading.value = false;

    // Delay enabling scrolling until after the full animation finishes
    setTimeout(() => {
      document.body.style.overflow = ''; // Re-enable scrolling (both x and y)
    }, 100); // Adjust timing to match the end of the loader animation
  }, 3500); // Total loading and animation time (4s)
});
</script>

<style scoped>
body {
  background-color: #e0e0e0;
  overflow: hidden; /* Prevent scrolling by default */
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
}

.loader-wrap svg {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 110vh;
}

.loader-wrap .loader-wrap-heading {
  z-index: 20;
  opacity: 1;
  transition: opacity 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Left and Right Curtain CSS Animations */
.left-curtain {
  animation: leftCurtainAnimation 2s ease-in-out forwards 2s; /* Starts after 3 seconds */
}

.right-curtain {
  animation: rightCurtainAnimation 2s ease-in-out forwards 2s; /* Starts after 3 seconds */
}

/* Keyframes for Left Curtain */
@keyframes leftCurtainAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Keyframes for Right Curtain */
@keyframes rightCurtainAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Fade out logo and animation */
.loader-wrap-heading {
  animation: fadeOutLogo 0.5s ease-in-out forwards 1s; /* Starts after 2 seconds */
}

/* Keyframes for fading out the loader heading */
@keyframes fadeOutLogo {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 767px) {
  .loader-wrap svg {
    width: 200vw;
  }
}
</style>
