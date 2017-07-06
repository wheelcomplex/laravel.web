import Vue from 'vue';

import MainMenu from './components/Menu.vue';
import MenuListItem from './components/MenuItem.vue';

new Vue({
    el:'#app',
    components:{ MainMenu,MenuListItem }
});
