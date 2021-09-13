<template>
  <div class="home">
    <img class="center" src="../assets/logo.png">
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue";
export default {
  name: 'Home',
  components: {
    Footer,
  }
}
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
