import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './src/components/Home.vue';
import Blog from './src/components/Blog.vue';
import IMC from './src/components/IMC.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
        mode: 'history',
        routes:[
            {
                path:'',
                name:'home',
                component: Home,
                titulo:'HOME'
            },
            {
                path:'/blog',
                name:'blog',
                component: Blog,
                titulo:'BLOG'
            },
            {
                path:'/imc',
                name:'imc',
                component: IMC,
                titulo:'IMC'
            }
        ]
    })


