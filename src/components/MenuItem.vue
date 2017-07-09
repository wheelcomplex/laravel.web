<template>
    <router-link tag="li" :to="link" exact class="nav-item">
        <a class="nav-link"><slot></slot></a>
    </router-link>
</template>

<script>
    export default {
        props:['link']
    }
</script>