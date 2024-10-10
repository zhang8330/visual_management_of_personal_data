<template>
<h1>index页面</h1>
</template>

<script setup lang="ts">
if(import.meta.server){
  navigateTo("/login");
}

console.log("client");
</script>

<style scoped>

</style>
