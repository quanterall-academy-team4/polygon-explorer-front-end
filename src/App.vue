<template>
  <div class="topnav" id="navbar">
    <router-link
      style="
        color: white;
        float: right;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      "
      to="/transactions"
      >Transcations</router-link
    >
    <router-link
      style="
        color: white;
        float: right;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      "
      to="/accounts"
      >Accounts</router-link
    >
    <router-link
      style="
        color: white;
        float: right;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      "
      to="/blocks"
      >Blocks</router-link
    >
    <router-link
      style="
        color: white;
        float: right;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      "
      to="/about"
      >About</router-link
    >

    <router-link
      style="
        color: white;
        float: right;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      "
      to="/"
      >Home</router-link
    >
  </div>
  <router-view />
</template>

<style>

html,body {
    margin:0;
    padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-repeat: no-repeat;
  background-size: 100%;
}

.topnav {
  overflow: auto;
  background-color: purple;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}

.topnav router-link {
  margin-top: 10px;
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav router-link:hover {
  background-color: #ddd;
  color: black;
}

.topnav router-link.active {
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