<template>
  <Header />
  <img alt="Vue logo" src="./assets/logo.png" />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
img{
  margin-top: 250px;
  margin-left: 10px;
  margin-right: 20px;
  width: 450px;
  height: 350px;
}
</style>
