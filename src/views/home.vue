<template>

    <header_Page />

<main class="snap-y snap-mandatory realtive w-full h-screen overflow-auto">
    <div id="home" class="snap-center overflow-y-hidden overflow-x-hidden">
        <hero_section/>
    </div>

    <div id="habilidades" class="snap-center overflow-y-hidden overflow-x-hidden">
        <hero_section_habilidades/>
    </div> 

    <div id="proyectos" class="snap-center overflow-y-hidden overflow-x-hidden">
        <hero_section_proyectos/>
    </div>

    <div id="conoceme" class="snap-center overflow-y-hidden overflow-x-hidden">
        <hero_section_conoceme/>
    </div>
    

</main>
</template>
<script>
import header_Page from '../components/header.vue'
import hero_section from '../components/hero_section.vue'
import hero_section_habilidades from '../components/hero_section_habilidades.vue'
import hero_section_proyectos from '../components/hero_section_proyectos.vue'
import hero_section_conoceme from '../components/hero_section_conoceme.vue'
import other_section from '../components/other_section.vue'
import { RouterLink } from "vue-router";


export default{
    components:{
        header_Page,
        hero_section,
        other_section,
        hero_section_habilidades,
        hero_section_proyectos,
        hero_section_conoceme,
        RouterLink
    }
}
</script>
