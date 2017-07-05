import Vue from 'vue';
import Example from './components/Menu';


new Vue({
    el:'#app',
    components:{
        Example
    },
    data:{
        name: 'John',
        surname: 'Smith'
    }
});