<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import BaseButton from "./BaseButton.vue";

const visible = ref(false);
</script>

<template>
  <nav
    class="px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-20 drop-shadow"
  >
    <div
      class="3xl:max-w-[85%] mx-auto flex items-center justify-between w-full"
    >
      <img src="/images/svg/logo.svg" alt="" />
      <div class="font-manrope hidden xl:flex items-center gap-6 text-[16px]">
        <a href="#hero">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact Us</a>
        <a href="#faq">FAQ</a>
        <BaseButton title="Login/Signup" />
      </div>
      <button @click="visible = true" class="xl:hidden">
        <i class="pi pi-bars text-[30px]"></i>
      </button>
    </div>
    <Sidebar v-model:visible="visible" header="" position="right">
      <div class="font-semibold  text-[18px] mt-6 space-y-8">
        <div class="flex flex-col space-y-4">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQ</a>
        </div>
        <BaseButton title="Login/Signup" />
      </div>
    </Sidebar>
  </nav>
</template>
