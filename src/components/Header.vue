<template>
  <div class="topnav">
    <!--<h1>Polygon explorer</h1> !-->
    <a id="test1" href="#">
      <img id="test1" src="../assets/polygon.png" />
    </a>
    <a href="#">Transcations</a>
    <a href="#">Accounts</a>
    <a href="#">Blocks</a>
    <a href="#">Home</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-image: url("../assets/logo2.png");
  background-repeat: no-repeat;
  background-size: 100%;
}

.topnav {
  overflow: hidden;
  background-color: purple;
}

.topnav a {
  margin-top: 10px;
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}

.topnav h1 {
  float: left;
  margin-bottom: 5px;
  color: #ffff;
}

.topnav img {
  float: left;
  margin: 0;
  margin-left: 10px;
  height: 46px;
  width: 128px;
}

#test1 {
  float: left;
  margin: 0;
  margin-left: 10px;
  height: 46px;
  width: 128px;
}
</style>