<template>
    <section class="flex justify-center items-center bg-black h-screen w-screen text-center overflow-hidden relative">
    <div class="pad">
    <div class="perfil z-30 relative flex flex-row justify-start items-center pl-[5%]">
        <div class="carta flex flex-column items-center p-4">
            <img src="/abic_ai.png" alt="" width="150">
            <h1 class="pt-3"><strong>Andres Felipe Lopez S.</strong></h1>
            <p class="front">Frontend Dev</p>
            <p style="opacity: 0.3; color: #333;">.....................................</p>
            <nav class=" flex flex-grow justify-end">
                <ul class="flex text-3xl [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
                    <li><a href="https://github.com/Abic26/" target="_blank"><ion-icon name="logo-github" title="logo-github"></ion-icon></a></li>
                    <li><a href="Andres Felipe Lopez S..pdf" download><ion-icon name="document-attach-outline" title="Curriculo"></ion-icon></a></li>
                    <li><a href="mailto:abicsupa@gmail.com" target="_blank"><ion-icon name="mail-open-outline"></ion-icon></a></li>
                    <li><a href="https://wa.me/3186078770" target="_blank"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
                </ul>
            </nav>

        </div>
        <div class="carta1 flex flex-column justify-start items-start">
            <h1>¿Quien Soy?</h1>
            <br>
            <div class="parrafo flex flex-column justify-start items-start">
            <p>"Mi historia fusiona la programación y el arte urbano. Como desarrollador frontend, mi creatividad fluye como un graffiti en una pared en blanco. Cada proyecto combina mis habilidades técnicas con mi pasión por el <span style="font-family: 'Lacquer', cursive;">diseño</span> y los <span style="font-family: 'Press Start 2P', cursive; font-size: 10px;">algoritmos</span>, creando experiencias atractivas e intuitivas. Mi portafolio refleja esta fusión de arte y tecnología, tejiendo una narrativa tanto visual como logica tan diversa que es vibrante como el arte urbano</p></div>
            <br>
            <h1>Skills</h1>
            <div class="skills flex flex-row justify-start items-start">
                <ion-icon name="logo-html5"></ion-icon>
                <ion-icon name="logo-css3"></ion-icon>
                <ion-icon name="logo-sass"></ion-icon>
                <img class="lo" src="/logo-boostrap.svg" alt="">
                <img class="lo" src="/logo-tailwind.png" alt="">
                <ion-icon name="logo-figma"></ion-icon>
                <ion-icon name="logo-vercel"></ion-icon>
                <ion-icon name="logo-ionic"></ion-icon>
                <img class="lo" src="/logo-github.svg" alt="">
                <img class="lo" src="/logo-git.svg" alt="">
                <ion-icon name="logo-javascript"></ion-icon>
                <ion-icon name="logo-vue"></ion-icon>
                <ion-icon name="logo-laravel"></ion-icon>
                <img class="lo" src="/logo-php.png" alt="">
                <img class="lo" src="/logo-mysql.png" alt="">
              </div>
              <br>
              <h1>Educacion</h1>
              <div class="educacion flex flex-col">
                <p>
                &#187; Desarrollador FullStack - Básico e Intermedio(Universidad Distrital José Francisco De Caldas )
                </p>
                
                &#187; Curso Desarrollo web Modulo (1/2) (2/2) (Google Actívate)
                <p>
               &#187; Universidad Desarrollo web-FrontEnd Web Developer(bootcamp Udemy-Ing. Ubaldo Acosta)
                </p>
                <p>
                &#187; Universidad JavaScript - De Cero a Experto JavaScript(bootcamp Udemy-Ing. Ubaldo Acosta)
                </p>
                <p>
                &#187; Vue desde Cero(bootcamp Udemy-Yirsis Serrano Administrador en T.I. y Fullstack Developer)
                </p>
                <p>
                &#187; Vue.js - Intermedio(bootcamp Udemy-Fernando Herrera A Full-Stack Developer & Teacher)
                </p>
                <p>
                &#187; CSS La Guía Completa - Flexbox, CSS Grid, SASS(bootcamp Udemy-Juan Pablo De la torre Valdez)
                </p>
                <p>
                &#187; <span style="font-family: 'Press Start 2P', cursive; font-size: 12px;">const</span> Educacion = ++Educacion
                </p>
                
              
            </div>

        </div>
      
        </div>
    </div>
        
        <div class="absolute top-0 bottom-0 h-full w-full z-10">
            <video class="blur-md object-center object-cover h-full w-full" autoplay muted loop></video>
        </div>
    
        </section>
</template>

