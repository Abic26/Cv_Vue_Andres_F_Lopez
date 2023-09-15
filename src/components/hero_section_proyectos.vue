import { toast } from 'vue3-toastify';
<template>
    <section class="flex justify-center items-center bg-black h-screen w-screen text-center overflow-hidden relative">
    
        <div class="z-30 relative h-full flex flex-col justify-center align-center">
            <h1 class="titulo fuente">Proyectos</h1>
            <div class="cartas pt-5 grid gap-10 grid-cols-3 grid-rows-3 bordes">
            <div class="card mb-3" style="max-width: 400px;">
                    <div class="image-container" >
                    
                            <h1 class="titulo-carta" style="padding-top: 10px;"> Monograph Dashboard ("Full Stack") #1</h1> 
                            <div class="lenguajes p-2">
                            <div class="p-1">
                            <button type="button" class="btn bg-warning btn-warning text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">javascript</button>
                            </div>
                            <div class="p-1">
                            <button type="button" class="btn bg-success btn-success text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">vue</button>
                            </div>
                            <div class="p-1">
                            <button type="button" class="btn bg-info btn-info text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">html</button>
                            </div>
                            <div class="p-1">
                            <button type="button" class="btn bg-danger btn-danger text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">laravel</button>
                            </div>
                            </div>
                            <div>
                            <img src="/Monograph.png" alt="Imagen" class="hover-image">
                    </div>
                        <div class="text-overlay">
                            <p>
                            Reto de Frontend Mentor donde los usuarios pueden ver y gestionar datos de la API "randomuser.me". Al hacer clic en "Tabla Backend", se pueden crear y guardar usuarios en una base de datos MySQL para visualizar cambios en tiempo real. Se usó Vue.js en el frontend, PHP/Laravel en el backend y MySQL para eficiencia y seguridad, superando el desafío original.</p>
                            <div class="p-2 enlaces">
                            <a  style="color: yellowgreen;" href="https://github.com/Abic26/Front_End_Monograph_Dashboard.git" target="_blank"><ion-icon name="logo-github" class="githubF botonCodigos"></ion-icon></a>
                                <a  href="https://prueba-tecnica-eglobal.vercel.app/#/" target="_blank"><ion-icon name="logo-chrome" class="botonCodigos"></ion-icon></a>
                                <a  style="color: red;" href="https://github.com/Abic26/Back_End_Monograph_Dashboard" title="Backend" target="_blank"><ion-icon name="logo-github" class="githubB botonCodigos"></ion-icon></a>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="card mb-3" style="max-width: 400px;">
                    <div class="image-container">
                    
                            <h1 class="titulo-carta" style="padding-top: 10px;">Sistema Facturacion Con Vue.js #2</h1> 
                            <div class="lenguajes p-2">
                                <div class="p-1"><button type="button" class="btn bg-success btn-success text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">vue</button></div>
                                <div class="p-1"><button type="button" class="btn bg-warning btn-warning text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">javascript</button></div>
                                <div class="p-1"><button type="button" class="btn bg-info btn-info text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">html</button></div>
                                <div class="p-1"><button type="button" class="btn bg-success btn-success text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">Pwa</button></div>
                                <div class="p-1"><button type="button" class="btn bg-danger btn-danger text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">Sass</button></div>
                            </div>    

                        <img src="/inventario.png" alt="Imagen" class="hover-image">
                        <div class="text-overlay">
                            <p>
                                Desarrollé un sistema de facturación para una empresa de alquiler de trajes usando Vue.js. Permite registrar facturas con detalles como estado (entregado o no), urgencia, fecha de entrega y fotos de los trajes. Facilita la búsqueda y seguimiento del estado de las facturas para los empleados. </p>
                            <div class="p-2 enlaces">
                                <a href="https://shiny-biscochitos-df4c6c.netlify.app/" target="_blank"><ion-icon name="logo-chrome" class="botonCodigos"></ion-icon></a>
                                <a href="https://github.com/Abic26/Sistema_Inventario_Beta_V.3.0.git" target="_blank"><ion-icon name="logo-github" class="botonCodigos"></ion-icon></a>
                            </div>    
                        </div>
                    </div>
            </div>
            <div class="card mb-3" style="max-width: 400px;">
                    <div class="image-container">
                    
                            <h1 class="titulo-carta" style="padding-top: 10px;"> Generador de gifs PWA #3</h1> 
                            <div class="lenguajes p-2">
                                <div class="p-1"><button type="button" class="btn bg-success btn-success text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">vue</button></div>
                                <div class="p-1"><button type="button" class="btn bg-warning btn-warning text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">javascript</button></div>
                                <div class="p-1"><button type="button" class="btn bg-success btn-success text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">Pwa</button></div>
                                <div class="p-1"><button type="button" class="btn bg-info btn-info text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">Css</button></div>
                            </div>
                        <img src="/gifs_page.png" alt="Imagen" class="hover-image">
                        <div class="text-overlay">
                            <p>
                            Aplicacion web progresiva (PWA) realizada en vue para generar y buscar gif, consumo de api externa para generar los gifs y stickers, se puede instalar como una aplicación nativa</p>
                            <div class="p-2 enlaces">
                                <a class="p-1" href="https://adorable-faun-1a98b6.netlify.app/" target="_blank"><ion-icon name="logo-chrome" class="botonCodigos"></ion-icon></a>
                                <a class="p-1" href="https://github.com/Abic26/Gifs_And_Stickers_Page" target="_blank"><ion-icon name="logo-github" class="botonCodigos"></ion-icon></a>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="card mb-3" style="max-width: 400px;">
                    <div class="image-container" >
                    
                            <h1 class="titulo-carta" style="padding-top: 10px;"> Pagina Web  #4</h1> 
                            <div class="lenguajes p-2">
                                <div class="p-1"><button type="button" class="btn bg-warning btn-warning text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">javascript</button></div>
                                <div class="p-1"><button type="button" class="btn bg-success btn-success text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">vue</button></div>
                                <div class="p-1"><button type="button" class="btn bg-info btn-info text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">html</button></div>
                                <div class="p-1"><button type="button" class="btn bg-danger btn-danger text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">laravel</button></div>
                            </div>
                        <img src="/pag.png" alt="Imagen" class="hover-image">
                        <div class="text-overlay">
                            <p>
                                Mi proyecto de pagina web aplicada a una Pyme real de colombia, la cual les ayuda a los clientes interactuar por medio de uas funciones que se le dieron a la pagina por medio de JavaScript, como enviar mensaje por whatsapp o ir a la ubicacion de la Boutique.</p>
                                <div class="p-2 enlaces">
                                    <a href="https://abic26.github.io/Bou_in_Style_Page/" target="_blank"><ion-icon name="logo-chrome" class="botonCodigos"></ion-icon></a>
                                    <a href="https://github.com/Abic26/Bou_in_Style_Page.git" target="_blank"><ion-icon name="logo-github" class="botonCodigos"></ion-icon></a>
                                </div>
                            
                        </div>
                    </div>
            </div>
            <div class="card mb-3" style="max-width: 400px;">
                    <div class="image-container">
                    
                            <h1 class="titulo-carta" style="padding-top: 10px;">Sistema de bodegaje #5</h1> 
                            <div class="lenguajes p-2">
                                <div class="p-1"><button type="button" class="btn bg-success btn-success text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">html</button></div>
                                <div class="p-1"><button type="button" class="btn bg-warning btn-warning text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">javascript</button></div>
                                <div class="p-1"><button type="button" class="btn bg-info btn-info text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">css</button></div>
                            </div>
                        <img src="/bodega.png" alt="Imagen" class="hover-image bodega">
                        <div class="text-overlay">
                            <p>
                                Mi sistema de bodegajes el cual se puede aplicar a cualquier tipo de empresa, en este ejempo lo realice a una empresa que maneja una bodega de arroz, el cual se realizo por medio de html, css y fundamentalmente JavaScript para darle funcionalidad a las acciones que tiene esta aplicacion.</p>
                                <div class="p-2 enlaces">
                                    <a href="https://abic26.github.io/App_Arroz/" target="_blank"><ion-icon name="logo-chrome" class="botonCodigos"></ion-icon></a>
                                    <a href="https://github.com/Abic26/App_Arroz.git" target="_blank"><ion-icon name="logo-github" class="botonCodigos"></ion-icon></a>
                                </div>
                        </div>
                    </div>
            </div>
            <div class="card mb-3" style="max-width: 400px;">
                    <div class="image-container">
                    
                            <h1 class="titulo-carta" style="padding-top: 10px;">Mas proyecto++</h1> 
                            <div class="lenguajes p-2">
                                <div class="p-1"><button type="button" class="btn bg-warning btn-warning text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">javascript</button></div>
                                <div class="p-1"><button type="button" class="btn bg-success btn-success text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">vue</button></div>
                                <div class="p-1"><button type="button" class="btn bg-info btn-info text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">html</button></div>
                                <div class="p-1"><button type="button" class="btn bg-danger btn-danger text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">laravel</button></div>
                                <div class="p-1"><button type="button" class="btn bg-info btn-info text-white" style="width: 50px; height: 20px; padding: 0; font-size: 10px;">Css</button></div>
                            </div>
                            
                        
                        <img src="/todo.png" alt="Imagen" class="hover-image">
                        <div class="text-overlay">
                            <p>
                                Aca podras ingresar a mi repositorio de Github donde vas a poder encontrar mis proyectos y sus respectivos codigos.</p>
                                <div class="p-2 enlaces">
                                    <a href="https://github.com/Abic26?tab=repositories" target="_blank"><ion-icon name="logo-github" class="botonCodigos"></ion-icon></a>
                                </div>
                        </div>
                    </div>
            </div>
            
           
        </div>
        </div>

            <div class="absolute top-0 bottom-0 h-full w-full z-10">
                <video class="blur-xl object-center object-cover h-full w-full" autoplay muted loop></video>
            </div>
    
    </section>
