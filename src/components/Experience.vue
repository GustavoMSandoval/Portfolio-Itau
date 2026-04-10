<script setup>
import ExperienceCard from './ExperienceCard.vue';
</script>
<template>
    <section id="experiencia">
        <div class="section-container">
            <div class="my-12 lg:my-24">
                <h2 class="subtitle">Experiência</h2>
            </div>
            <div class="flex flex-col lg:grid gap-8 lg:gap-12 grid-cols-5">
                <ExperienceCard 
                position="col-start-1 col-span-3"
                title="Desenvolvedor de Sistemas Full Stack | Cão Fiel"
                date="Nov 2025 — Jan 2026"
                :paragraphs="[
                    'Análise de requisitos e arquitetura de sistema ERP utilizando Laravel + Filament, focado em autonomia operacional.',
                    'Desenvolvimento de módulos críticos: Gestão Financeira (Fluxo de Caixa), PDV e Controle de Ativos.',
                    'Implementação de Governança de Acesso via níveis hierárquicos e autenticação baseada em funções (RBAC).',
                    'Modelagem de dados robusta com MySQL e interfaces otimizadas com Tailwind CSS para alta produtividade.',
                    'Impacto no Negócio: Redução drástica de custos fixos com licenciamento de software através de solução proprietária customizada.'
                ]"/>
                <div class="col-start-4 col-span-5 h-full hidden lg:flex items-center">
                    <img 
                        src="/background/fundo-azul.png" 
                        alt="Fundo azul" 
                        class="w-full h-auto "
                    >
                </div>
                <ExperienceCard 
                position="col-start-2 col-span-4"
                title="Desenvolvedor Frontend | EPPOlix"
                date="Nov 2025 — Dez 2025"
                :paragraphs="[
                    'Refatoração de interfaces institucionais focada em legibilidade e SEO técnico, elevando o padrão de autoridade digital da empresa.',
                    'Otimização de performance frontend e garantia de integridade visual em múltiplos dispositivos.',
                    'Gestão e publicação de ativos digitais críticos em ambiente de produção via protocolos seguros de transferência (FTP).'
                ]"/>
                <div class="col-start-1 col-span-2 h-full hidden lg:flex items-center">
                    <img 
                        src="/background/fundo-laranja.png" 
                        alt="Fundo azul" 
                        class="w-full h-auto "
                    >
                </div>
                <ExperienceCard 
                position="col-start-3 col-span-5"
                title="Desenvolvedor Full Stack | Promofix"
                date="Ago 2025 — Nov 2025"
                :paragraphs="[
                    'Concepção de plataforma digital responsiva utilizando NextJS, com foco em experiência do usuário e conversão.',
                    'Eficiência Técnica: Melhoria auditada de 87% no SEO e otimização de tempo de carregamento com imagens de próxima geração (WebP).',
                    'Integração de monitoramento via Google Analytics para análise de dados e suporte à tomada de decisão baseada em leads.'
                ]"/>
                <ExperienceCard 
                position="col-start-2 col-span-4"
                title="Desenvolvimento de Software (3ºsemestre)"
                date="Jul 2024 — Out 2024"
                :paragraphs="[
                    'Java (NetBeans), MySQL via JDBC, Apache POI (Integração Excel).',
                    'Implementação de motor de leitura e processamento de dados vindos de arquivos Excel para carga no banco de dados.',
                    'Criação de dashboards de consumo e gastos para suporte à tomada de decisão.',
                    'Interface intuitiva desenvolvida em Java, com módulos completos de Login e Cadastro para segurança das informações.'
                ]"/>
                <ExperienceCard 
                position="col-start-1 col-span-3"
                title="Desenvolvimento de Software (6ºsemestre)"
                date="Jul 2025 — Out 2025"
                :paragraphs="[
                    'Python (Django), SQLite, DeepFace (Computer Vision).',
                    'Integração de modelos de Deep Learning para autenticação biométrica em tempo real.',
                    'Sistema de níveis de acesso (Usuário, Diretor e Ministro), simulando fluxos de governança de alta segurança.',
                    'Desenvolvimento em Django para gerenciamento robusto de sessões e integridade dos dados.'
                ]"/>
                <div class="col-start-4 col-span-5 h-full hidden lg:flex items-center">
                    <img 
                        src="/background/fundo-cinza.png" 
                        alt="Fundo azul" 
                        class="w-full h-auto "
                    >
                </div>
            </div>
        </div>
    </section>
</template>