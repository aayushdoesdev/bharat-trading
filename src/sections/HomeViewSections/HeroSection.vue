<script setup>
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <section
    class="font-manrope px-4 sm:px-6 md:pt-8 flex flex-col xl:flex-row items-center justify-between 3xl:max-w-[85%] mx-auto"
  >
    <div
      class="w-full lg:max-w-[850px] mr-auto xl:w-[50%] space-y-4 md:space-y-6 relative md:py-12 xl:py-28 px-1 sm:px-6"
    >
      <div class="absolute top-0 left-0 overflow-hidden">
        <img src="/images/svg/blocks.svg" alt="" class="w-[330px] md:w-[390px] xl:w-[550px]" />
      </div>
      <h1
        class="font-extrabold leading-[45px] md:font-bold text-[35px] sm:text-[35px] md:text-[50px] md:leading-[60px] w-[80%] xl:w-full"
      >
        Empower Your Trading with Cutting-Edge Algorithms
      </h1>
      <p class="opacity-50 text-[12px] md:text-[16px] w-[70%]">
        Unlock the power of automation and smart trading strategies with our
        advanced algorithmic trading software. Make data-driven decisions and
        gain an edge in the market.
      </p>
      <BaseButton title="Get Started Now" class="relative z-10"/>
      <div class="absolute md:hidden bottom-0 right-0">
        <img src="/images/person.webp" alt="" class="w-[140px]" />
      </div>
    </div>
    <div
      class="w-full lg:max-w-[750px] ml-auto xl:w-[50%] md:flex items-center justify-end relative hidden"
    >
      <div class="absolute xl:left-[-50px]">
        <img src="/images/person.webp" alt="" class="w-[40%] xl:w-[50%]" />
      </div>
      <div
        class="background-container text-white h-full px-8 py-12 xl:py-28 rounded-r-xl w-[60%]"
      >
        <div class="flex items-center justify-between">
          <p class="text-left text-[56px]">
            50<span class="text-[20px]">K</span>
          </p>
          <p class="opacity-50">Active Users</p>
        </div>
        <hr class="opacity-30">
        <div class="flex items-center justify-between">
          <p class="text-left text-[56px]">
            99<span class="text-[20px]">%</span>
          </p>
          <p class="opacity-50">Trade Execution Accuracy</p>
        </div>
        <hr class="opacity-30">
        <div class="flex items-center justify-between">
          <p class="text-[56px]">12<span class="text-[30px]">+</span></p>
          <p class="opacity-50">Customizable Strategies</p>
        </div>
        <hr class="opacity-30">
        <div class="flex items-center justify-between">
          <p class="text-[56px]">24/7</p>
          <p class="opacity-50">Real-Time Monitoring</p>
        </div>
        <hr class="opacity-30">
      </div>
    </div>
    <div class="text-white w-full mt-8 space-y-3 md:hidden">
      <div class="flex items-center justify-between bg-custom-blue p-4 rounded-lg w-full">
        <p class="text-left text-[45px]">
          50<span class="text-[20px]">K</span>
        </p>
        <p class="opacity-50">Active Users</p>
      </div>
      <div class="flex items-center justify-between bg-custom-blue p-4 rounded-lg w-full">
        <p class="text-left text-[45px]">
          99<span class="text-[20px]">%</span>
        </p>
        <p class="opacity-50">Trade Execution Accuracy</p>
      </div>
      <div class="flex items-center justify-between bg-custom-blue p-4 rounded-lg w-full">
        <p class="text-[45px]">12<span class="text-[20px]">+</span></p>
        <p class="opacity-50">Customizable Strategies</p>
      </div>
      <div class="flex items-center justify-between bg-custom-blue p-4 rounded-lg w-full">
        <p class="text-[45px]">24/7</p>
        <p class="opacity-50">Real-Time Monitoring</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background-container {
  background: linear-gradient(90deg, #0d3cbf 0%, #0d3cbf 100%);
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
