<script setup>
import HeroSection from '@/sections/HomeViewSections/HeroSection.vue';
import ExperienceSection from '@/sections/HomeViewSections/ExperienceSection.vue';
import InovationSection from '@/sections/HomeViewSections/InovationSection.vue';
import PricingSection from '@/sections/HomeViewSections/PricingSection.vue';
import BusinessInfoSection from '@/sections/HomeViewSections/BusinessInfoSection.vue';
import StepsSections from '@/sections/HomeViewSections/StepsSections.vue';
import FaqSection from '@/sections/HomeViewSections/FaqSection.vue';
import TestimonialSection from '@/sections/HomeViewSections/TestimonialSection.vue';
</script>

<template>
    <main class="">
        <HeroSection id="hero"/>
        <ExperienceSection id="features"/>
        <InovationSection/>
        <PricingSection id="pricing"/>
        <BusinessInfoSection id="contact"/>
        <StepsSections/>
        <FaqSection id="faq"/>
        <TestimonialSection/>
    </main>
</template>



