<script setup>
import { ref, onMounted } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
// import Checkbox from 'primevue/checkbox';

// const basic = ref(false);
// const advance = ref(false);
// const premium = ref(false);

const handleScroll = () => {
  const fadeInLeft = document.querySelectorAll('.fade-in-left');
  const fadeInRight = document.querySelectorAll('.fade-in-right');
  
  fadeInLeft.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add('in-view');
    }
  });

  fadeInRight.forEach(el => {
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
  <section class="font-manrope px-4 sm:px-6 py-6 md:py-10 3xl:max-w-[85%] mx-auto fade-in-slide overflow-x-hidden">
    <div
      class="border border-black border-opacity-20 p-4 md:p-10 rounded-lg flex flex-col xl:flex-row items-start gap-8"
    >
      <!-- <div class="w-full xl:w-[45%] bg-custom-blue text-white py-4 px-3 md:p-10 rounded-lg">
        <p class="font-normal text-[19px] md:text-[19px]">Choose your insurance plan</p>
        <div class="mt-8 space-y-6">
          <div
            class="flex items-center justify-between border border-white border-opacity-30 rounded-lg p-6"
          >
            <div class="flex items-center gap-2">
              <Checkbox v-model="basic" :binary="true" />
              <p class="text-[14px] md:text-[16px]">Basic Plan</p>
            </div>
            <p class="text-[17px] md:text-[19px]">$6/Month</p>
          </div>
          <div
            class="flex items-center justify-between border border-white border-opacity-30 rounded-lg p-6"
          >
            <div class="flex items-center gap-2">
              <Checkbox v-model="advance" :binary="true" />
              <p class="text-[14px] md:text-[16px]">Advance Plan</p>
            </div>
            <p class="text-[17px] md:text-[19px]">$12/Month</p>
          </div>
          <div
            class="flex items-center justify-between border border-white border-opacity-30 rounded-lg p-6"
          >
            <div class="flex items-center gap-2">
              <Checkbox v-model="premium" :binary="true" />
              <p class="text-[14px] md:text-[16px]">Premium Plan</p>
            </div>
            <p class="text-[17px] md:text-[19px]">$66/Month</p>
          </div>
        </div>

        <div class="mt-8 space-y-2">
          <p class="font-normal text-[19px]">Description</p>
          <p class="opacity-50 text-[14px] md:text-[16px]">
            Our mission is to provide a seamless, reliable, and profitable
            trading experience using advanced algorithms and automated
            processes. By merging technology with market expertise, we empower
            both beginners and seasoned traders to optimize their investments.
          </p>
        </div>

        <div class="mt-8 space-y-4">
          <div class="flex items-center gap-4">
            <i
              class="pi pi-check-circle text-black bg-white p-1 rounded-2xl"
            ></i>
            <p class="text-[16px]">24/7 Support at any time</p>
          </div>
          <div class="flex items-center gap-4">
            <i
              class="pi pi-check-circle text-black bg-white p-1 rounded-2xl"
            ></i>
            <p class="text-[16px]">24/7 Support at any time</p>
          </div>
          <div class="flex items-center gap-4">
            <i
              class="pi pi-check-circle text-black bg-white p-1 rounded-2xl"
            ></i>
            <p class="text-[16px]">24/7 Support at any time</p>
          </div>
        </div>
      </div> -->
      <div class="w-full xl:w-[45%] flex flex-col h-full items-start justify-between flex-grow fade-in-left">
        <div class="space-y-2 md:space-y-4">
          <h1 class="font-bold text-[38px] leading-[45px] md:text-[45px]">Business information</h1>
          <p class="opacity-50">
            Our mission is to provide a seamless, reliable, and profitable
            trading experience using
          </p>
          <div class="mt-8 space-y-4">
            <div class="flex items-center border p-3 md:p-5 gap-4 rounded-lg">
              <p class="text-[14px] md:text-[16px] whitespace-nowrap">Full Name</p>
              <input type="text" class="outline-none md:px-4 w-[80%]" />
            </div>
            <div class="flex items-center border p-3 md:p-5 gap-4 rounded-lg">
              <p class="text-[14px] md:text-[16px] whitespace-nowrap">Number</p>
              <input type="text" class="outline-none md:px-4 w-[80%]" />
            </div>
            <div class="flex items-center border p-3 md:p-5 gap-4 rounded-lg">
              <p class="text-[14px] md:text-[16px] whitespace-nowrap">Pin-Code</p>
              <input type="text" class="outline-none md:px-4 w-[80%]" />
            </div>
            <div class="flex items-center border p-3 md:p-5 gap-4 rounded-lg">
              <p class="text-[14px] md:text-[16px] whitespace-nowrap">Address</p>
              <input type="text" class="outline-none md:px-4 w-[80%]" />
            </div>
          </div>
        </div>
        <div class="mt-6 md:mt-10">
            <BaseButton title="Request a Demo"/>
        </div>
      </div>
      <div class="w-full xl:w-[50%] fade-in-right">
        <img src="/images/coffee.webp" alt="">
      </div>
    </div>
  </section>
</template> 


<style scoped>
@keyframes fadeInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInFromRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-left.in-view {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-right.in-view {
  opacity: 1;
  transform: translateX(0);
}

</style>