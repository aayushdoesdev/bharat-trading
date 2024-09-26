<script setup>
import { onMounted } from 'vue';
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

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
  <section class="p-4 sm:p-6 md:p-10 flex flex-col xl:flex-row items-start justify-between space-y-8 xl:space-y-0 3xl:max-w-[85%] mx-auto fade-in-slide overflow-x-hidden">
    <div class="w-full xl:w-[50%] fade-in-left">
      <div class="">
        <p class="text-custom-blue font-semibold text-[16px]">FAQ</p>
        <h2 class="font-bold text-[35px] md:text-[45px] leading-[45px] md:leading-[55px]">
          Your Partner in Smarter, More Efficient Trading
        </h2>
      </div>
      <Accordion
        :activeIndex="0"
        expandIcon="pi pi-plus"
        collapseIcon="pi pi-minus"
        class="mt-6 xl:mt-16"
      >
        <AccordionTab>
          <template #header>
            <p>Who are your typical clients ?</p>
          </template>
          <p class="m-0">
            We work with a variety of clients. We work with the heads of
            municipalities’ transportation planning, traffic engineering or
            economic development departments, and with mayors’ offices.
          </p>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <p>Who are your typical clients ?</p>
          </template>
          <p class="m-0">
            We work with a variety of clients. We work with the heads of
            municipalities’ transportation planning, traffic engineering or
            economic development departments, and with mayors’ offices.
          </p>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <p>Who are your typical clients ?</p>
          </template>
          <p class="m-0">
            We work with a variety of clients. We work with the heads of
            municipalities’ transportation planning, traffic engineering or
            economic development departments, and with mayors’ offices.
          </p>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <p>Who are your typical clients ?</p>
          </template>
          <p class="m-0">
            We work with a variety of clients. We work with the heads of
            municipalities’ transportation planning, traffic engineering or
            economic development departments, and with mayors’ offices.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
    <div class="w-full xl:w-[50%] fade-in-right">
        <img src="/images/faq.webp" alt="" class="w-full md:w-[60%] mx-auto xl:w-[80%] xl:ml-auto">
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