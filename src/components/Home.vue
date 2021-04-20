<template>
    <div class="home">          
        <div class="perfil">
            <img src="../assets/img/foto.png" alt="Rhobertty" id="fotoPerfil">
        
        </div>
        <div class="descricao">
            <h1>Seja muito bem vindo ao meu Blog!</h1>
            <p><br>
                Formado em nutrição e graduando em Ed. Física venho aqui, ajudar você com algumas dicas, alcançar o corpo tão almejado<br>
                ou até mesmo tirar algumas dúvidas. <br> <br>       
                Então se sinta em casa, caso tenha alguma dúvida pode estar me contactando através dos meios aqui dispostos. <br> <br>
                NÃO ESQUEÇA de me seguir lá no <a href="https://www.instagram.com/rhobertty_wt/" target="_blank" id="textoInstagram">Instagram</a>, onde estou tirando dúvidas diariamente.
            </p>
        </div>
    </div>        
</template>
<script>
export default {
    name:'home',
     data() {
      return {
       
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>
<style scoped>
@media (min-width:600px) {
    /*
    .imagem-carousel{
        height: 700px;
        width: 500px;
    }
    */

    #fotoPerfil{
        width: 300px;
        height: 300px; 
        
    }
    .perfil{
        float: left;
        margin-left: 3%;
        margin-top: 2%;
        margin-bottom: 5%;
        margin-right: 5%;
        
    }
    /*
    .descricao{
        margin-top: 2%;
        display: inline-block;
        margin-left: 20%;
    }
*/
    h1{
        text-align: center;
        font-weight: bold;
        margin-top: 3%;
    }

    p{
        font-weight: 700;
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
        
    }

    h2{
        text-align: justify;   
    }
    .corpo{
        background-color: white;
        
    }
    #textoInstagram{
        text-decoration: solid;
        color: #00608e;
    }
}
@media (max-width:400px) {
   #fotoPerfil{
        width: 250px;
        height: 250px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: 10%;
    
    }
    .descricao{
        margin-left: auto;
        margin-right: auto;
        display: inline-block;

        margin-top: 2%; 
        margin-bottom: 1%;   
        font-weight: bold;
        
    }
    h1{
        text-align: center;
        margin-top: 10%;
        font-weight: bold;
    }

    p{
        margin: 25px;
        font-weight: bold;
        font-family: 'Raleway', sans-serif;
        font-size: 26px;
        
    }
    

    
}
</style>