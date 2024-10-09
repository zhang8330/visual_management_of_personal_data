<script setup>
  const name = ref("aaa");
  console.log("哈哈哈1");
  const test = ()=>{
    console.log("test执行");
  }
  for(let i = 1;i <= 2;i++)alert(`执行了${i}次`);
</script>

<template>
  <div>
    {{name}}
    <button type="primary" @click="test">click</button>
  </div>
</template>
