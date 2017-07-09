<template>
    <form action="" method="post" class="container" @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="email">Card number</label>
            <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="card">
        </div>
        <input type="submit" value="submit"/>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                card:''
            }
        },
        methods:{
            onSubmit(){
                var self=this;
                axios.post('/data.php',{
                    card:this.card,
                }).then(function (response) {
                    self.$parent.fullData.card=response.config.data;
                    console.log(self.$parent.fullData);
                    console.log('order successed');
                    //console.log(response.config.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
                //$('#order-tabs a[href="#messages"]').tab('show')
            }
        }

    }
</script>