<template>
<div class="imc">   
    <h1>Calcule o seu IMC - Índice de Massa Corpórea</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h2>Calculadora de IMC</h2>
                    <p>Avalie o seu índice baseados no seu peso e altura e saiba qual é o seu peso ideal.</p>  
                    <p>{{ resultado }} <span class="resultado"> {{ resultadoIMC }} </span> </p> 
                    <p>{{ contato }}</p>
                </div>
                <div class="col-md-4 calculadoraIMC">
                    <form method="POST">
                        <div id="erros" v-for="erro in erros" :key="erro">
                            {{erro}}
                        </div>
                        <div class="form-group">
                            <label for="peso">Peso (em KG):</label>
                            <input type="text" class="form-control camposIMC" id="peso" v-model="peso" placeholder="Informe o seu peso: Ex: 89">
                        </div>
                        <div class="form-group">
                            <label for="altura">Altura (em metros):</label>
                            <input type="text" name="altura" id="altura" class="form-control camposIMC" v-model="altura" placeholder="Informe a sua altura: Ex: 1,79">
                        </div>
                        <hr>
                       <button class="btn btn-primary" v-on:click="calcularIMC($event)">Calcular</button>
                    </form>                
                </div>
            </div>
        </div> 
</div>
</template>
<script>
export default {
    data(){
        return {
            peso:'',
            altura:'',
            erros:[],
            imc:0,
            resultadoIMC:'',
            resultadoCompleto:'',
            resultado:'',
            contato:''
        }
    },
    methods:{
        calcularIMC(evt){

            evt.preventDefault();
        
          
            this.peso = this.peso.replace(',','.');
            this.altura = this.altura.replace(',','.');
            
            this.peso = parseFloat(this.peso);
            this.altura = parseFloat(this.altura);            
            
            this.validarCampos();
           
            if(this.erros.length===0){
                this.imc = this.peso / (this.altura*this.altura);
                this.mostrarResultado(this.imc);
            }else{
        
                this.altura='';
                this.peso='';            
                return;
            }


        },
        validarCampos(){
            this.erros.shift();
            if(this.peso.toString().trim()==='' || isNaN(this.peso)|| this.peso===0){
                this.erros.push('Digite o peso corretamente! Exemplo: 97');
                
            }else if(this.altura.toString().trim()==='' || this.altura<0 || this.altura>3 || isNaN(this.altura)){
                this.erros.push('Digite uma altura válida! Exemplo: 1,80');
            }
        },
        mostrarResultado(imc){
            if(imc<18.5){
            this.resultadoIMC = 'Abaixo do peso ideal'
            }else if(imc>=18.5 && imc<24.9){
             this.resultadoIMC = 'Peso ideal'
            }else if(imc>=24.9 && imc<30){
             this.resultadoIMC = 'Acima do peso ideal'
            }else{
               this.resultadoIMC = 'Obesidade';
            }

            this.resultado = 'O seu resultado foi: ';
           
            this.contato = 'Entre em contato comigo para te orientar para uma vida mais saudável';

            this.limparCampos();
        },
        limparCampos(){
            this.altura=''
            this.peso='';
            //this.resultadoIMC = ''
        }
            
    }
 
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
h2{
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