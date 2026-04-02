<template>
    <section id="sobre">
        <div class="section-container lg:flex gap-8 justify-around items-center py-12">
            <div class="image-wrapper lg:w-1/2 flex justify-center">
                <img src="/public/foto_pessoal.jpeg" alt="foto Gustavo Moreira" class="w-2xs rounded-full">
            </div>
            <div class="mt-7 md:mt-1 flex flex-col gap-4 lg:w-1/2">
                <h2 class="subtitle">Sobre mim</h2>
                <p>Me chamo Gustavo, sou um estudante de Ciências da Computação apaixonado <br> por solucionar problemas utilizando tecnologia.</p>
                <p>Minha vontade de construir soluções de alto impacto e de gerar mudanças positivas <br> na vida das pessoas, faz com que 
                minha mentalidade se alinhe à cultura humanizada do Banco Itaú. <br>
                Vejo no grupo um exemplo a ser seguido no quesito atendimento ao cliente e qualidade de vida do colaborador.</p>
                <p>Sou uma pessoa proativa e orientada a resultados, foco no atendimento de excelência ao cliente e na boa convivência com o time.</p>
                <a href="#projetos" class="text-secondary">ver mais</a>
            </div>
        </div>
    </section>
</template>
<style>
.image-wrapper {
    position: relative;
    background-image: url('./public/background/fundo-laranja.png');
    background-size: cover;
    background-position: top right;
    background-repeat: no-repeat;

}

@media (max-width: 800px) {
    .image-wrapper {
        display: none;
    }
}
</style>