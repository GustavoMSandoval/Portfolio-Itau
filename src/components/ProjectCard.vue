<script setup>
defineProps({
    video_url: String,
    title: String,
    project_name: String,
    description: String
})
</script>
<template>
    <div class="flex flex-col gap-5 flex-1">
        <iframe
                className="w-full aspect-video "
                :src="video_url"
                :title="title"
                showinfo="0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
        </iframe>
        <div class="flex flex-col gap-5">
            <h3 class="text-primary">{{ project_name }}</h3>
            <p>{{ description }}</p>
            <a :href="video_url" class="text-secondary">tela cheia</a>
        </div>
    </div>
</template>