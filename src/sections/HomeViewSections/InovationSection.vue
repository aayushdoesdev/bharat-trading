<script setup>
import { ref, onMounted } from 'vue';

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
    <section class="font-manrope text-white px-4 sm:px-6 py-6 md:py-10 3xl:max-w-[85%] mx-auto fade-in-slide overflow-x-hidden">
        <div class="bg-custom-blue p-4 sm:p-6 md:p-10 2xl:p-16 rounded-lg flex flex-col xl:flex-row items-start justify-between gap-8">
            <div class="w-full md:w-[60%] mx-auto xl:w-[30%]">
                <img src="/images/inovation.webp" alt="" class="w-[100%]">
            </div>
            <div class="w-full flex flex-col items-start md:items-center xl:items-start xl:w-[40%] space-y-2 sm:space-y-4">
                <p class="text-[16px]">About Us</p>
                <h2 class="font-bold text-left md:text-center xl:text-left text-[35px] leading-[50px] md:leading-[55px] md:text-[45px]">Innovating the Future of Trading</h2>
                <p class="opacity-50 text-left md:text-center xl:text-left">We are a team of financial experts and software developers passionate about simplifying trading.</p>
                <button class="text-custom-blue border-2 border-transparent bg-white font-semibold px-8 py-3 rounded-lg hover:bg-custom-blue hover:border-2 hover:border-white hover:text-white transition duration-200 ease-in-out">
                    Request a Demo
                </button>
            </div>
            <div class="bg-[#001497] w-full xl:w-[25%] h-full py-8 px-4 2xl:px-10 space-y-3 rounded-lg flex flex-col items-center flex-1">
                <img src="/images/svg/mission.svg" alt="">
                <p class="font-bold text-[19px]">Our Mission</p>
                <p class="text-center text-[17px] 2xl:text-[19px] opacity-50"> Our mission is to provide a seamless, reliable, and profitable trading experience using advanced algorithms and automated processes. By merging technology with market expertise, we empower both beginners and seasoned traders to optimize their investments.
                </p>
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