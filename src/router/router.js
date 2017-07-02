import Vue from 'vue'
import VueRouter from 'vue-router'
import {Add,List,Detail} from '../components'

Vue.use(VueRouter);   //初始化路由实例

//设置路由表信息
const routes=[
    {path:'/list',component:List},
    {path:'/add',component:Add},
    {path:'/Detail/:id',name:'detail',component:Detail},
    {path:'*',  redirect:'/list'}
];

export  default new VueRouter({routes});