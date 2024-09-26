<script setup>
import { onMounted } from "vue";

const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Introduce a staggered delay based on the index
          const delay = index * 200; // Adjust the multiplier for more or less delay

          setTimeout(() => {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }, delay);
        }
      });
    },
    {
      threshold: 0.1, // Adjust this value based on when you want the animation to trigger
    }
  );

  document.querySelectorAll(".slide-in").forEach((el) => observer.observe(el));
};

onMounted(() => {
  observeElements();
});
</script>

<template>
  <section
    class="font-manrope px-4 sm:px-6 py-6 md:py-10 3xl:max-w-[85%] mx-auto fade-in-slide"
  >
    <div class="border border-black border-opacity-20 rounded-lg p-4 md:p-6">
      <h1 class="font-bold text-[30px] md:text-[40px] xl:text-[45px]">
        Choose Your Plan
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-10"
      >
        <div
          class="border border-black border-opacity-20 rounded-lg p-6 mt-6 slide-in"
        >
          <div class="font-semibold">
            <p class="text-[25px]">Super</p>
            <p class="text-[32px]">
              &#x20b9;15,000 <span class="text-[18px]">+ GST</span>
            </p>
          </div>
          <div class="mt-6 space-y-3">
            <ul class="font-medium text-[14px] space-y-4">
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>1 Year Access</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>Auto Login Feature</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>
                  Strategy Access - <span class="font-bold text-[16px]">4</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>
                  No of Deployment -
                  <span class="font-bold text-[16px]">4</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>
                  Max Quantity - <span class="font-bold text-[16px]">500</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>Paper Trading</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>Account Setup Support</p>
              </li>
            </ul>
          </div>
          <button
            class="border border-black border-opacity-20 mt-6 flex items-center justify-center w-full py-3 rounded-xl font-bold hover:bg-custom-blue hover:text-white transition duration-200 ease-in-out"
          >
            Request a Demo
          </button>
        </div>

        <!-- Other plan containers go here -->
        <div
          class="border border-black border-opacity-20 rounded-lg p-6 mt-6 slide-in"
        >
          <div class="font-semibold">
            <p class="text-[25px]">Supreme</p>
            <p class="text-[32px]">
              &#x20b9;20,000 <span class="text-[18px]">+ GST</span>
            </p>
          </div>
          <div class="mt-6 space-y-3">
            <ul class="font-medium text-[14px] space-y-4">
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>1 Year Access</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>Auto Login Feature</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>
                  Strategy Access - <span class="font-bold text-[16px]">6</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>
                  No of Deployment -
                  <span class="font-bold text-[16px]">4</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>
                  Max Quantity - <span class="font-bold text-[16px]">500</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>Paper Trading</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>Account Setup Support</p>
              </li>
            </ul>
          </div>
          <button
            class="border border-black border-opacity-20 mt-6 flex items-center justify-center w-full py-3 rounded-xl font-bold hover:bg-custom-blue hover:text-white transition duration-200 ease-in-out"
          >
            Request a Demo
          </button>
        </div>

        <div
          class="border border-black border-opacity-20 bg-custom-blue text-white rounded-lg p-6 mt-3 xl:mt-6 slide-in"
        >
          <div class="font-semibold">
            <p class="text-[25px]">Sigma</p>
            <p class="text-[32px]">
              &#x20b9;25,000 <span class="text-[18px]">+ GST</span>
            </p>
          </div>
          <div class="mt-6 space-y-3">
            <!-- <p class="font-medium text-[14px]">For Small Teams</p> -->
            <ul class="font-medium text-[14px] space-y-4">
              <li class="flex items-center gap-2">
                <img src="/images/svg/whiteCheckbox.svg" alt="" />
                <p>1 Year Access</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/whiteCheckbox.svg" alt="" />
                <p>Auto Login Feature</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/whiteCheckbox.svg" alt="" />
                <p>
                  Strategy Access -
                  <span class="font-bold text-[16px]">11</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/whiteCheckbox.svg" alt="" />
                <p>
                  No of Deployment -
                  <span class="font-bold text-[16px]">11</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/whiteCheckbox.svg" alt="" />
                <p>
                  Max Quantity - <span class="font-bold text-[16px]">900</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/whiteCheckbox.svg" alt="" />
                <p>Paper Trading</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/whiteCheckbox.svg" alt="" />
                <p>Account Setup Support</p>
              </li>
            </ul>
          </div>
          <button
            class="bg-white text-custom-blue border-opacity-20 mt-6 flex items-center justify-center w-full py-3 rounded-xl font-bold border border-transparent hover:text-white hover:bg-custom-blue hover:border hover:border-white transition duration-200 ease-in-out"
          >
            Request a Demo
          </button>
        </div>

        <div
          class="border border-black border-opacity-20 rounded-lg p-6 mt-3 xl:mt-6 slide-in"
        >
          <div class="font-semibold">
            <p class="text-[25px]">Alpha</p>
            <p class="text-[32px]">
              &#x20b9;36,000 <span class="text-[18px]">+ GST</span>
            </p>
          </div>
          <div class="mt-6 space-y-3">
            <!-- <p class="font-medium text-[14px]">For Small Teams</p> -->
            <ul class="font-medium text-[14px] space-y-4">
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>1 Year Access</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>Auto Login Feature</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>
                  Strategy Access -
                  <span class="font-bold text-[16px]">13</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>
                  No of Deployment -
                  <span class="font-bold text-[16px]">13</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>
                  Max Quantity - <span class="font-bold text-[16px]">900</span>
                </p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>Paper Trading</p>
              </li>
              <li class="flex items-center gap-2">
                <img src="/images/svg/right.svg" alt="" />
                <p>Account Setup Support</p>
              </li>
            </ul>
          </div>
          <button
            class="border border-black border-opacity-20 mt-6 flex items-center justify-center w-full py-3 rounded-xl font-bold hover:bg-custom-blue hover:text-white transition duration-200 ease-in-out"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideInTop {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in {
  opacity: 0; /* Ensure the card is invisible until the animation starts */
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.animate {
  animation: slideInTop 0.5s ease-out forwards;
  opacity: 1; /* Ensure the card is visible after the animation starts */
}
</style>