</template>
<style scoped>
video{
    background: #333;
}
.card{
    background-color: #33333300;
    border: none;
    /* filter: drop-shadow(5px 10px 7px #332); */

}
.card:hover{
    border: none;   
    filter: drop-shadow(5px 10px 3px wheat);

    /* filter: drop-shadow(7px 7px 7px #7f4ca5); */


}
    .titulo{
        color: wheat;
        font-family: 'Barlow Condensed', sans-serif;
        font-family: 'Press Start 2P', cursive;
        /* opacity: .5; */
        font-size:30px;
        padding-top: 20%;
    }
    h1{
        filter: drop-shadow(5px 5px 3px rgba(255, 255, 255, 0.576));

        }
        .titulo:hover{
            color: wheat;
            opacity: 100;

        }
    .titulo-carta{
        font-family: 'Lacquer', cursive;
        font-size:20px;

    }
    h1{
        cursor: pointer;

        color: #333;
        opacity: .8;
        /* filter: drop-shadow(5px 10px 7px white); */
        padding-top: 10px;


    }
    .image-container {
        border-radius: 10px;
        padding: 10px 0 0 0;
        position: relative;
        overflow: hidden;
        background-repeat: no-repeat;
        background: rgb(127,76,165);
        background: linear-gradient(321deg, rgba(127,76,165,1) 0%, #ecc87b 100%);
        width: 400px; 
        height: 250px;
    }
    img{
        border-radius: 20px;
        padding: 15px;
        width: 100%;
        filter: grayscale(100%);  
          
          

    }
    
    .hover-image {  
        /* padding-left: 25%; */
        transition: transform 0.3s ease;
        /* padding-left: 25%; */
    }
   

    .text-overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #333;
        height: 250px;
        color: #fff;
        padding: 20px;
        transform: translateY(100%);
        transition: transform 0.3s ease;
        cursor: pointer;

        /* recordar efecto blur para las cartas
        background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(12,28,28,1) 0%, rgba(47,61,61,1) 15%, rgba(245,245,245,1) 100%);
        transform: scale(1.1); */
    }

    .image-container:hover .hover-image {
        transform: scale(0);
        /* filter: blur(2.5rem); */
    }

    .image-container:hover .text-overlay {
        transform: translateY(0);
    }

    .botonCodigos{
        width:40px ;
        height:30px ;
    }
    .botonCodigos:hover{
        color: wheat;
        
    }
    .lenguajes{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    @media (max-width: 768px) {
        .cartas{
         display: grid;
         grid-template-columns: repeat(2,3fr);
        }
        div.image-container{
            margin-bottom: -40px;
            
        }
        h1.titulo.fuente{
            margin-top: -140px;
        }
       div.enlaces{
        display: flex;
        flex-direction: row;
       }
    }
    @media (max-width: 490px) {
        div.image-container{
            width: 200px;
            height: 150px;
        }
        div.enlaces {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50%;
       }
       div.text-overlay p{
        display: none;
       }
    }
    @media (max-width: 690px) {
        div.image-container{
            width: 200px;
            height: 150px;
        }
        div.enlaces {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50%;
       }
       div.text-overlay p{
        display: none;
       }
    }

</style>