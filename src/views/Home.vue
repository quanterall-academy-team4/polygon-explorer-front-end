<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
