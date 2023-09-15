<template>
<div class="card mb-3">
    <div class="image-container">
            <img :src="url" :alt="nombre" class="hover-image hover:blur-sm" style="width: 100px;">
        <div class="text-overlay">
            <p>{{ nombre }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default{
    props:  {
        url:{String},
        nombre:{String}
}
}
</script>

<style scoped>
.card{
    filter: drop-shadow(6px 6px 2px #333);

}
.card:hover{
    filter: drop-shadow(6px 6px 2px wheat);

}
    .image-container {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 2%;
        

    }

    .hover-image {
        transition: transform 0.3s ease;
        cursor: pointer;

    }

    .text-overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #333;
        color: #fff;
        transform: translateY(100%);
        transition: transform 0.3s ease;
        width: 100%;
        cursor: pointer;
    }
    p{
        font-size: 10px;
        font-family: 'Barlow Condensed', sans-serif;
        font-family: 'Press Start 2P', cursive;
        color: wheat;

    }

    .image-container:hover .hover-image {
        transform: scale(1.4);
        animation: flash;
        animation-duration: 1s; 

    }

    .image-container:hover .text-overlay {
        transform: translateY(0);
    }

@media (max-width: 390px) {

   .image-container, img{
    width: 40px;
    height: 40px;
   }

}

@media (max-width: 768px) {
    .image-container, img{
        width: 40px;
        height: 40px;   
    
}
p{
        font-size: 5px;
    }
   
}
</style>