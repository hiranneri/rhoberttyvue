<template>
<div>
    <nav class="menu-central">
        <ul>
            <li v-for="rota in rotas" :key="rota.titulo">
                <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
                
            </li>
            
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name:'blog',
    
    created(){
        this.$router.options.routes.forEach(route => {
            this.rotas.push({
                name: route.name
                ,path: route.path,
                titulo: route.titulo
            })
        })
    },
    data(){
        return {
            rotas:[]
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.menu-central{
    background-color: #8ba8a9b3;
    height: 40px;   
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
    margin-top: 25%;
    color: black;
    font-weight: bold;
    font-size: 15px;
}
a:hover{
    color: white;
    font-weight: bold;
    
}
a:link{
  text-decoration: none;  
}

@media (max-width: 400px) { 
    .img-menu{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 5%;
        width: 30px;
        height: 30px;
    }
 }
</style>