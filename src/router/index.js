import Vue from "vue";
import Home from '../components/Home.vue';
//引入路由组件
import VueRouter from 'vue-router';
//注册路由组件
Vue.use(VueRouter);

//向外暴露组件
export default new VueRouter({
    routes: [
        //重定向
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: "my",
            path: '/my',
            component: () => import('../components/My')
        },
        {
            name: "palyer",
            path: '/player',
            component: () => import('../components/Player')
        }
    ]




})