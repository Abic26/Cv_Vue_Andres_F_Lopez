<template>
    <section class="flex justify-center items-center bg-black h-screen w-screen text-center overflow-hidden relative">
    
        <div class="todo z-30 relative h-full flex flex-col justify-center">
            <h1 class="titulo">Habilidades</h1>
            <p class="info">selecciona y clickea la carta</p>

          <div class="seccion-carta">
            <div class="stack">
                <h1 class="fuente text-wheat" style="font-family: 'Lacquer', cursive;">Frontend</h1>
                <div class="carda  flex border-solid border-2 border-white-700 rounded-5 ">
                    <div class="cardas  grid gap-3 grid-cols-3 grid-rows-3">
                        <button @click="htmle">
                            <card url="./logo-html5.svg" nombre="Html" class="cards"/>
                        </button>
                        <div @click="csse">
                            <card url="./logo-css3.svg" nombre="Css" class="cards"/>
                        </div>
                    <button @click="sasse">
                        <card url="./logo-sass.svg" nombre="Sass" class="cards"/>
                    </button> 
                    
                    <button @click="javascripte">
                        <card url="./logo-javascript.svg" nombre="Javascript" class="cards"/>
                    </button> 
                    
                    <button @click="vuee">
                        <card url="./logo-vue.svg" nombre="Vue.js" class="cards"/>
                    </button> 
                    
                    <button @click="boostrape">
                        <card url="./logo-boostrap.svg" nombre="Boostrap" class="cards"/>
                    </button> 
                    
                    <button @click="tailwinde">
                        <card url="./logo-tailwind.png" nombre="Tailwind" class="cards"/>
                    </button> 
                    
                    <button @click="figmae">
                        <card url="./logo-figma.svg" nombre="Figma" class="cards"/>
                    </button> 
                </div>
                </div>
            </div>

          

            <div class="stack">
                <h1 class="fuente text-wheat" style="font-family: 'Lacquer', cursive;">Backend</h1>
                <div class="carda  flex border-solid border-2 border-white-700 rounded-5">
                    <div class="cardas  grid gap-3 grid-cols-2 grid-rows-3">

                    <button @click="phpe">
                        <card url="./logo-php.png" nombre="Php" class="cards"/>
                    </button> 
                    
                    <button @click="laravele">
                        <card url="./logo-laravel.svg" nombre="laravel" class="cards"/>
                    </button> 
                    
                    <button @click="mysqle">
                        <card url="./logo-mysql.png" nombre="MySQL" class="cards"/>
                    </button> 
                    
                </div>
                </div>
            </div>
            <div class="stack">
                <h1 class="fuente text-wheat" style="font-family: 'Lacquer', cursive;">Extra</h1>
                <div class="carda  flex border-solid border-2 border-white-700 rounded-5">
                    <div class="cardas  grid gap-3 grid-cols-2 grid-rows-3">

                    <button @click="githube">
                        <card url="./logo-github.svg" nombre="GitHub" class="cards"/>
                    </button> 
                    
                    <button @click="gite">
                        <card url="./logo-git.svg" nombre="Git" class="cards"/>
                    </button> 
                    
                    <button @click="vercele">
                        <card url="./logo-vercel.svg" nombre="Vercel" class="cards"/>
                    </button> 

                    <button @click="ionice">
                        <card url="./logo-ionic.svg" nombre="ionic" class="cards"/>
                    </button> 
                    
                
                </div>
                </div>
            </div>
          </div>
        </div>
        
        <div class="absolute top-0 bottom-0 h-full w-full z-10">
            <video class="blur-md object-center object-cover h-full w-full"  autoplay muted loop></video>
        </div>
    
        </section>
</template>

