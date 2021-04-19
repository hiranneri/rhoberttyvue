<template>
    <div class="apresentacao">
        
        <img src="../../assets/img/logo.webp" alt="Rhobertty William" class="img-logo">
        <div>
            <nav>
                <ul class="iconesContato">
                    <li><a href="tel:+5562981446610"> <img src="../../assets/img/telefone.png" alt="" class="img-item"></a></li>
                </ul>
                <ul class="iconesContato">
                    <li><a href="https://www.instagram.com/rhobertty_wt/"> <img src="../../assets/img/instagram.png" alt="" class="img-item">  <span>Instagram</span></a></li>
                   
                </ul>
                <ul class="iconesContato">
                    <li><a href="mailto:"> <img src="../../assets/img/email.png" alt="" class="img-item"> <span>E-mail</span></a></li>
                     
                </ul>
            </nav>
        </div>               
            
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
*{
    margin: 0;
	padding: 0;
}
.apresentacao{
    background-color:  #8aa2a2;
}
.img-logo{
    float: left;
    margin-left: 15%;
    max-width: 300px;
}
.iconesContato{
   
    display: inline-block;
    margin-left: 10%;
    margin-top: 3%;
  
}
.img-item{
    width: 50px;
}

li{
    display: flex;
    
}
ul{
    margin: 0 auto;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
}
a{
    margin-top: 10%;
    color: black;
    font-weight: bolder;
}
a:hover{
    color: white;
    font-weight: bold;
    
}
a:link{
  text-decoration: none;  
}
span{
    margin-left: 10px;
    font-weight: bold;
    font-size: 26px;
}

@media (max-width:400px) {
 
    .img-logo{
       
       margin-left: 8%;
       display: block;
       max-width: 300px;
    }
    .iconesContato{
   
        display: inline-block;
        margin-left: 15%;
        margin-top: 10%;
        margin-bottom: 10%;
        
  
    }
    .img-item{
        width: 50px;
    }

    span{
        display: none;
    }

    
}

</style>
