<template>
    <div class="order-template">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist" id="order-tabs">
            <li class="nav-item" v-for="(tab, index) in tabs">
                <a class="nav-link" :class="{ 'active': index === 0 }" data-toggle="tab" :href=" '#'+tab.id" role="tab">{{ tab.title }}</a>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <div class="tab-pane" :class="{ 'active': index === 0 }" :id="tab.id" role="tabpanel" v-for="(tab,index) in tabs">
                <component  :is="tab.template"></component>
            </div>
        </div>
    </div>
</template>
<script>
    import Home from './tabs/home.vue';
    import Messages from './tabs/messages.vue';
    import Profile from './tabs/profile.vue';
    import Settings from './tabs/settings.vue';

    export default  {
        components:{
            Home,
            Messages,
            Profile,
            Settings
        },
        data(){
            return {
                fullData:{ },
                tabs:[
                    {
                        id: 'home',
                        title: "Home",
                        template: 'Home'
                    },
                    {
                        id: 'messages',
                        title: "Messages",
                        template: "Messages"
                    },
                    /*
                    {
                        id: 'profile',
                        title: "Profile",
                        template: "Profile"
                    },
                    {
                        id: 'settings',
                        title: "Settings",
                        template: "Settings"
                    },*/
                ]
            }
        }

    }
</script>