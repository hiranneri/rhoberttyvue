<template>
    <div class="conteudo">
        <h1>NUTRIÇÃO ESPORTIVA E SAÚDE</h1>
        <div class="conteiner">      
            <div class="blog-item">
                <img src="../assets/img/capa-bloco.webp" alt="" class="capa-bloco">
                <p class="data-publicacao">Mar 13</p> <br>  
                <p class="titulo-publicacao">1 TITULO TITULO TITULO TITULO TITULO TITULO TITULO</p>
                <hr> 
                <img src="../assets/img/comentarios.png" alt="" class="iconeComentario">   
                <span class="quantidade-likes">0</span>                
            </div>
            <div class="blog-item">
                <img src="../assets/img/capa-bloco.webp" alt="" class="capa-bloco">
                <p class="data-publicacao">Mar 13</p> <br>  
                <p class="titulo-publicacao">1 TITULO TITULO TITULO TITULO TITULO TITULO TITULO</p>
                <hr> 
                <img src="../assets/img/comentarios.png" alt="" class="iconeComentario">   
                <span class="quantidade-likes">0</span>                
            </div>
            <div class="blog-item">
                <img src="../assets/img/capa-bloco.webp" alt="" class="capa-bloco">
                <p class="data-publicacao">Mar 13</p> <br>  
                <p class="titulo-publicacao">1 TITULO TITULO TITULO TITULO TITULO TITULO TITULO</p>
                <hr> 
                <img src="../assets/img/comentarios.png" alt="" class="iconeComentario">   
                <span class="quantidade-likes">0</span>                
            </div>

        </div>
    </div>
                 
</template>
<script>
export default {
    
}
</script>
<style scoped>
.conteudo{
    background-image: url('../assets/img/fundo-blog2.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-bottom: 70px;
}
h1{
    margin-top: 20px;
    text-align: center;
    color: rgb(68, 170, 163);
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 3.5rem;
}
.conteiner{
    display: grid;
    grid-template-columns: 600px 600px 600px;
    justify-content: center;
    grid-gap: 0px 20px;
}
.data-publicacao{
    margin-top: 30px;
    margin-left: 15px;
    font-size: 18px;
}
.titulo-publicacao{
    font-size: 28px;
    font-weight: bold;
    margin-left: 10px;
}
.blog-item{
    background-color: white;
    margin-left: 10%;
    margin-right: 10%;
    border: 5px solid black;
}
.capa-bloco{ 
    width: 100%;
}


.quantidade-likes{
    padding: 5px;
    margin: 5px;
}
.iconeComentario{
    width: 8%;
    margin-left: 8px;
    margin-right: 8px;
}

@media (max-width: 400px) { 
    .img-menu{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 5%;
        width: 30px;
        height: 30px;
    }
    h1{
        margin-bottom: 35px;
    }
    .conteiner{
        display: grid;
        grid-template-columns: 400px;
        grid-template-rows: 300px;
        grid-gap: 2%;
    }
    .data-publicacao{
        margin-top: 15px;
        margin-left: 5px;
        font-size: 10px;
        font-weight: bold;
    }
    .titulo-publicacao{
        font-size: 14px;
        font-weight: bold;
        margin-left: 5px;
        margin-top: -40px;
        margin-bottom: -15px;
    }   
    #imgLogoFooter{
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
 }
</style>