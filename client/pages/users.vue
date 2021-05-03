<template>
    <div>
        <h1>Users</h1>
        <nuxt-child />
    </div>
</template>

<script>
    export default {
        layout: "red",
        middleware: 'auth'
    };
</script>

<style></style>