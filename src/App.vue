<template>

  <template v-if="this.$route.meta.layout">
    <Navbar />

    <router-view class="content" />
  </template>

  <template v-else>
    <Navbar />

    <router-view />

    <Footer />
  </template>

</template>



<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>

</style>
