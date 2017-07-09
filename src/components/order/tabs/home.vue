<template>
    <form action="" method="post" class="container" @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="email">
        </div>
        <div class="form-group">
            <label for="pass">Password</label>
            <input type="password" class="form-control" id="pass" placeholder="Password" v-model="password">
        </div>
        <input type="submit" value="Next"/>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                email:'',
                password:''
            }
        },
        methods:{
            onSubmit(){
                var self=this;
                axios.post('/data.php',{
                    email:this.email,
                    password:this.password
                }).then(function (response) {
                    self.$parent.fullData.home=response.config.data;
                    $('#order-tabs a[href="#messages"]').tab('show');
                    //console.log();
                    //console.log(response.config.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
                //
            }
        }

    }
</script>