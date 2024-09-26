<script setup>

const experiance = [
    {
        "title": "Automated Precision",
        "desc": "Execute trades with precision and efficiency using powerful algorithms. Our system reacts instantly to market conditions, ensuring you never miss a profitable opportunity.",
        "img": "/images/svg/exp1.svg"
    },
    {
        "title": "Data-Driven Insights",
        "desc": "Make informed decisions with real-time data analysis. Our software provides actionable insights to optimize your trading strategy and maximize profits.",
        "img": "/images/svg/exp2.svg"
    },
    {
        "title": "Consistent Results",
        "desc": "Remove emotional biases from trading and rely on consistent, calculated performance. Our automation ensures steady results, day in and day out.",
        "img": "/images/svg/exp3.svg"
    },
    {
        "title": "Speed and Efficiency",
        "desc": "Our algorithmic system ensures lightning-fast trade execution, allowing you to seize opportunities faster than ever before.",
        "img": "/images/svg/exp4.svg"
    },
    {
        "title": "Customizable Strategies",
        "desc": "Tailor your trading approach with flexible algorithm settings that suit your investment goals. Whether you're conservative or aggressive, our platform adapts to your needs.",
        "img": "/images/svg/exp5.svg"
    },

]
</script>

<template>
    <section class="font-manrope px-4 sm:px-6 py-6 md:py-10 3xl:max-w-[85%] mx-auto overflow-x-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between md:px-8 space-y-5 md:space-y-0">
            <p class="font-bold text-[19px]">Trusted by the best in the world</p>
            <img src="/images/svg/brokerLogo.svg" alt="" class="w-full md:w-[45%]">
        </div>
        <div class="border border-black border-opacity-20 rounded-lg px-4 sm:px-6 md:px-12 py-10 mt-6">
            <div class="flex flex-col xl:flex-row items-center justify-between gap-4 md:gap-7">
                <div class="">
                    <p class="text-custom-blue font-semibold text-[16px]">Features</p>
                    <h2 class="font-bold text-[32px] leading-[45px] md:leading-[55px] md:text-[45px]">Transform Your Trading Experience with Our Powerful Features</h2>
                </div>
                <p class="opacity-50 text-[16px]">Our algorithmic trading software automates complex strategies, delivering speed and precision in every trade. Maximize profits, reduce risks, and stay ahead of the market with seamless, data-driven execution.</p>
            </div>
            <hr class="my-10">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-20">
                <div v-for="item in experiance" class="flex flex-col md:flex-row items-start gap-4">
                    <img :src="item.img" alt="">
                    <div class="flex flex-col gap-1">
                        <p class="font-bold text-[19px]">{{ item.title }}</p>
                        <p class="opacity-50">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>  
    </section>
</template>