<script>
    import card from './card.vue'
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';
    export default{
    components:{
        card
        },
        name: "App",
        setup() {
    const htmle = () => {
      toast("Como Front-End Junior, creo estructuras web con HTML y aplico estilos visuales con CSS. Mi objetivo es hacer que el sitio web sea atractivo, funcional y fácil de usar para los usuarios, colaborando con diseñadores y mejorando la experiencia con interacciones en JavaScript.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const csse = () => {
      toast("Como Front-End Junior, aplico CSS para estilizar y mejorar el aspecto visual de las páginas web. Trabajo junto a diseñadores y equipos de UX/UI para implementar diseños en código CSS, asegurando coherencia visual, legibilidad y accesibilidad en el sitio web.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const sasse = () => {
      toast("Como Front-End Junior, aplicar Sass en mis proyectos web proporciona beneficios significativos en la gestión de estilos. Algunas de las ventajas clave incluyen el uso de variables para la consistencia, anidamiento para una estructura más clara, compilación a CSS para compatibilidad y personalización, y el soporte para frameworks CSS que agiliza el desarrollo. En general, Sass me permite mejorar la eficiencia y la calidad del código CSS, lo que facilita el mantenimiento y la creación de interfaces de usuario más efectivas.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const javascripte = () => {
      toast("Como Front-End Junior, me encargo de la validación de datos en el lado del cliente, asegurándome de que los datos ingresados por los usuarios cumplan con los requisitos especificados. Utilizo JavaScript para verificar y validar los campos de entrada antes de enviar los datos al servidor, ademas de poder almacenar informacion en base de datos locales y externas, consultandolas por medio de metodos de JS",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const vuee = () => {
      toast("Como Front-End Junior, aplico Vue.js para crear interfaces de usuario interactivas y dinámicas. Utilizo Vue.js para mejorar la experiencia del usuario, manejar datos en tiempo real, y facilitar la actualización y renderizado de elementos en la página web de manera eficiente. Con Vue.js, puedo reutilizar componentes, implementar reactividad en la interfaz y trabajar en colaboración con el Back-End para desarrollar aplicaciones web modernas y de alto rendimiento.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const boostrape = () => {
      toast("Como Front-End Junior, aplicar Bootstrap mejora la velocidad y eficiencia en el desarrollo web. Bootstrap ofrece componentes predefinidos para crear interfaces atractivas y responsivas, para diseñar diferentes tamaños de pantalla, estilos listos para usar que reducen la necesidad de CSS personalizado, bibliotecas de JavaScript interactivas, documentación, compatibilidad entre navegadores y facilidad en las pruebas de usabilidad debido a las convenciones de diseño. Bootstrap me permite agilizar el desarrollo y mejora la apariencia y funcionalidad de los proyectos web.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const tailwinde = () => {
      toast("Como Front-End Junior, aplico Tailwind en proyectos web mejora significativamente la velocidad y la eficiencia de desarrollo. Este framework utiliza clases CSS utilitarias directamente en el HTML, lo que me permite definir estilos, márgenes, rellenos, colores y tipografía de manera ágil. Además, Tailwind   es altamente personalizable, lo que facilita la adaptación a la identidad visual del proyecto y mantiene la coherencia en el diseño. Su enfoque en la modularidad promueve la reutilización de componentes y secciones, y su soporte para la responsividad optimiza la experiencia del usuario en diferentes dispositivos.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const ionice = () => {
      toast("Como Front-End Junior, utilizo ionicons para utilizar sus iconos en mis aplicaciones que este creando para darle un toque especial y no sea solo texto, sea mas facil del usuario comprender y no tenga que leer tanto texto, a su vez sinedo amigable con las interfaces que se este creando",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const figmae = () => {
      toast("Como Front-End Junior, aplico Figma para colaborar con diseñadores y equipos de UX/UI en la creación y revisión de diseños de páginas web y aplicaciones. Utilizo Figma para visualizar y comprender los diseños, extraer recursos gráficos necesarios para la implementación y obtener mediciones precisas para el desarrollo Front-End. Figma me permite trabajar de manera más eficiente y coherente en la implementación de los diseños, asegurando que el resultado final sea fiel a la visión del diseño original.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const phpe = () => {
      toast("Como Front-End Junior, puedo aplicar PHP de diversas formas para mejorar la experiencia de usuario y la funcionalidad en aplicaciones web. Esto incluye la integración de datos dinámicos desde bases de datos, el procesamiento de formularios, la creación de plantillas reutilizables, la gestión de sesiones y autenticación de usuarios, la interacción con APIs externas, la optimización del rendimiento y la implementación de medidas de seguridad.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const laravele = () => {
      toast("Como Front-End Junior, aplico Laravel, para desarrollar aplicaciones web completas, dinámicas y seguras. Aprovecho sus herramientas y funcionalidades para crear experiencias interactivas, trabajando en el Front-End y colaborando con el Back-End en enrutamiento, autenticación, manejo de bases de datos y plantillas. Esto me permite enfocarme en interfaces atractivas y mantener la coherencia visual mientras Laravel se encarga del funcionamiento del Back-End y la gestión de datos.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const mysqle = () => {
      toast("Como Front-End Junior, aplico MySQL para trabajar con bases de datos desde el lado del cliente y mejorar la interacción de los usuarios con las aplicaciones web. Algunas de las formas en que puedo aplicar MySQL en mi trabajo incluyen, Integración de datos, Formularios y entradas de usuarios e Integración con APIs",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const githube = () => {
      toast("Como Front-End Junior, utilizo github para guardar mis proyectos, ademas de que los puedo desplegar y visualizar en github, tener mi codigo para futuras ocaciones lo tenga que utilizar",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const gite = () => {
      toast("Como Front-End Junior, utilizo git para navergar entre ramas del proyecto, ademas de que los puedo desplegar en github, tambien lo puedo hacer en vercel, netifly, para la previa visualizacion del proyecto en el que este trabajando y asi el cliente lo pueda observar",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    const vercele = () => {
      toast("Como Front-End Junior, utilizo vercel para guardar mis proyectos, ademas de que los puedo desplegar y visualizar en vercel.",{
        autoClose: 10000, position: toast.POSITION.BOTTOM_CENTER 
      }); // ToastOptions
    }
    return { htmle,csse,sasse,javascripte,vuee,boostrape,tailwinde,ionice,figmae,phpe,laravele,mysqle,githube,gite,vercele };
   }
    }
</script>

<style scoped>  
video{
  background-color: #7f4ca5;
}
.seccion-carta{
  display: flex;
  flex-direction: row;
  padding-bottom: 15%;
}
    .titulo{
      font-family: 'Barlow Condensed', sans-serif;
      font-family: 'Press Start 2P', cursive;
      font-size:30px;
      padding-top: 17%;
      color: wheat;
      cursor: pointer;
      opacity: .9;

    }
    .carda{
      padding: 25px;
    }
    .stack.fuente h1 {
      padding-bottom: 5px;
    }
    div h1.fuente{
      font-size: 35px;
    }
    h1{
       padding-bottom: 5px;
        filter: drop-shadow(15px 10px 3px #333);

    }
    .stack{
      padding: 30px;
    }

    .cards{
        width: 110px;
        height: 100px;
    }
    .info{
        color: wheat;
        opacity: 0.5;
    }
@media(max-width:2500px){
  
.seccion-carta{
  display: flex;
  flex-direction: row;
  padding-bottom: 15%;
}
    .titulo{
      font-family: 'Barlow Condensed', sans-serif;
      font-family: 'Press Start 2P', cursive;
      font-size:30px;
      padding-top: 17%;
      color: wheat;
      cursor: pointer;
      opacity: .9;

    }
    .stack.fuente h1 {
      padding-bottom: 5px;
      font-size: 35px;
    }
    h1{
       padding-bottom: 5px;
        filter: drop-shadow(15px 10px 3px #333);

    }
    .stack{
      padding: 30px;
    }

    .cards{
        width: 110px;
        height: 100px;
    }
    .info{
        color: wheat;
        opacity: 0.5;
    }
}
@media (max-width: 390px) {
  .titulo{
  margin-top: 70px;
}
.cardas{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

div .carda{
  width: 100%;
  padding: 10px;
}
div.cardas{
  width: 100%;
  margin-bottom: -10px;
}
div h1.fuente{
  font-size: 20px;
}


}
@media (max-width: 416px) {
.titulo{
  margin-top: 70px;
}
.cardas{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

div .carda{
  width: 100%;
  padding: 10px;
}
div.cardas{
  width: 100%;
  margin-bottom: -10px;
}
div h1.fuente{
  font-size: 20px;
}


}
@media (max-width: 768px) {
.seccion-carta{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

}
.cardas{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  
}
 .carda{
  width: auto;
  height: auto;
}
.cards{
    width: 40px;
    height: 40px;
    
  }
  .stack{
    padding: 5px;
  }
}
@media (max-width: 1260px) {
  .seccion-carta{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

}
.cardas{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  
}
 .carda{
  width: auto;
  height: auto;
}
.cards{
    width: 40px;
    height: 40px;
    
  }
  .stack{
    padding: 5px;
  }
}
</style>
    