<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <input v-model="argument" type="text" placeholder="Search.." name="search" />
  <button v-on:click="searchTransaction" type="submit">
    <i class="fa fa-search"></i>
  </button>

  <table border="2">
    <tr>
      <th>Transaction Hash</th>
      <th>Nonce</th>
      <th>From</th>
      <th>To</th>
      <th>Value</th>
      <th>Block number</th>
    </tr>
    <tr>
      <td>{{transactionHash}}</td>
      <td>{{nonceValue}}</td>
      <td>{{addressFromValue}}</td>
      <td>{{addressToValue}}</td>
      <td>{{amountValue}}</td>
      <td><router-link :to="`/blocks/${blockNumberValue}`"> {{blockNumberValue}} </router-link></td>
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
      transactionHash: '',
      nonceValue: '',
      addressFromValue: '',
      addressToValue: '',
      amountValue: '',
      blockNumberValue: '',

      argument: ''
    };
  },
  methods: {
    searchTransaction: function () {
      let path = "http://localhost:3000/transactions/";

      if (this.argument === ''){
        path += 'latest';
      } else {
        path += 'hash=' + this.argument;
      }

      console.log(path);

      axios.get(path).then((response) => {
        this.transactionHash = response.data.hash;
        this.nonceValue = response.data.nonce;
        this.addressFromValue = response.data.from;
        this.addressToValue = response.data.to;
        this.amountValue = response.data.value;
        this.blockNumberValue = response.data.blockNumber;
      });
    },
  },
};
</script>

<style>


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