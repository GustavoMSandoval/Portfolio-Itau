<script setup>
import ProjectCard from './ProjectCard.vue';
</script>
<template>
    <section id="projetos">
        <div class="section-container my-12">
            <h2 class="subtitle text-center my-12">Meus Projetos</h2>
            <div class="flex flex-col  lg:flex-row gap-5">
                <ProjectCard 
                video_url="https://www.youtube.com/embed/YG12SAzl4m4?si=nnU6-R42-b2BQAVT"
                title="Vídeo Promofix"
                project_name="Site Promofix"
                description="Trabalho feito utilizando NextJS para uma empresa de comunicação visual o resultado Google Analytics implementado e  melhora de 87% no SEO."
                />
                <ProjectCard 
                video_url="https://www.youtube.com/embed/He30ozw3oBg?si=ODTsiTQi53H-sq5S"
                title="Vídeo Sistema Cão Fiel"
                project_name="Sistema Cão Fiel"
                description="Sistema de gerenciamento feito para auxiliar uma clínica, gerenciador de caixa, clientes, animais, serviços e vacinas. Com Dashboard demonstrando as vendas mensais."
                />
                <ProjectCard 
                video_url="https://www.youtube.com/embed/wCEn6v23Obk?si=n3GwwJwBp5-_YNjv"
                title="Vídeo Sistema de reconhecimento facial"
                project_name="Sistema de Reconhecimento Facial"
                description="Projeto universitário proposto pela UNIP no segundo semestre de 2025. APS de reconhecimento facial utilizando bibliotecas e frameworks como Django, Deepface e OpenCV."
                />
            </div>
        </div>
    </section>
</template>