<template>
  <header>
    <div>
      <ul>
        <li><NuxtLink to="/">访问index</NuxtLink></li>
        <li><NuxtLink to="/login">访问login</NuxtLink></li>
        <li><NuxtLink to="/user">访问user</NuxtLink></li>
        <li> <NuxtLink to="/about">访问about</NuxtLink></li>
      </ul>
    </div>
  </header>
  <main>
    <div>
      {{name}}
      <el-button type="primary" @click="test">click</el-button>
      <NuxtPage></NuxtPage>
    </div>
  </main>
  <footer>
    底部
  </footer>
</template>
<script setup>
console.log("import:",import.meta);
</script>

<style lang="scss" scoped>
header, main, footer{
  border:1px solid black;
}
  h2{
    color:$h1Color;
  }
</style>
