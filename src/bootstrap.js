import Vue from "vue";
import MainMenu from './components/Menu.vue';
import MenuListItem from './components/MenuItem.vue';
import VueRouter from "vue-router";
import axios from "axios";

import Order from './components/order/Init.vue';

window.Vue=Vue;
window.axios=axios;
window.MainMenu=MainMenu;
window.MenuListItem=MenuListItem;
window.Order=Order;

Vue.use(VueRouter);
