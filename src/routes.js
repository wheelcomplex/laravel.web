import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Contacts from "./views/Contacts.vue";
import NotFound from "./views/NotFound.vue";

let routes=[
    {
        path: '/',
        component: Home
    },
    {
        path: '/contacts',
        component: Contacts
    },
    {
        path: '*',
        template: NotFound
    }
];

export default new VueRouter({
    routes: routes,
    //mode: 'history',
    linkActiveClass:'active'
});