<style scoped>
.pad{
    padding: 15%;
}
.skills{
    opacity: 0.5;

}
.lo{
    background: rgb(245,222,179);
    background: linear-gradient(180deg, rgba(245,222,179,1) 20%, rgba(245,222,179,0) 100%); 
    /* padding-bottom: 5px; */
    /* color: wheat; */
    width: 20px;
    height: auto;

}
.educacion{
    width: 750px;
    text-align: start;
    opacity: 0.5;

}

video{
    background-color: #7f4ca5;
    
}
.perfil{
    background-color: #333;
    width: auto;
    height:auto;
    padding: 40px 70px;
    border-radius: 35px;
    display: flex;
    flex-wrap: ;
}

.carta{
    background-color: wheat;
    /* margin-left: 5%; */
    width: 20%;
    height: 49%;
    color: #333;
    border-radius: 5px;
    /* padding: 5px; */
}

.carta1{
    background-color: #333;
    color: wheat;
    margin-left: 5%;
    width: 23%;
    height: 70%;
}
.carta h1{
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    /* font-family: 'Lacquer', cursive; */
}
.carta1 h1{
    font-family: 'Lacquer', cursive;
    font-size: 25px;
}
img{
  filter: drop-shadow(5px 5px 2px #333);

}
nav{
  filter: drop-shadow(3px 3px 2px #333);
}
a{
color: #333;
opacity: 0.5;
}
a:hover{
    color: #7f4ca5;
    opacity: 1;
}
.front{
    /* font-family: 'Barlow Condensed', sans-serif; */
    /* font-family: 'Press Start 2P', cursive; */
    font-family: 'Lacquer', cursive;
    opacity: 0.4;
    font-size: 20px;

}
.parrafo{
    width: 340%;
    text-align: left;
    opacity: 0.5;

}
@media(max-width:1080px){
    
    div.perfil{
        display:grid;
        grid-template-rows: repeat(1,1fr);
        grid-template-columns: repeat(1,1fr);
        width: 700px;
        height: 900px;
        padding-top: 1px;
        padding-left: 1px;
        margin-top: -100px;
    }
    div.carta{
        margin-top: 100px;
        grid-row: 2;
        grid-column: 1;
        display: flex;
        flex-direction: row;
        margin-left: 35%;
        height: 200px;
    }
    div.carta ul{
        display: none;
    }
    div.carta p.front{
        display: none;
    }
    div.educacion{
        display: flex;
        flex-direction:column;
        align-items: start;
        grid-row:2/2;
        grid-column:2/2;
        width: 800px;
        /* margin-top: -90px; */
    }
    .educacion p{
        width: 660px;
    }
        
    }
@media(max-width:768px){
    
div.perfil{
    display:grid;
    grid-template-rows: repeat(1,1fr);
    grid-template-columns: repeat(1,1fr);
    width: 700px;
    height: 900px;
    padding-top: 1px;
    padding-left: 1px;
    margin-top: -100px;
}
div.carta{
    margin-top: 100px;
    grid-row: 2;
    grid-column: 1;
    display: flex;
    flex-direction: row;
    margin-left: 35%;
    height: 200px;
}
div.carta ul{
    display: none;
}
div.carta p.front{
    display: none;
}
div.educacion{
    display: flex;
    flex-direction:column;
    align-items: start;
    grid-row:2/2;
    grid-column:2/2;
    width: 800px;
    /* margin-top: -90px; */
}
.educacion p{
    width: 660px;
}
    
}
@media(max-width: 700px){
    div.perfil{
        width: 360px;
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        font-size: 11px;
   }
    div.carta{
        /* display: none; */
        position: absolute;
        margin-top: 770px;
        width: 170px;
        height: 200px;
        margin-left: 90px;
    }
    div.carta1{
        display: flex;
        width: 340px;
        /* flex-direction: column; */
        flex-wrap: wrap;
    }
    .carta1 p{
        width: 330px;
        
    }
    div.educacion{
        /* display: flex; */
        /* flex-wrap: wrap; */
        /* font-size: 8.5px; */
    }
    .educacion{
        padding-top: 10px;
        width: 330px;
        font-size: 11px;
        line-height: 1.5;
    }
    div.skills{
        padding-top: 10px;
    }
}
@media(max-width: 390px){
    div.perfil{
        width: 360px;
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        font-size: 11px;
   }
    div.carta{
        /* display: none; */
        position: absolute;
        margin-top: 770px;
        width: 170px;
        height: 200px;
        margin-left: 90px;
    }
    div.carta1{
        display: flex;
        width: 340px;
        /* flex-direction: column; */
        flex-wrap: wrap;
    }
    .carta1 p{
        width: 330px;
        
    }
    div.educacion{
        /* display: flex; */
        /* flex-wrap: wrap; */
        /* font-size: 8.5px; */
    }
    .educacion{
        padding-top: 10px;
        width: 330px;
        font-size: 11px;
        line-height: 1.5;
    }
    div.skills{
        padding-top: 10px;
    }
}
</style>