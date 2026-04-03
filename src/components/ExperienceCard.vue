<script setup>
defineProps({
    position: String,
    title: String,
    date: String,
    paragraphs: {
        type: Array,
        default: () => []
    }
})
</script>
<template>
    <div :class="`flex flex-col gap-4 ${position}`">
        <h3 class="text-primary text-2xl font-bold">
            {{ title }}
        </h3>
        <span class="text-span font-bold">{{ date }}</span>
        <ul class="flex flex-col gap-2">
            <li 
            class="font-medium"
            v-for="(paragraph, index) in paragraphs"
            :key="index"
            >
            {{ paragraph }}
            </li>
        </ul>
    </div>
</template>
<style>
.text-span {
    color: #003087;
}
</style>