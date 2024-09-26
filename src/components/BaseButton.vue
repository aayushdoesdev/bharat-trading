<script setup>
defineProps({
    title: String
})
</script>

<template>
    <button class="font-manrope font-semibold text-white border-2 border-transparent bg-custom-blue px-8 py-3 rounded-lg hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue transition duration-200 ease-in-out">
        {{ title }}
    </button>
</template>



