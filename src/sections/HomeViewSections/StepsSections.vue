<script setup>
import { onMounted } from 'vue';

const handleScroll = () => {
  const elements = document.querySelectorAll('.fade-in-slide');
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add('in-view');
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on mount in case elements are already in view
});
</script>

<template>
    <section class=" px-4 sm:px-6 py-6 md:py-10 3xl:max-w-[85%] mx-auto fade-in-slide overflow-x-hidden">
        <div class="bg-custom-blue p-10 md:p-20 rounded-lg text-white flex flex-col xl:flex-row items-center justify-between gap-8">
            <div class="flex flex-col items-center text-center gap-1">
                <img src="/images/svg/step1.svg" alt="">
                <p>Sign Up</p>
                <p class="opacity-50 w-full md:w-[60%] xl:w-full">Create your account in minutes and set up your trading profile.</p>
            </div>
            <div class="hidden xl:block">
                <i class="pi pi-arrow-right"></i>
            </div>
            <div class="xl:hidden">
                <i class="pi pi-arrow-down"></i>
            </div>
            <div class="flex flex-col items-center text-center gap-1">
                <img src="/images/svg/step2.svg" alt="">
                <p>Choose a Strategy</p>
                <p class="opacity-50 w-full md:w-[60%] xl:w-full">Select from a range of pre-designed algorithms or customize your own.</p>
            </div>
            <div class="hidden xl:block">
                <i class="pi pi-arrow-right"></i>
            </div>
            <div class="xl:hidden">
                <i class="pi pi-arrow-down "></i>
            </div>
            <div class="flex flex-col items-center text-center gap-1">
                <img src="/images/svg/step3.svg" alt="">
                <p>Automate Your Trades</p>
                <p class="opacity-50 w-full md:w-[60%] xl:w-full"> Let our software handle trade execution, monitoring market movements, and managing risks.
                </p>
            </div>
            <div class="hidden xl:block">
                <i class="pi pi-arrow-right"></i>
            </div>
            <div class="xl:hidden">
                <i class="pi pi-arrow-down "></i>
            </div>
            <div class="flex flex-col items-center text-center gap-1">
                <img src="/images/svg/step4.svg" alt="">
                <p>Monitor and Grow</p>
                <p class="opacity-50 w-full md:w-[60%] xl:w-full">Track your portfolio's performance in real-time, while our algorithms optimize your trades continuously.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-slide {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-slide.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
