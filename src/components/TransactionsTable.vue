<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <input type="text" placeholder="Search.." name="search" />
  <button v-on:click="searchTransaction" type="submit">
    <i class="fa fa-search"></i>
  </button>

  <table border="2">
    <tr>
      <th>Transaction Hash</th>
      <th>Time</th>
      <th>From</th>
      <th>To</th>
      <th>Value</th>
      <th>Block number</th>
    </tr>
    <tr>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr>
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
import axios from "axios";

export default {
  name: "TransactionsTable",
  data() {
    return {
      
    };
  },
  methods: {
    searchTransaction: function () {
      axios.get("http://localhost:3000/blocks/latest").then((response) => {
        this.blockNumberValue = response.data.number;
        /*this.blockTimeValue = response.data.timestamp;
        this.blockHashValue = response.data.hash;
        this.blockMinedByValue = response.data.miner;
        this.blockDifficultyValue = response.data.difficulty;
        this.blockSizeValue = response.data.size;
        this.blockGasUsedValue = response.data.gasUsed;
        this.blockGasLimitValue = response.data.gasLimit;*/
      });
    },
  },
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
  height: 50px;
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