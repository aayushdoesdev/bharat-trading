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
    <section class="font-manrope px-4 sm:px-6 py-10 3xl:max-w-[85%] mx-auto fade-in-slide overflow-x-hidden">
        <div class="border border-black border-opacity-25 rounded-lg flex flex-col-reverse xl:flex-row items-center justify-between gap-8 p-6 md:p-10">
            <div class="w-full xl:w-[50%]">
                <img src="/images/testimonial.webp" alt="" class="">
            </div>
            <div class="w-full xl:w-[50%]">
                <div class="space-y-2">
                    <p class="text-custom-blue font-semibold text-[16px]">Testimonials</p>
                    <h2 class="font-bold text-[35px] leading-[45px] md:text-[45px]">What Our Users Say</h2>
                    <p class="opacity-50 text-[16px]">We are a team of financial experts and software developers passionate</p>
                </div>
                <div class="mt-6 md:mt-16 space-y-4">
                    <p class="font-semibold text-[16px]">“Thanks to this algorithmic trading platform, I’ve significantly increased my portfolio while reducing my stress. The automation does the work for me!</p>
                    <hr>
                    <div class="flex items-center">
                        <div class="flex items-center gap-3">
                            <img src="/images/testimonial.webp" alt="" class="w-[8%] rounded-full">
                            <div class="">
                                <p class="font-bold">Aman Jaiswal</p>
                                <p>Trader</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <i class="pi pi-arrow-left bg-[#01475114] p-3 rounded-3xl"></i>
                            <i class="pi pi-arrow-right bg-[#01475114] p-3 rounded-3xl"></i>
                        </div>
                    </div>
                </div>
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

