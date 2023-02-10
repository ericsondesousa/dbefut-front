<template>
  <nav class="bg-blue-800 text-white text-center p-2 mb-4">
    <router-link :to="{name: 'login'}">Login</router-link> |
    <router-link :to="{name: 'dashboard'}">Dashboard</router-link>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped></style>
