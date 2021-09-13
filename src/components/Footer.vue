<template>
  <footer>
    <div class="footer">
      <a href="https://github.com/quanterall-academy-team4/polygon-explorer-front-end"> <img src="../assets/github_logo.png"> </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  props: {},
};
</script>

<style>
.footer {
  overflow: hidden;
  background-color: purple;
  margin-top: 100px;
  size: 100ex;
}

.footer a {
  margin-bottom: 0px;
  float: inline-start;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.footer img {
    margin-top: 5px;
    height: 41px;
    width: 112px;
}
</style>