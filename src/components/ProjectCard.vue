<script setup>

</script>
<template>
    <div>
        <iframe src="{{ video_url }}" width="600" height="400" title="{{ title }}"></iframe>
        <div>
            <h3>{{ project_name }}</h3>
            <p>{{ description }}</p>
            <span class="text-secondary">Ver mais</span>
        </div>
    </div>
</template>