<template>
<header class="cabeza py-6 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white">
    <div class="flex flex-grow basis-0">
        <a href="">
            <ul>
            <li>
                <logo/>
            </li>
        </ul>
        </a>
    </div>
    <nav class="enlaces">
        <ul class="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li><a href="#home">Home</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#conoceme">Conoceme</a></li>
        </ul>
    </nav>
    <nav class="logos flex flex-grow justify-end basis-0">
        <ul class="flex text-3xl [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li><a class="logo" href="https://github.com/Abic26/" target="_blank"><ion-icon name="logo-github" title="logo-github"></ion-icon></a></li>
            <li><a class="logo" href="Andres Felipe Lopez S..pdf" download><ion-icon name="document-attach-outline" title="Curriculo"></ion-icon></a></li>
            <li><a class="logo" href="https://wa.me/3186078770" target="_blank"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
        </ul>
    </nav>
</header>
</template>
<script>
import logo from './logo.vue'
export default{
    components:{
        logo
    }
}
</script>
<style scoped>
ul{
    font-family: 'Lacquer', cursive;
    font-size: 25px;
    /* font-family: 'Barlow Condensed', sans-serif;
    font-family: 'Press Start 2P', cursive; */
}
ion-icon{
    font-size: 30px;
}
a:hover{
    color: wheat;
    animation: tada;
    animation-duration: 1s; 
}
li:hover{
    text-decoration: underline;
    /* border: 1px solid white; */
    /* border-radius: 30px; */

}
@media (max-width: 390px) {
.cabeza{
    margin-left: -15px;
}
    .enlaces{
    display: none;
}
}
@media (max-width: 768px) {
    header{
    margin-left: -35px;
}
.enlaces a{
    font-size: 17px;
    margin-bottom: 10px;
}
.logos{
    padding-left: 30px;
}
.logo ion-icon{
    font-size: 25px;
    
}
}
@media (max-width: 740px) {
    .enlaces{
    display: none;
}
}
</style>
