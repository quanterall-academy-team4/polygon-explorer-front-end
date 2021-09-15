<template>
  <footer>
    <div class="footer">
      <a
        href="https://github.com/quanterall-academy-team4/polygon-explorer-front-end"
      >
        <img src="../assets/github_logo.png" />
      </a>
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
  bottom: 0;
  width: 100%;
  height: 50px;
  position: fixed;
}

.footer img {
  margin-top: 5px;
  height: 41px;
  width: 112px;
}
</style>