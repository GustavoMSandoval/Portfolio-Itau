<template>
    <header class="fixed w-full top-0 lg:top-5 z-50">
        <div class="section-container">
            <nav class="hidden lg:flex justify-between items-center py-2 ">
                <img src="/public/Itaú_Unibanco_logo_2023.png" class="w-20 h-20 " alt="Logo">
                <ul class="flex justify-center gap-2">
                    <li><a href="#inicio" class="nav-link">Início</a></li>
                    <li><a href="#sobre" class="nav-link">Sobre</a></li>
                    <li><a href="#experiencia" class="nav-link">Experiência</a></li>
                    <li><a href="#projetos" class="nav-link">Projetos</a></li>
                </ul>
                <a href="#contato" class="btn-primary">Contato</a>
            </nav>
            <nav class="lg:hidden py-6">
                <div class="flex justify-between items-center">
                    <img src="/public/ITAU_LOGO_branco.webp" class="w-12 h-12" alt="Logo">
                    <div v-if="isMenuOpen" class="nav-menu-icon">
                        <button @click="toggleMenu"><X :size="32" /></button>
                    </div>
                    <div v-if="!isMenuOpen" class="nav-menu-icon">
                        <button @click="toggleMenu"><MenuIcon :size="32" /></button>
                    </div>
                </div>
                <ul v-if="isMenuOpen" class="absolute right-10 bg-white flex flex-col gap-4 py-4 mt-10">
                    <li><a href="#inicio" class="nav-link">Início</a></li>
                    <li><a href="#sobre" class="nav-link">Sobre</a></li>
                    <li><a href="#experiencia" class="nav-link">Experiência</a></li>
                    <li><a href="#projetos" class="nav-link">Projetos</a></li>
                    <li><a href="#contato" class="btn-primary">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
import { MenuIcon, X } from 'lucide-vue-next';

export default {
    
    components: {
        MenuIcon,
        X
    },

    data() {
        return {
            isMenuOpen: false
        }
    },

    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    },
}
</script>
<style>

header {

    @media (max-width: 1019px) {
        background-color: var(--primary);
    }
}

.nav-menu-icon {
    color: var(--light);
}

.nav-link {
    font-weight: bold;
    transition: 300ms ease-in-out;
    position: relative;

    &:hover {
        width: 100%;
        color: var(--primary);
    }
}

</style>