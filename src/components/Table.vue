<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <form class="example" action="/action_page.php">
    <input type="text" placeholder="Search.." name="search" />
    <button type="submit"><i class="fa fa-search"></i></button>
  </form>
  <table border="2">
    <tr>
      <th>Number</th>
      <th>Time</th>
      <th>Hash</th>
      <th>Mined by</th>
      <th>Dificulty</th>
      <th>Size</th>
      <th>Gas Used</th>
      <th>Gas Limit</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Table",
};
</script>

<style>
table {
  position: fixed;
  right: 25%;
  top: 35%;
  left: 25%;
}
table td {
  width: 500px;
  height:50px;
}
table tr {
  width: 500px;
}

table th {
  width: 500px;
}

input {
  position: fixed;
  left: 40%;
  top: 12%;
  width: 15%;
}
button {
  position: fixed;
  left: 55%;
  height: 21px;
  top: 12%;
}
</style>