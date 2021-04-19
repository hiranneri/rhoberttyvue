<template>
<div class="imc">   
    <h1>Calcule o seu IMC - Índice de Massa Corpórea</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h2>Calculadora de IMC</h2>
                    <p>Avalie o seu índice baseados no seu peso e altura e saiba qual é o seu peso ideal.</p>  
                    <div class="resultadoIMC"></div> 
                </div>
                <div class="col-md-4 calculadoraIMC">
                    <form method="POST">
                        <label id="erros"></label>
                        <div class="form-group">
                            <label for="peso">Peso (em KG):</label>
                            <input type="text" class="form-control camposIMC" id="peso" placeholder="Informe o seu peso: Ex: 89">
                        </div>
                        <div class="form-group">
                            <label for="altura">Altura (em metros):</label>
                            <input type="text" name="altura" id="altura" class="form-control camposIMC" placeholder="Informe a sua altura: Ex: 1,79">
                        </div>
                        <hr>
                       <button class="btn btn-primary" onclick="return calcularIMC(event)">Calcular</button>
                    </form>                
                </div>
            </div>
        </div> 
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#erros{
    color: red;
    font-weight: bold;
}
.resultado{
    color: red;
}

h1{
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;

}
p{
    font-weight: bold;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
}
.calculadoraIMC{
    background-color: #a4b3a0;
    padding-top: 30px;
    padding-bottom: 60px;
    margin-bottom: 100px;
}
label{
    font-weight: bold;
}
</style>