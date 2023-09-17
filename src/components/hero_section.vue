<template>
<section class="flex justify-center items-center bg-black h-screen w-screen text-center overflow-hidden relative">

<div class="z-30 relative h-full flex flex-row">
  <div class="secciones">
    <div class="flex flex-col justify-center aling-center p-5">
        <img class="abicImg" src="/abic.gif" width="700px" alt="">
    </div>
    <div class="flex flex-col justify-center aling-center p-5">
        <h1 class="hero-h1 fuente pb-[5%] animacion titulo">console.log(<span class="titulo-animado">"Hola Mundo"</span>)</h1>
        <h2 class="hero-h2 text-[60px]" style="font-family: 'Lacquer', cursive; color: wheat;">Soy <span class="titulo-animado">Andres</span> Lopez</h2>
        <p class="hero-p text-white text-[30px] pt-[7%] font-light" style="font-family: 'Oswald', sans-serif">!Un Frontend Developer que le encanta programar, <br>diseñar, jugar video juegos y estoy alegre de que estes aqui¡</p>
    </div>
  </div>
</div>
    
    <div class="absolute top-0 bottom-0 h-full w-full z-10">
        <video class="blur-md object-center object-cover h-full w-full" autoplay muted loop></video>
    </div>

    </section>
</template>
<style>
video{
  background-color: #333;
}
.secciones{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.fuente{
  font-family: 'Barlow Condensed', sans-serif;
  font-family: 'Press Start 2P', cursive;
  opacity: .5;
  color: white;
  font-size:30px;
}
.fuente:hover{
color: wheat;
opacity: 100;
cursor: pointer;
}
.animacion{
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s;
  filter: drop-shadow(25px 15px 5px rgb(243, 243, 243));

}
.abicImg{
  filter: drop-shadow(25px 25px 5px wheat);
}
@keyframes cambiaColor {
    0% { color: white; } 
    25% { color: wheat; } 
    50% { color: #7f4ca5; } 
    75% { color: orange; } 
    100% { color: white; } 
}

.titulo-animado {
    animation: cambiaColor 2s linear infinite;

}
@media (max-width: 334px) {

  .secciones,div{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
  div h1.hero-h1{
    font-size: 7px;
  
  }
  div .hero-h2 {
    font-size: 20px;
  
  }
  div .hero-p{
    font-size: 10px;
}


 
   
}
@media (max-width: 390px) {
  .secciones,div{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
  div h1.hero-h1{
    font-size: 7px;
  
  }
  div .hero-h2 {
    font-size: 20px;
  
  }
  div .hero-p{
    font-size: 10px;
}

 
   
}
@media (max-width: 412px) {
  img.abicImg{
    margin-top: 30px;
    margin-bottom: -50px;
  }
  .secciones,div{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
  div h1.hero-h1 {
    
    font-size: 7px;
  
  }
  div .hero-h2 {
    font-size: 20px;
  
  }
   div .hero-p{
    font-size: 10px;
}

 
   
}
@media (max-width: 524px) {
  .secciones,div{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
  h1.hero-h1{
    font-size: 20px;
  
  }
  .hero-h2{
    font-size: 25px;
  
  }
   .hero-p{
    font-size: 15px;
}

 
   
}
@media (max-width: 2500px) {
.secciones{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.fuente{
  font-family: 'Barlow Condensed', sans-serif;
  font-family: 'Press Start 2P', cursive;
  opacity: .5;
  color: white;
  font-size:30px;
}
.fuente:hover{
color: wheat;
opacity: 100;
cursor: pointer;
}
.animacion{
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s;
  filter: drop-shadow(25px 15px 5px rgb(243, 243, 243));

}
.abicImg{
  filter: drop-shadow(25px 25px 5px wheat);
}
}

@media (max-width: 768px) {
  .secciones,div{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
  img{
    width: 400px;
    height: 300px;
  }

}
@media (max-width: 880px) {
  .secciones,div{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
  img{
    width: 400px;
    height: 300px;
  }

}
@media (max-width: 1080px) {
  .secciones,div{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
  img{
    width: 400px;
    height: 300px;
  }

}

</style>
