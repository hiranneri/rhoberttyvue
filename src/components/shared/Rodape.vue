<template>
<main>
    <footer>
       <div class="container">
           <div class="row">
               <div class="col-md-6">
                    <img src="../../assets/img/logo.webp" alt="Rhobertty William" id="imgLogoRodape">
               </div>
               <div class="col-md-4 redes">
                    <p class="textoFooter">Siga-me nas redes sociais para mais conteúdo:</p>
                    <a href="https://www.instagram.com/rhobertty_wt/" target="_blank">
                        <img src="../../assets/img/instagram.png" alt="" class="imglogoFooter">
                    </a>
                    
                    <a href="https://twitter.com/rhoberttyt" target="_blank">
                        <img src="../../assets/img/twitter.png" alt=""  class="imglogoFooter">
                    </a>
                        
                    <a href="https://www.facebook.com/rhobertty.william" target="_blank">
                        <img src="../../assets/img/facebook.png" alt=""  class="imglogoFooter">
                    </a>
                    
               </div>
           </div>
       </div>
         
    </footer>
</main>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
footer{
    background-color: #8aa2a2;
    width:100%;

}
#imgLogoRodape{
    height: 130px;
    margin-top: 5%;
    width: 150px;
    
}

.imglogoFooter{
    width: 40px;
    display: inline-block;
    margin-right: 15px;
    margin-left: 30px;
}
.redes{
    margin-top: 45px;
}

.textoFooter{
    margin-left: 10px;
    font-weight: bold;
    font-size: 15px;
}
.imgRedesFooter{
    width: 40px;
    display: inline-block;
    margin-right: 15px;
    margin-left: 30px;
}
@media (max-width: 400px) { 
    #imgLogoFooter{
        margin-left: auto;
        margin-right: auto;
        display: block;     
        
    }
    .textoFooter{
        margin-top: -20%;
        margin-left: 10%;
        margin-bottom: 10%;
        display: block;
    }
    #imgLogoRodape{
        height: 130px;
        margin-top: 5%;
        width: 150px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-bottom: 10%;
    }
 }
</style>