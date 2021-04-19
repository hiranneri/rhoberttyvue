<template>
  <div id="app">
    <Apresentacao/>
    <Menu :rotas="routes"/>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
    <Rodape/>
  </div>
</template>

<script>
import { routes } from '../router.js';
import Apresentacao from './components/shared/Apresentacao.vue'
import Menu from './components/shared/Menu.vue';
import Rodape from './components/shared/Rodape';
export default {
  name: 'App',
  components: {
    Apresentacao,
    Menu,
    Rodape
  },
  data(){
    return {
      routes
    }
  }
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
}
</style>
