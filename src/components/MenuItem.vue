<template>
    <li class="nav-item">
        <a class="nav-link" :href="link" ><slot></slot></a>
    </li>
</template>

<script>
    export default {
        props:['link']
    }
</script>